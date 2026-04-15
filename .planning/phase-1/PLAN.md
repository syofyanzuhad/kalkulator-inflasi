# Phase 1: Core Data Setup - Plan

**Phase Number**: 1
**Goal**: Integrate the Indonesian inflation dataset (1995-2025) and establish the data layer.

## Requirements Covered
- **DATA-01**: Hardcode the inflation dataset provided by the user (1995-2025) as a static JSON resource.
- **DATA-02**: Ensure the data is correctly structured for sequential multiplication.

## Implementation Steps

### 1. Data File Creation
- [ ] Create `src/data/inflation.json` containing the provided JSON array.
- [ ] Ensure all 31 entries (1995-2025) are included accurately.

### 2. TypeScript Interfaces
- [ ] Create `src/types/inflation.ts` to house the `InflationEntry` interface.
- [ ] Export the interface for project-wide use.

### 3. Data Service/Utility
- [ ] Create `src/services/inflationService.ts`.
- [ ] Import the JSON data and export it with the defined type.
- [ ] (Optional) Add basic helper methods like `getInflationByYear(year: number)`.

## Verification Steps

### Automated Checks
- [ ] Run `npm run build` or `vue-tsc` to ensure no type errors in the data import/usage.
- [ ] Ensure the JSON is valid and all 31 entries are present.

### Manual Verification
- [ ] Temporarily import the service in `App.vue` and `console.log` the data to confirm accessibility.

---
*Plan created: 2026-04-15*
