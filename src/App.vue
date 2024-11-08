<script setup lang="ts">
import { RouterView } from 'vue-router'

import SideBar from '@/components/SideBar.vue'
</script>

<template>
  <div class="flex h-screen">
    <SideBar class="shrink-0" />
    <RouterView class="grow py-12 px-10 bg-slate-100" />
  </div>
</template>

<style lang="scss">
@tailwind base;
@tailwind components;
@tailwind utilities;

#app {
  display: flex;
  flex-direction: column;
}

h1, .h1 {
  font-family: "Agdasima";
  font-size: 2rem;
}

h2, .h2 {
  font-family: "Agdasima";
  font-size: 1.8rem;
}

h3, .h3 {
  font-family: "Agdasima";
  font-size: 1.6rem;
}

h4, .h4 {
  font-family: "Agdasima";
  font-size: 1.4rem;
}

h5, .h5 {
  font-family: "Agdasima";
  font-size: 1.2rem;
}

h6, .h6 {
  font-family: "Agdasima";
  font-size: 1rem;
}

.disclaimer {
  font-size: 0.8rem;
}
</style>
