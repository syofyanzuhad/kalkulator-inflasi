# Roadmap: Kalkulator Inflasi

## Phase 1: Core Data Setup

**Goal:** Establish the foundation with the static inflation dataset.

### Tasks
- [ ] Create `src/data/inflation.json` with user-provided data.
- [ ] Implement a data service/utility to fetch and type the data.
- [ ] Verify data structure and availability.

### Success Criteria
- [ ] `inflation.json` is accessible in the app.
- [ ] Data is correctly typed with TypeScript.

---

## Phase 2: Logic & Calculation

**Goal:** Implement the inflation calculation engine.

### Tasks
- [ ] Create a calculation utility function (cumulative product).
- [ ] Implement reactive state for start year, end year, and initial amount.
- [ ] Connect the calculation logic to the reactive state.
- [ ] Add unit tests for the calculation logic.

### Success Criteria
- [ ] The calculation returns accurate results based on the provided formula.
- [ ] Unit tests pass for multiple historical scenarios.

---

## Phase 3: Minimalist UI Implementation

**Goal:** Build the user-facing interface with a minimalist aesthetic.

### Tasks
- [ ] Design the layout (centered, clean, focus on input/output).
- [ ] Implement a custom Vue component for the calculator.
- [ ] Apply minimalist Vanilla CSS (high contrast, clear typography).
- [ ] Ensure mobile responsiveness.

### Success Criteria
- [ ] The app matches the "minimalist" aesthetic request.
- [ ] The calculator is usable on both desktop and mobile.

---

## Phase 4: Final Polish & Validation

**Goal:** Ensure the app is polished and ready for use.

### Tasks
- [ ] Add thousands separator formatting for currency display.
- [ ] Add a simple "About" or "Data Source" section for transparency.
- [ ] Conduct a final E2E test of the calculation workflow.

### Success Criteria
- [ ] No major bugs in the main calculation flow.
- [ ] App is visually polished and adheres to the project vision.

---
*Roadmap defined: 2026-04-15*
*Last updated: 2026-04-15 after initial definition*
