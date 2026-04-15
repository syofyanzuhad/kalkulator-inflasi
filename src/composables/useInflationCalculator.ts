import { ref, computed } from 'vue';
import { getAvailableYears, getInflationData } from '../services/inflationService';
import { calculateInflation, calculateCumulativeInflationPercentage } from '../utils/calculator';

export const useInflationCalculator = () => {
  const availableYears = getAvailableYears();
  const inflationData = getInflationData();
  
  // Default values
  const amount = ref<number>(1000000); // 1 million IDR
  const startYear = ref<number>(availableYears[0]); // Earliest year
  const endYear = ref<number>(availableYears[availableYears.length - 1]); // Latest year

  const result = computed(() => {
    return calculateInflation(amount.value, startYear.value, endYear.value);
  });

  const inflationPercentage = computed(() => {
    return calculateCumulativeInflationPercentage(startYear.value, endYear.value);
  });

  const inflationMultiplier = computed(() => {
    return result.value / (amount.value || 1);
  });

  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return {
    amount,
    startYear,
    endYear,
    availableYears,
    inflationData,
    result,
    inflationPercentage,
    inflationMultiplier,
    formatCurrency,
  };
};
