import inflationDataRaw from '../data/inflation.json';
import type { InflationEntry } from '../types/inflation';

const inflationData: InflationEntry[] = inflationDataRaw as InflationEntry[];

export const getInflationData = (): InflationEntry[] => {
  return inflationData;
};

export const getInflationByYear = (year: number): InflationEntry | undefined => {
  return inflationData.find(entry => entry.tahun === year);
};

export const getAvailableYears = (): number[] => {
  return inflationData.map(entry => entry.tahun).sort((a, b) => a - b);
};
