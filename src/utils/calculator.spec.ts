import { describe, it, expect } from 'vitest';
import { calculateInflation, calculateCumulativeInflationPercentage } from './calculator';

describe('calculator', () => {
  it('returns initial amount if start year and end year are the same', () => {
    expect(calculateInflation(1000, 2020, 2020)).toBe(1000);
  });

  it('calculates forward inflation for a simple range (2020-2023)', () => {
    // Rates for 2021, 2022, 2023:
    // 2021: 1.56%
    // 2022: 5.51%
    // 2023: 3.67%
    // Factor = 1.0156 * 1.0551 * 1.0367 = 1.110885...
    const result = calculateInflation(1000, 2020, 2023);
    expect(result).toBeCloseTo(1110.89, 1);
  });

  it('calculates reverse inflation (purchasing power reversal)', () => {
    // If Rp 1,110.89 in 2023, it should be Rp 1,000 in 2020
    const result = calculateInflation(1110.89, 2023, 2020);
    expect(result).toBeCloseTo(1000, 0);
  });

  it('handles zero amount correctly', () => {
    expect(calculateInflation(0, 1995, 2025)).toBe(0);
  });

  it('calculates extreme inflation (1998)', () => {
    // 1998 inflation was 77.63%
    const result = calculateInflation(1000, 1997, 1998);
    expect(result).toBeCloseTo(1776.3, 1);
  });

  it('calculates cumulative inflation percentage (1997-1998)', () => {
    const percentage = calculateCumulativeInflationPercentage(1997, 1998);
    expect(percentage).toBeCloseTo(77.63, 2);
  });

  it('calculates cumulative inflation percentage for multiple years (2020-2023)', () => {
    const percentage = calculateCumulativeInflationPercentage(2020, 2023);
    expect(percentage).toBeCloseTo(11.09, 1);
  });
});
