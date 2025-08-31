// atlas-ui/react/static/js/Utils/DailyChallenges.tsx
import React from "react";
import { getItem, setItem } from "./b64.tsx";

export interface DailyChallenge {
  type: "galaxies" | "systems" | "planets";
  current: number;
  target: number;
  dayNumber: number;
  completed: boolean;
}

export interface DailyChallenges {
  date: string;
  dayNumber: number;
  challenges: DailyChallenge[];
  lastReset: number;
  totalCompletedDays: number;
  dayCompleted?: boolean;
}

export class DailyChallengesManager {
  private static readonly STORAGE_KEY = "_atlasDailyChallenges";
  private static readonly BASE_GOALS = {
    galaxies: 1,
    systems: 3,
    planets: 10,
  };

  public static getTodaysChallenges(): DailyChallenges {
    const today = new Date().toISOString().split("T")[0];
    const stored = this.getStoredChallenges();

    if (!stored || stored.date !== today) {
      return this.createNewDayChallenges(today, stored);
    }

    return stored;
  }

  private static getStoredChallenges(): DailyChallenges | null {
    try {
      const data = getItem(this.STORAGE_KEY);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error("Error reading daily challenges:", error);
      return null;
    }
  }

  private static createNewDayChallenges(today: string, previous: DailyChallenges | null): DailyChallenges {
    const dayNumber = previous ? previous.dayNumber + 1 : 1;
    const dailyMultiplier = Math.pow(1.1, dayNumber - 1);
    const stats = this.getCurrentStats();

    const challenges: DailyChallenge[] = [
      {
        type: "galaxies",
        current: stats.galaxies,
        target: Math.ceil(dayNumber * this.BASE_GOALS.galaxies * dailyMultiplier),
        dayNumber,
        completed: false,
      },
      {
        type: "systems",
        current: stats.systems,
        target: Math.ceil(dayNumber * this.BASE_GOALS.systems * dailyMultiplier),
        dayNumber,
        completed: false,
      },
      {
        type: "planets",
        current: stats.planets,
        target: Math.ceil(dayNumber * this.BASE_GOALS.planets * dailyMultiplier),
        dayNumber,
        completed: false,
      },
    ];

    const previousCompletedCount = (previous?.totalCompletedDays || 0) + (previous?.dayCompleted ? 1 : 0);

    const newChallenges: DailyChallenges = {
      date: today,
      dayNumber,
      challenges,
      lastReset: Date.now(),
      totalCompletedDays: previousCompletedCount,
      dayCompleted: false,
    };

    this.saveChallenges(newChallenges);

    return newChallenges;
  }

  private static getCurrentStats(): { galaxies: number; systems: number; planets: number } {
    try {
      const atlasData = getItem("__atlasArchive");
      if (!atlasData) return { galaxies: 0, systems: 0, planets: 0 };

      const data = JSON.parse(atlasData);
      let totalSystems = 0;
      let totalPlanets = 0;

      Object.values(data.g || {}).forEach((galaxy: any) => {
        totalSystems += Object.keys(galaxy).length;
        Object.values(galaxy).forEach((planetBitmap: any) => {
          if (typeof planetBitmap === "string") {
            totalPlanets += (planetBitmap.match(/1/g) || []).length;
          }
        });
      });

      const galaxiesWithSystems = new Set(Object.keys(data.g || {}));
      const visitedGalaxies = new Set(Object.keys(data.gv || {}));
      const allVisitedGalaxies = new Set([...galaxiesWithSystems, ...visitedGalaxies]);

      return {
        galaxies: allVisitedGalaxies.size,
        systems: totalSystems,
        planets: totalPlanets,
      };
    } catch (error) {
      console.error("Error getting current stats:", error);
      return { galaxies: 0, systems: 0, planets: 0 };
    }
  }

  public static updateProgress(): DailyChallenges {
    const challenges = this.getTodaysChallenges();
    const currentStats = this.getCurrentStats();

    challenges.challenges.forEach((challenge) => {
      const newCurrent = currentStats[challenge.type];
      challenge.current = newCurrent;
      challenge.completed = newCurrent >= challenge.target;
    });

    const isNowAllCompleted = challenges.challenges.every((c) => c.completed);

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
      console.error("Error getting completed days count:", error);
      return 0;
    }
  }

  private static saveChallenges(challenges: DailyChallenges): void {
    try {
      setItem(this.STORAGE_KEY, JSON.stringify(challenges));
    } catch (error) {
      console.error("Error saving daily challenges:", error);
    }
  }

  public static getCompletionStatus(): { completed: number; total: number; allCompleted: boolean } {
    const challenges = this.getTodaysChallenges();
    const completed = challenges.challenges.filter((c) => c.completed).length;
    const total = challenges.challenges.length;

    return {
      completed,
      total,
      allCompleted: completed === total,
    };
  }

  public static getDayInfo(): { dayNumber: number; multiplier: number } {
    const challenges = this.getTodaysChallenges();
    const baseMultiplier = Math.pow(1.1, challenges.dayNumber - 1);
    return {
      dayNumber: challenges.dayNumber,
      multiplier: Math.round(baseMultiplier * 100) / 100,
    };
  }
}
