<script setup lang="ts">

</script>

<template>
<section class="flex flex-wrap justify-center gap-2">
  <div v-for="i in 15" :key="i">
    <p class="p-4 text-center bg-gray-200 flex-shrink-0 w-14 h-14 text-white" :style="`height: ${i* 30 + 30}px`">{{ i }}</p>
  </div>
</section>
</template>