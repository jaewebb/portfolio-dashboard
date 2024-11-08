<template>
  <div class="flex flex-col justify-between">
    <main >
      <h1 class="pt-1">Good Evening, Jae!</h1>
      <span class="disclaimer">Last Updated: {{ lastUpdated }}</span>
      <div class="mt-3 grid grid-cols-5 gap-3">
        <Card class="col-span-3">
          <BarChart />
        </Card>
        <div class="flex flex-col justify-between col-span-2">
          <Card>
            <h2 class="h4">Interest Earned this Month</h2>
            <h3 class="text-lime-600">$321.98</h3>
            <span class="disclaimer">$11.12 earned in the past week</span>
          </Card>
          <Card>
            <h2 class="h4">Rate of Return this Month</h2>
            <h3 class="text-lime-600">2.11%</h3>
            <span class="disclaimer">You have gained $2510.36</span>
          </Card>
        </div>
      </div>
    </main>
    <footer>
      Disclaimer: This is a sample dashboard to add to my <a href="https://www.webbdevdesign.ca/">portfolio site</a>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { format, subMinutes } from 'date-fns'

import BarChart from '../components/BarChart.vue'
import Card from '@/components/Card.vue'

const lastUpdated = format(subMinutes(Date.now(), 1), 'MM/dd/yyyy hh:mm a')
</script>