/**
 * 🗺️ WanderLust Travel Planner
 *
 * WanderLust is a travel planning app that suggests fun activities
 * based on the month and the current temperature. Users enter the
 * month number and temperature, and the app recommends what to do!
 *
 * Step 1 — Determine the season from the month:
 *   - December, January, February  (12, 1, 2)   → "Winter"
 *   - March, April, May            (3, 4, 5)     → "Spring"
 *   - June, July, August           (6, 7, 8)     → "Summer"
 *   - September, October, November (9, 10, 11)   → "Autumn"
 *
 * Step 2 — Suggest an activity based on season AND temperature (°C):
 *   - Winter + temp < 0     → "skiing"
 *   - Winter + temp >= 0    → "ice skating"
 *   - Spring + temp > 20    → "hiking"
 *   - Spring + temp <= 20   → "museum visit"
 *   - Summer + temp > 35    → "swimming"
 *   - Summer + temp <= 35   → "cycling"
 *   - Autumn + temp > 15    → "nature walk"
 *   - Autumn + temp <= 15   → "reading at a cafe"
 *
 * Return an object: { season: string, activity: string }
 *
 * Rules:
 *   - If month is not 1–12, return null
 *
 * @param {number} month - Month of the year (1-12)
 * @param {number} temperature - Current temperature in Celsius
 * @returns {{ season: string, activity: string } | null}
 */
export function getSeasonActivity(month, temperature) {
  const seasons = {
    1: "Winter",
    2: "Winter",
    3: "Spring",
    4: "Spring",
    5: "Spring",
    6: "Summer",
    7: "Summer",
    8: "Summer",
    9: "Autumn",
    10: "Autumn",
    11: "Autumn",
    12: "Winter",
  };

  const activities = {
    skiing: "skiing",
    iceSskating: "ice skating",
    hiking: "hiking",
    museumVisit: "museum visit",
    swimming: "swimming",
    cycling: "cycling",
    natureWalk: "nature walk",
    readingAtcafe: "reading at a cafe",
  };

  switch (month) {
    case 12:
    case 1:
    case 2:
      return {
        season: seasons[month],
        activity:
          temperature < 0 ? activities["skiing"] : activities["iceSskating"],
      };
    case 3:
    case 4:
    case 5:
      return {
        season: seasons[month],
        activity:
          temperature > 20 ? activities["hiking"] : activities["museumVisit"],
      };
    case 6:
    case 7:
    case 8:
      return {
        season: seasons[month],
        activity:
          temperature > 35 ? activities["swimming"] : activities["cycling"],
      };
    case 9:
    case 10:
    case 11:
      return {
        season: seasons[month],
        activity:
          temperature > 15
            ? activities["natureWalk"]
            : activities["readingAtcafe"],
      };
    default:
      return null;
  }
}
