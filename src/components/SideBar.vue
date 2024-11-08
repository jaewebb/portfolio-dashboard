<template>
  <div class="flex flex-col justify-between text-white bg-slate-900" :class="expanded ? 'px-10 py-5' : 'p-5'">
    <div>
      <div :class="expanded ? 'text-right' : 'text-center'">
        <i v-if="expanded" class="fa-solid fa-chevron-left" @click="expanded = false"></i>
        <i v-else class="fa-solid fa-chevron-right" @click="expanded = true"></i>
      </div>
      <div class="flex flex-col justify-center items-center pt-5">
        <div class="logo">
          <i class="fa-solid fa-money-bill-trend-up text-lime-500"></i>
          <template v-if="expanded">Maken<span class="text-lime-500">Bank</span></template>
        </div>
        <template v-if="expanded">
          <img alt="user avatar" class="my-3" src="@/assets/avatar.png" width="75" height="75" />
          <span>Jae Webb</span>
        </template>
      </div>
      <nav class="mt-5">
        <ul class="nav-list">
          <li>
            <RouterLink to="/" activeClass="text-lime-500">
              <i class="fa-solid fa-chart-simple" :class="!expanded || 'mr-2'"></i>
              <template v-if="expanded">Dashboard</template>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/">
              <i class="fa-solid fa-hand-holding-dollar" :class="!expanded || 'mr-2'"></i>
              <template v-if="expanded">Accounts</template>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/">
              <i class="fa-solid fa-circle-dollar-to-slot" :class="!expanded || 'mr-2'"></i>
              <template v-if="expanded">Investments</template>
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>
    <div class="flex justify-between" :class="expanded || 'flex-col text-center'">
      <i class="fa-solid fa-gear" :class="expanded || 'mb-3'"></i>
      <i class="fa-solid fa-arrow-right-from-bracket"></i>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const expanded = ref(true)
</script>

<style scoped>
.logo {
  font-variation-settings: "wdth" 75;
}

.nav-list li {
  padding: 0.7rem
}
</style>