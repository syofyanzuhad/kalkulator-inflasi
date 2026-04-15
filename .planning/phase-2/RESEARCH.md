# Research: Phase 2 - Logic & Calculation

## Objectives
- Formalize the cumulative inflation calculation engine.
- Define the reactive state structure for the Vue 3 component.
- Plan for unit testing the calculation logic.

## Findings

### Calculation Engine
The formula is:
$$V_{final} = V_{initial} \times \prod_{i=start\_year+1}^{end\_year} (1 + \frac{r_i}{100})$$
Note: If $start\_year = 1998$ and $end\_year = 2000$, we need to multiply by the rates for 1999 and 2000? 
Actually, inflation is usually calculated as "inflation in year X".
If I have Rp 1,000 in end of 1995, and I want to know its value in end of 1997:
It will be subject to 1996 inflation and 1997 inflation.
So the product should be inclusive of $end\_year$ and start after $start\_year$.
Wait, the dataset provided by the user:
```json
  { "tahun": 1998, "inflasi_persen": 77.63 },
  { "tahun": 1997, "inflasi_persen": 11.05 },
  { "tahun": 1996, "inflasi_persen": 6.47 },
  { "tahun": 1995, "inflasi_persen": 9.42 }
```
If I want to know the value of Rp 1,000 from 1995 in 1996:
Value = $1,000 \times (1 + 0.0647) = 1,064.7$.
So the formula is: $V_{end} = V_{start} \times \prod_{i \in (start\_year, end\_year]} (1 + \frac{r_i}{100})$.
If $start\_year < end\_year$, we multiply by rates from $start\_year + 1$ to $end\_year$.
If $start\_year > end\_year$, we divide by rates from $end\_year + 1$ to $start\_year$ (purchasing power reversal).
If $start\_year = end\_year$, factor is 1.

### Reactive State (Vue 3)
- `initialAmount: number` (ref)
- `startYear: number` (ref)
- `endYear: number` (ref)
- `result: ComputedRef<number>`

### Testing Setup
Since `vitest` is not installed, I will propose installing it to ensure the core logic is robust.
`npm install -D vitest`

## Verification Strategy
- **Unit Tests**: Test scenarios for same year, future year, and past year calculations.
- **Edge Cases**: Zero amount, negative rates (deflation), extreme inflation (1998).

---
*Research completed: 2026-04-15*
