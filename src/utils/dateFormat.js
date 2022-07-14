export const LOCALE_ID = "id";
const NUMERIC = "numeric";
const LONG = "long";

export const DEFAULT_YEAR_FORMAT = NUMERIC;
export const DEFAULT_DAY_FORMAT = NUMERIC;
export const LONG_MONTH_FORMAT = LONG;

/**
 * Get current date, month and year in a single string
 *
 * @returns {string} date, month and year, e.g: 23 Juli 2021
 */
export function getCurrentLongDate() {
  return new Date(Date.now()).toLocaleString(LOCALE_ID, {
    year: DEFAULT_YEAR_FORMAT,
    month: LONG_MONTH_FORMAT,
    day: DEFAULT_DAY_FORMAT,
  });
}
