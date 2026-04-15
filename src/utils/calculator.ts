import { getInflationData } from '../services/inflationService';

/**
 * Calculates the adjusted value of money based on historical inflation rates.
 * 
 * Formula:
 * If startYear < endYear (Future Value):
 *   Result = InitialAmount * Product of (1 + rate_i/100) for i from startYear + 1 to endYear
 * 
 * If startYear > endYear (Past Value/Purchasing Power):
 *   Result = InitialAmount / Product of (1 + rate_i/100) for i from endYear + 1 to startYear
 * 
 * @param initialAmount The starting amount of money.
 * @param startYear The year the money is from.
 * @param endYear The year to adjust the value to.
 * @returns The adjusted value of money.
 */
export const calculateInflation = (
  initialAmount: number,
  startYear: number,
  endYear: number
): number => {
  if (startYear === endYear) return initialAmount;

  const data = getInflationData();
  const minYear = Math.min(startYear, endYear);
  const maxYear = Math.max(startYear, endYear);

  // Filter data for years in the range (minYear, maxYear]
  const relevantRates = data
    .filter(entry => entry.tahun > minYear && entry.tahun <= maxYear)
    .map(entry => entry.inflasi_persen);

  // Calculate cumulative factor
  const factor = relevantRates.reduce((acc, rate) => acc * (1 + rate / 100), 1);

  if (startYear < endYear) {
    // Forward calculation: Initial * Factor
    return initialAmount * factor;
  } else {
    // Reverse calculation: Initial / Factor
    return initialAmount / factor;
  }
};

/**
 * Calculates the total cumulative inflation percentage between two years.
 * 
 * @param startYear Starting year.
 * @param endYear Ending year.
 * @returns Percentage (e.g., 15.5 for 15.5%).
 */
export const calculateCumulativeInflationPercentage = (
  startYear: number,
  endYear: number
): number => {
  if (startYear === endYear) return 0;

  const data = getInflationData();
  const minYear = Math.min(startYear, endYear);
  const maxYear = Math.max(startYear, endYear);

  const relevantRates = data
    .filter(entry => entry.tahun > minYear && entry.tahun <= maxYear)
    .map(entry => entry.inflasi_persen);

  const factor = relevantRates.reduce((acc, rate) => acc * (1 + rate / 100), 1);

  // Return as percentage
  return (factor - 1) * 100;
};
