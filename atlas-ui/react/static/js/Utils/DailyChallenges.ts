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
}

export class DailyChallengesManager {
  private static readonly STORAGE_KEY = '_atlasDailyChallenges';
  private static readonly BASE_GOALS = {
    galaxies: 4,
    systems: 10,
    planets: 30
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
    
    // Calculate progressive multiplier (1.0, 1.1, 1.2, 1.3, etc - caps at 2.0)
    const multiplier = Math.min(1 + (dayNumber - 1) * 0.1, 2.0);
    
    // Get current stats
    const stats = this.getCurrentStats();
    
    const challenges: DailyChallenge[] = [
      {
        type: 'galaxies',
        current: stats.galaxies,
        target: Math.ceil(this.BASE_GOALS.galaxies * multiplier),
        dayNumber,
        completed: false
      },
      {
        type: 'systems', 
        current: stats.systems,
        target: Math.ceil(this.BASE_GOALS.systems * multiplier),
        dayNumber,
        completed: false
      },
      {
        type: 'planets',
        current: stats.planets,
        target: Math.ceil(this.BASE_GOALS.planets * multiplier),
        dayNumber,
        completed: false
      }
    ];

    const newChallenges: DailyChallenges = {
      date: today,
      dayNumber,
      challenges,
      lastReset: Date.now()
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

      return {
        galaxies: Object.keys(data.g || {}).length,
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

    this.saveChallenges(challenges);
    return challenges;
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
    return {
      dayNumber: challenges.dayNumber,
      multiplier: Math.min(1 + (challenges.dayNumber - 1) * 0.1, 2.0)
    };
  }
}