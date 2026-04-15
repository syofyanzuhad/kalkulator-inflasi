# Research: Phase 1 - Core Data Setup

## Objectives
- Integrate the provided Indonesian inflation dataset (1995-2025).
- Define a TypeScript interface for the data.
- Determine the best location and structure for the data source.

## Findings

### Data Source
The following yearly inflation percentage data was provided:
- **Range**: 1995 to 2025 (31 entries).
- **Format**: Array of objects with `tahun` (year) and `inflasi_persen` (percentage).

### Implementation Strategy
- **Location**: `src/data/inflation.json` (as planned in Roadmap).
- **TypeScript Interface**:
  ```typescript
  export interface InflationEntry {
    tahun: number;
    inflasi_persen: number;
  }
  ```
- **Access Pattern**: Create a reactive/static utility to provide this data to components.

### Dependencies
- None required (native JSON import support in Vite/Vue 3).

## Verification Strategy
- **Check**: The JSON file should be valid and match the provided data exactly.
- **Check**: The TypeScript interface should correctly describe the JSON structure.
- **Check**: Import the data into a test component or utility to ensure availability.

---
*Research completed: 2026-04-15*
