// Daily exploration challenges system

export interface DailyChallenge {
  type: 'galaxies' | 'systems' | 'planets';
  current: number;
  target: number;
  dayNumber: number;
  completed: boolean;
}

export interface DailyChallenges {
  date: string; // YYYY-MM-DD
  dayNumber: number;
  challenges: DailyChallenge[];
  lastReset: number; // timestamp
  totalCompletedDays: number; // Total days where all challenges were completed
  dayCompleted?: boolean; // Flag to track if current day was already counted
}

export class DailyChallengesManager {
  private static readonly STORAGE_KEY = '_atlasDailyChallenges';
  private static readonly BASE_GOALS = {
    galaxies: 1,    // Base cumulative growth per day
    systems: 3,     // Base cumulative growth per day 
    planets: 10     // Base cumulative growth per day
  };

  public static getTodaysChallenges(): DailyChallenges {
    const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
    const stored = this.getStoredChallenges();
    
    // Check if we need to reset for a new day
    if (!stored || stored.date !== today) {
      return this.createNewDayChallenges(today, stored);
    }
    
    return stored;
  }


  private static getStoredChallenges(): DailyChallenges | null {
    try {
      const data = localStorage.getItem(this.STORAGE_KEY);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Error reading daily challenges:', error);
      return null;
    }
  }

  private static createNewDayChallenges(today: string, previous: DailyChallenges | null): DailyChallenges {
    // Calculate day number (days since first launch)
    const dayNumber = previous ? previous.dayNumber + 1 : 1;
    
    // Calculate cumulative targets with exponential growth
    // Each day requires total exploration to date: dayNumber * base * (1.10^(day-1))
    const dailyMultiplier = Math.pow(1.10, dayNumber - 1);
    
    // Get current stats
    const stats = this.getCurrentStats();
    
    const challenges: DailyChallenge[] = [
      {
        type: 'galaxies',
        current: stats.galaxies,
        target: Math.ceil(dayNumber * this.BASE_GOALS.galaxies * dailyMultiplier),
        dayNumber,
        completed: false
      },
      {
        type: 'systems', 
        current: stats.systems,
        target: Math.ceil(dayNumber * this.BASE_GOALS.systems * dailyMultiplier),
        dayNumber,
        completed: false
      },
      {
        type: 'planets',
        current: stats.planets,
        target: Math.ceil(dayNumber * this.BASE_GOALS.planets * dailyMultiplier),
        dayNumber,
        completed: false
      }
    ];

    // If we're creating a new day and the previous day was completed, increment totalCompletedDays
    const previousCompletedCount = (previous?.totalCompletedDays || 0) + (previous?.dayCompleted ? 1 : 0);

    const newChallenges: DailyChallenges = {
      date: today,
      dayNumber,
      challenges,
      lastReset: Date.now(),
      totalCompletedDays: previousCompletedCount,
      dayCompleted: false
    };

    this.saveChallenges(newChallenges);
    
    return newChallenges;
  }

  private static getCurrentStats(): { galaxies: number; systems: number; planets: number } {
    try {
      // Import the storage stats function
      const atlasData = localStorage.getItem('__atlasArchive');
      if (!atlasData) return { galaxies: 0, systems: 0, planets: 0 };

      const data = JSON.parse(atlasData);
      let totalSystems = 0;
      let totalPlanets = 0;

      Object.values(data.g || {}).forEach((galaxy: any) => {
        totalSystems += Object.keys(galaxy).length;
        Object.values(galaxy).forEach((planetBitmap: any) => {
          if (typeof planetBitmap === 'string') {
            // Count 1s in bitmap
            totalPlanets += (planetBitmap.match(/1/g) || []).length;
          }
        });
      });

      // Count visited galaxies from both data.g (galaxies with systems) and data.gv (explicitly visited galaxies)
      const galaxiesWithSystems = new Set(Object.keys(data.g || {}));
      const visitedGalaxies = new Set(Object.keys(data.gv || {}));
      const allVisitedGalaxies = new Set([...galaxiesWithSystems, ...visitedGalaxies]);

      return {
        galaxies: allVisitedGalaxies.size,
        systems: totalSystems,
        planets: totalPlanets
      };
    } catch (error) {
      console.error('Error getting current stats:', error);
      return { galaxies: 0, systems: 0, planets: 0 };
    }
  }

  public static updateProgress(): DailyChallenges {
    const challenges = this.getTodaysChallenges();
    const currentStats = this.getCurrentStats();
    
    // Update current progress
    challenges.challenges.forEach(challenge => {
      const newCurrent = currentStats[challenge.type];
      challenge.current = newCurrent;
      challenge.completed = newCurrent >= challenge.target;
    });

    const isNowAllCompleted = challenges.challenges.every(c => c.completed);
    
    // If all challenges are completed and we haven't recorded this day yet, mark it as completed
    // But don't increment totalCompletedDays until tomorrow (it's for previous days only)
    if (isNowAllCompleted && !challenges.dayCompleted) {
      challenges.dayCompleted = true;
    }

    this.saveChallenges(challenges);
    return challenges;
  }



  public static getCompletedDaysCount(): number {
    try {
      const challenges = this.getTodaysChallenges();
      return challenges.totalCompletedDays || 0;
    } catch (error) {
      console.error('Error getting completed days count:', error);
      return 0;
    }
  }


  private static saveChallenges(challenges: DailyChallenges): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(challenges));
    } catch (error) {
      console.error('Error saving daily challenges:', error);
    }
  }

  public static getCompletionStatus(): { completed: number; total: number; allCompleted: boolean } {
    const challenges = this.getTodaysChallenges();
    const completed = challenges.challenges.filter(c => c.completed).length;
    const total = challenges.challenges.length;
    
    return {
      completed,
      total,
      allCompleted: completed === total
    };
  }

  public static getDayInfo(): { dayNumber: number; multiplier: number } {
    const challenges = this.getTodaysChallenges();
    const baseMultiplier = Math.pow(1.10, challenges.dayNumber - 1);
    return {
      dayNumber: challenges.dayNumber,
      multiplier: Math.round(baseMultiplier * 100) / 100 // Round to 2 decimals for display
    };
  }

}