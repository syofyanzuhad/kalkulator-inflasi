<script setup lang="ts">
import { ref } from 'vue';
import { useInflationCalculator } from '../composables/useInflationCalculator';

const {
  amount,
  startYear,
  endYear,
  availableYears,
  inflationData,
  result,
  inflationPercentage,
  inflationMultiplier,
  formatCurrency,
} = useInflationCalculator();

const showData = ref(false);
</script>

<template>
  <div class="calculator-container">
    <header>
      <h1>Kalkulator Inflasi</h1>
      <p class="subtitle">Indo (1995-2025)</p>
    </header>

    <main>
      <section class="result-display">
        <div class="result-value">
          {{ formatCurrency(result) }}
        </div>
        <div class="result-details">
          <span class="percentage">
            {{ inflationPercentage >= 0 ? '+' : '' }}{{ inflationPercentage.toFixed(2) }}%
          </span>
          <span class="divider">|</span>
          <span class="multiplier">
            {{ inflationMultiplier.toFixed(2) }}x lipat
          </span>
        </div>
      </section>

      <section class="form-container">
        <div class="form-group amount-group">
          <label for="amount">Jumlah Uang</label>
          <input 
            id="amount" 
            type="number" 
            v-model.number="amount" 
            placeholder="Masukkan jumlah..."
            min="0"
          />
          <div class="amount-hint" v-if="amount">
            Setara: {{ formatCurrency(amount) }}
          </div>
        </div>

        <div class="year-selectors">
          <div class="form-group">
            <label for="start-year">Dari Tahun</label>
            <select id="start-year" v-model.number="startYear">
              <option v-for="year in availableYears" :key="`start-${year}`" :value="year">
                {{ year }}
              </option>
            </select>
          </div>

          <div class="form-group">
            <label for="end-year">Ke Tahun</label>
            <select id="end-year" v-model.number="endYear">
              <option v-for="year in availableYears" :key="`end-${year}`" :value="year">
                {{ year }}
              </option>
            </select>
          </div>
        </div>
      </section>

      <section class="data-toggle-section">
        <button @click="showData = !showData" class="toggle-button">
          {{ showData ? 'Sembunyikan' : 'Lihat' }} Data Historis
        </button>
        
        <div v-if="showData" class="data-table-container">
          <table class="inflation-table">
            <thead>
              <tr>
                <th>Tahun</th>
                <th>Inflasi (%)</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="entry in inflationData" :key="entry.tahun">
                <td>{{ entry.tahun }}</td>
                <td>{{ entry.inflasi_persen }}%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>

    <footer class="info-section">
      <div class="info-card">
        <h3>Tentang Data</h3>
        <p>Kalkulator ini menggunakan data inflasi tahunan Indonesia dari 1995 hingga 2025. Perhitungan dilakukan menggunakan metode faktor kumulatif (perkalian berantai) dari persentase inflasi setiap tahun.</p>
        <p class="disclaimer">Nilai yang ditampilkan adalah estimasi berdasarkan data historis dan tidak menjamin nilai di masa depan.</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.calculator-container {
  display: flex;
  flex-direction: column;
  gap: 48px;
  width: 100%;
  max-width: 600px;
  padding: 40px 20px;
}

header {
  text-align: center;
}

h1 {
  margin: 0;
  font-size: 2.5rem;
  letter-spacing: -2px;
}

.subtitle {
  font-family: var(--mono);
  font-size: 0.9rem;
  opacity: 0.6;
}

.result-display {
  text-align: center;
  margin-bottom: 40px;
}

.result-value {
  font-size: 4.5rem;
  font-weight: 700;
  color: var(--accent);
  letter-spacing: -3px;
  line-height: 1;
  margin-bottom: 12px;
  word-break: break-all;
}

.result-details {
  font-family: var(--mono);
  font-size: 1.1rem;
  display: flex;
  justify-content: center;
  gap: 12px;
  opacity: 0.8;
}

.divider {
  opacity: 0.3;
}

.form-container {
  display: flex;
  flex-direction: column;
  gap: 24px;
  background: var(--accent-bg);
  padding: 32px;
  border-radius: 16px;
  border: 1px solid var(--accent-border);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: left;
}

.amount-hint {
  font-family: var(--mono);
  font-size: 0.8rem;
  opacity: 0.6;
  margin-top: -4px;
}

label {
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  opacity: 0.7;
}

input, select {
  background: var(--bg);
  border: 1px solid var(--border);
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 1.1rem;
  color: var(--text-h);
  transition: all 0.2s ease;
}

input:focus, select:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-bg);
}

.year-selectors {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.data-toggle-section {
  margin-top: 16px;
  text-align: center;
}

.toggle-button {
  background: none;
  border: 1px solid var(--border);
  color: var(--text);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s;
  font-family: var(--sans);
}

.toggle-button:hover {
  background: var(--accent-bg);
  border-color: var(--accent);
  color: var(--accent);
}

.data-table-container {
  margin-top: 24px;
  max-height: 300px;
  overflow-y: auto;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--bg);
}

.inflation-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
  text-align: left;
}

.inflation-table th {
  position: sticky;
  top: 0;
  background: var(--social-bg);
  padding: 12px;
  border-bottom: 1px solid var(--border);
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 1px;
}

.inflation-table td {
  padding: 10px 12px;
  border-bottom: 1px solid var(--border);
  font-family: var(--mono);
}

.inflation-table tr:last-child td {
  border-bottom: none;
}

.inflation-table tr:hover {
  background: var(--accent-bg);
}

.info-section {
  margin-top: 24px;
  text-align: left;
}

.info-card {
  background: var(--social-bg);
  padding: 24px;
  border-radius: 12px;
  border: 1px solid var(--border);
}

.info-card h3 {
  font-size: 0.85rem;
  margin-top: 0;
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--text-h);
}

.info-card p {
  font-size: 0.85rem;
  line-height: 1.6;
  margin-bottom: 12px;
  opacity: 0.8;
}

.disclaimer {
  font-style: italic;
  font-size: 0.75rem !important;
  opacity: 0.5 !important;
  margin-bottom: 0 !important;
}

@media (max-width: 600px) {
  .result-value {
    font-size: 3rem;
  }
  
  h1 {
    font-size: 2rem;
  }
}
</style>
