<template>
  <div class="flex flex-col justify-between text-white bg-slate-900 pt-16 p-10">
    <div>
      <div class="flex flex-col justify-center items-center">
        <div class="logo">
          <i class="fa-solid fa-money-bill-trend-up text-lime-500"></i> Maken<span class="text-lime-500">Bank</span>
        </div>
        <img alt="user avatar" class="my-3" src="@/assets/avatar.png" width="75" height="75" />
        <span>Jae Webb</span>
      </div>
      <nav class="mt-5">
        <ul class="nav-list">
          <li>
            <RouterLink to="/" activeClass="text-lime-500">
              <i class="fa-solid fa-chart-simple mr-2"></i>
              Dashboard
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/">
              <i class="fa-solid fa-hand-holding-dollar mr-2"></i>
              Accounts
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/">
              <i class="fa-solid fa-circle-dollar-to-slot mr-2"></i>
              Investments
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>
    <div class="flex justify-between">
      <i class="fa-solid fa-arrow-right-from-bracket"></i>
      <i class="fa-solid fa-gear mr-2"></i>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.logo {
  font-variation-settings: "wdth" 75;
}

.nav-list li {
  padding: 0.7rem
}
</style>