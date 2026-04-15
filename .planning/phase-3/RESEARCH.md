# Research: Phase 3 - Minimalist UI Implementation

## Objectives
- Design a clean, high-impact UI for the inflation calculator.
- Leverage existing CSS variables and structure.
- Ensure responsiveness and clarity.

## Findings

### Layout Proposal
- **Header**: Simple title "Kalkulator Inflasi".
- **Main Section**: 
  - Large, bold display of the **Result** (Adjusted Value).
  - Secondary display of the **Inflation Percentage** and **Multiplier**.
- **Input Section**:
  - Horizontal or grid-based form for:
    - Amount (Input number).
    - Start Year (Select).
    - End Year (Select).
- **Footer**: Brief mention of the data source (1995-2025).

### Visual Style
- **Typography**: Use the defined `--heading` and `--sans` fonts.
- **Colors**: Utilize `--accent` (#aa3bff) for the result and interactive elements.
- **Impact**: The result should be significantly larger (e.g., `font-size: 72px` or more) to provide immediate feedback.
- **Interactivity**: Real-time updates as users change inputs (using the `useInflationCalculator` composable).

### Components
- `InflationCalculator.vue`: Main component containing the form and results.

## Verification Strategy
- **Visual Check**: Ensure it looks "minimalist" and "high-impact" as requested.
- **Functionality**: Verify that changing inputs immediately updates the result.
- **Responsiveness**: Test on mobile viewports.

---
*Research completed: 2026-04-15*
