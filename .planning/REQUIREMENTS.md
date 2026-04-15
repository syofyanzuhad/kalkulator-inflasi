# Requirements: Kalkulator Inflasi

**Defined:** 2026-04-15
**Core Value:** Empower Indonesian consumers to understand the impact of inflation on their purchasing power.

## v1 Requirements

Requirements for the initial functional version.

### Data Management

- [x] **DATA-01**: Hardcode the inflation dataset provided by the user (1995-2025) as a static JSON resource.
- [x] **DATA-02**: Ensure the data is correctly structured for sequential multiplication.

### Input & Calculation

- [x] **CALC-01**: User can select a start year and an end year from a dropdown/list of available data.
- [x] **CALC-02**: User can input an initial amount (IDR).
- [x] **CALC-03**: System calculates the inflation factor by multiplying (1 + rate/100) for all years between the start and end.
- [x] **CALC-04**: System displays the final adjusted value clearly with thousands separators.

### User Interface

- [x] **UI-01**: A clean, centered form for inputs.
- [x] **UI-02**: Prominent display of the result (high-impact typography).
- [x] **UI-03**: Responsive design (works well on mobile devices).
- [x] **UI-04**: Minimalist aesthetics (no clutter, clear call to action).

## Out of Scope

| Feature | Reason |
|---------|--------|
| Multi-currency support | User explicitly requested focusing on IDR/local data. |
| Future projections | Scope is historical only for v1. |
| Real-time API | Static data is sufficient and more reliable for v1. |
| User accounts | Keeping it a simple, stateless utility tool. |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| DATA-01 | Phase 1 | Complete |
| DATA-02 | Phase 1 | Complete |
| CALC-01 | Phase 2 | Complete |
| CALC-02 | Phase 2 | Complete |
| CALC-03 | Phase 2 | Complete |
| CALC-04 | Phase 2 | Complete |
| UI-01 | Phase 3 | Complete |
| UI-02 | Phase 3 | Complete |
| UI-03 | Phase 3 | Complete |
| UI-04 | Phase 3 | Complete |

**Coverage:**
- v1 requirements: 10 total
- Mapped to phases: 10
- Unmapped: 0 ✓

---
*Requirements defined: 2026-04-15*
*Last updated: 2026-04-15 after Phase 4 completion*
