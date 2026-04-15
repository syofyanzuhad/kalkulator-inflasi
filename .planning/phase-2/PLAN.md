# Phase 2: Logic & Calculation - Plan

**Phase Number**: 2
**Goal**: Implement the inflation calculation engine and reactive state.

## Requirements Covered
- **CALC-01**: User can select a start year and an end year from a dropdown/list of available data.
- **CALC-02**: User can input an initial amount (IDR).
- **CALC-03**: System calculates the inflation factor by multiplying (1 + rate/100) for all years between the start and end.
- **CALC-04**: System displays the final adjusted value clearly with thousands separators.

## Implementation Steps

### 1. Setup Testing Environment
- [ ] Install `vitest`: `npm install -D vitest`
- [ ] Add `test` script to `package.json`.

### 2. Calculation Engine
- [ ] Create `src/utils/calculator.ts`.
- [ ] Implement `calculateInflation(initialAmount: number, startYear: number, endYear: number): number`.
- [ ] Implement logic to handle:
    - Same year (factor = 1).
    - Future calculation (multiplication).
    - Past calculation (division).

### 3. Unit Testing
- [ ] Create `src/utils/calculator.spec.ts`.
- [ ] Add test cases:
    - Normal range (e.g., 2020-2023).
    - Extreme year (1998).
    - Zero amount.
    - Reverse calculation (e.g., what is Rp 1,000 from 2023 worth in 1995?).

### 4. Composable for State Management
- [ ] Create `src/composables/useInflationCalculator.ts`.
- [ ] Define reactive `initialAmount`, `startYear`, `endYear`.
- [ ] Define computed `result` using the `calculateInflation` function.
- [ ] Define computed `inflationPercentage` and `inflationMultiplier`.

## Verification Steps

### Automated Checks
- [ ] Run `npm run test` and ensure all tests pass.
- [ ] Run `npm run build` or `vue-tsc` to check types.

### Manual Verification
- [ ] Briefly import the composable in `App.vue` and log results for a few known values.

---
*Plan created: 2026-04-15*
