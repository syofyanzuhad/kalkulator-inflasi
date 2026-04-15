# Kalkulator Inflasi

## What This Is

A minimalist, high-impact inflation calculator designed for general consumers. It allows users to calculate the historical value of money (e.g., what $1,000 in 1998 is worth today) using a pre-defined dataset of Indonesian inflation rates (1995-2025).

## Core Value

Empower Indonesian consumers to understand the long-term impact of inflation on their purchasing power through a fast, simple, and accurate tool.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] **CORE-01**: User can input a starting year (1995-2025) and an end year.
- [ ] **CORE-02**: User can input an initial amount of money.
- [ ] **CORE-03**: System calculates the adjusted value using the cumulative product formula.
- [ ] **UI-01**: Minimalist, clean interface with high-contrast typography.
- [ ] **DATA-01**: Hardcoded/JSON-based dataset of yearly inflation percentages.

### Out of Scope

- **PROJ-01**: Future projections — focus is purely on historical data accuracy.
- **AUTH-01**: User accounts/saved calculations — keep it a stateless utility.
- **EXT-01**: Real-time API fetching — use the provided static dataset for reliability.

## Context

- The project uses Vue 3, TypeScript, and Vite.
- Data is provided for 1995-2025.
- Target audience is Indonesian consumers, requiring local context (Rupiah, BPS-style data).

## Constraints

- **Tech Stack**: Vue 3 + Vite + TypeScript (Existing).
- **Data Scope**: 1995-2025 only.
- **Styling**: Vanilla CSS (User preference for minimalist aesthetic).

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Cumulative Product | Matches standard financial inflation calculation given yearly rates. | ✓ Good |
| Static JSON | High performance, no external dependency risk, data provided by user. | ✓ Good |

---
*Last updated: 2026-04-15 after initial setup*
