# Phase 3: Minimalist UI Implementation - Plan

**Phase Number**: 3
**Goal**: Build the user-facing interface for the inflation calculator.

## Requirements Covered
- **UI-01**: A clean, centered form for inputs.
- **UI-02**: Prominent display of the result (high-impact typography).
- **UI-03**: Responsive design (works well on mobile devices).
- **UI-04**: Minimalist aesthetics (no clutter, clear call to action).

## Implementation Steps

### 1. Create UI Component
- [ ] Create `src/components/InflationCalculator.vue`.
- [ ] Use the `useInflationCalculator` composable for all calculation state.
- [ ] Implement the template:
  - Header: `<h1>Kalkulator Inflasi</h1>`.
  - Result Display: High-impact section showing `formatCurrency(result)`.
  - Sub-result: "Inflasi kumulatif: X.X% (X.XXx lipat)".
  - Input Form: 
    - Number input for amount.
    - Two select inputs for start/end years.

### 2. Styling (Vanilla CSS)
- [ ] Add scoped styles or update `src/style.css` for:
  - `.result-container`: Large, bold font, accent color.
  - `.form-grid`: Flexbox/Grid for neat alignment.
  - Responsive adjustments (stacking inputs on small screens).

### 3. App Integration
- [ ] Update `src/App.vue` to replace the boilerplate `HelloWorld` with the new `InflationCalculator`.

## Verification Steps

### Automated Checks
- [ ] Run `npm run test` (to ensure logic still passes).
- [ ] Run `vue-tsc --noEmit` for type checks.

### Manual Verification
- [ ] Run `npm run dev` and visually inspect the layout.
- [ ] Verify interactivity: changing any input should immediately update the displayed result.
- [ ] Verify responsiveness: use browser dev tools to check the mobile view.

---
*Plan created: 2026-04-15*
