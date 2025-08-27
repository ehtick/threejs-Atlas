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
  totalCompletedDays?: number; // Total days where all challenges were completed
  completedDates?: string[]; // Array of completed dates (for tracking)
}

export class DailyChallengesManager {
  private static readonly STORAGE_KEY = '_atlasDailyChallenges';
  private static readonly BASE_GOALS = {
    galaxies: 1,    // Start with just 1 galaxy per day - more achievable
    systems: 5,     // Keep systems at 5 - reasonable daily goal 
    planets: 10     // Keep planets at 10 - encourages exploration
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
      lastReset: Date.now(),
      totalCompletedDays: this.migrateCompletionHistory()
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
    const wasAllCompleted = challenges.challenges.every(c => c.completed);
    
    // Update current progress
    challenges.challenges.forEach(challenge => {
      const newCurrent = currentStats[challenge.type];
      challenge.current = newCurrent;
      challenge.completed = newCurrent >= challenge.target;
    });

    const isNowAllCompleted = challenges.challenges.every(c => c.completed);
    
    // If all challenges are completed and we haven't recorded this day yet, record it
    if (isNowAllCompleted && !this.isDayAlreadyRecorded(challenges)) {
      this.recordCompletedDay(challenges.date);
    }

    this.saveChallenges(challenges);
    return challenges;
  }

  private static recordCompletedDay(date: string): void {
    try {
      const challenges = this.getTodaysChallenges();
      
      // Initialize arrays if they don't exist
      if (!challenges.completedDates) {
        challenges.completedDates = [];
      }
      
      // Add the date to completed dates if not already there
      if (!challenges.completedDates.includes(date)) {
        challenges.completedDates.push(date);
        challenges.totalCompletedDays = (challenges.totalCompletedDays || 0) + 1;
        this.saveChallenges(challenges);
      }
    } catch (error) {
      console.error('Error recording completed day:', error);
    }
  }

  private static migrateCompletionHistory(): number {
    try {
      const historyKey = '_atlasCompletionHistory';
      const history = localStorage.getItem(historyKey);
      
      if (history) {
        const completedDays = JSON.parse(history);
        const count = Array.isArray(completedDays) ? completedDays.length : 0;
        
        // Clean up old storage after migration
        localStorage.removeItem(historyKey);
        
        return count;
      }
      
      return 0;
    } catch (error) {
      console.error('Error migrating completion history:', error);
      return 0;
    }
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

  private static isDayAlreadyRecorded(challenges: DailyChallenges): boolean {
    // Check if today's date is already in the completed dates array
    const today = challenges.date;
    const completedDates = challenges.completedDates || [];
    return completedDates.includes(today);
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