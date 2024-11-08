<template>
  <div>
    <canvas id="barChart" class="w-full h-full"></canvas>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from './../../tailwind.config.js'

const fullConfig = resolveConfig(tailwindConfig)

import {
  BarController,
  BarElement,
  CategoryScale,
  Chart,
  Colors,
  Legend,
  LinearScale,
  type ChartItem,
} from 'chart.js'

onMounted(() => {
  Chart.register(BarController, BarElement, CategoryScale, Colors, Legend, LinearScale);

(async function () {
  const data = [
    { year: 'Jan', cash: 150000 },
    { year: 'Feb', cash: 180000 },
    { year: 'Mar', cash: 200000 },
    { year: 'April', cash: 230000 },
    { year: 'May', cash: 220000 },
    { year: 'June', cash: 250000 },
    { year: 'July', cash: 280000 },
    { year: 'Aug', cash: 250000 },
    { year: 'Sept', cash: 270000 },
    { year: 'Oct', cash: 300000 }
  ]

  const barChart = document.getElementById('barChart') as ChartItem

  if (barChart) {
    new Chart(barChart, {
      type: 'bar',
      data: {
        labels: data.map((row) => row.year),
        datasets: [
          {
            label: 'Balance by Month (in CAD)',
            data: data.map((row) => row.cash),
            borderColor: '#007733',
            borderWidth: 2,
            borderRadius: 5,
            backgroundColor: fullConfig.theme.colors.lime[500],
          },
        ],
      },
    })
  }
})()
})
</script>

<style scoped></style>
