<template>
  <div class="flex flex-col justify-between">
    <main >
      <h1 class="pt-1">{{ greeting }}, Jae!</h1>
      <span class="disclaimer">Last Updated: {{ lastUpdated }}</span>
      <div class="mt-3 grid md:grid-cols-5 xs:grid-cols-1 gap-3">
        <DashboardCard class="md:col-span-3">
          <BarChart />
        </DashboardCard>
        <div class="flex md:flex-col md:justify-between md:col-span-2">
          <DashboardCard class="md:mr-0 mr-2">
            <h2 class="h4">Interest Earned this Month</h2>
            <h3 class="text-lime-600">$321.98</h3>
            <span class="disclaimer">$11.12 earned in the past week</span>
          </DashboardCard>
          <DashboardCard class="md:ml-0 ml-2">
            <h2 class="h4">Rate of Return this Month</h2>
            <h3 class="text-lime-600">2.11%</h3>
            <span class="disclaimer">You have gained $2510.36</span>
          </DashboardCard>
        </div>
      </div>
    </main>
    <footer>
      Disclaimer: This is a sample dashboard to add to my <a href="https://www.webbdevdesign.ca/">portfolio site</a>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { format, subMinutes } from 'date-fns'

import BarChart from '../components/BarChart.vue'
import DashboardCard from '@/components/DashboardCard.vue'

const date = computed(() => Date.now())
const lastUpdated = computed(() => format(subMinutes(date.value, 1), 'MM/dd/yyyy hh:mm a'))
const greeting = computed(() => {
  const hour = Number(format(date.value, 'H'))
  console.log(hour)
  let time = ''

  if (hour) {
    if (hour < 12) time = 'Morning'
    if (hour >= 12 && hour < 18) time = 'Afternoon'
    if (hour >= 18) time = 'Evening'
  }

  if (time) return `Good ${time}`
  else return 'Hello'
})
</script>