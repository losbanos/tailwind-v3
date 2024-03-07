<script setup lang="ts">
import {useDark} from '@vueuse/core';
import PricingTable from './components/PricingTable.vue';
const isDark = useDark();
</script>

<template>
  <div class="dark:bg-gray-900">
    <label>
      <input type="checkbox" v-model="isDark" />
      <span class="dark:text-white">다크 모드</span>
    </label>
<!--    <AppGrid />-->
  <!--  <AppFlexBox />-->
<!--    <HelloWorld msg="Vite + Vue" />-->
    <PricingTable />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
