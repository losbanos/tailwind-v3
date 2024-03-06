<script setup lang="ts">

</script>

<template>
<section class="flex justify-center gap-2 flex-wrap items-end">
  <div v-for="i in 15"
       :key="i"
       class="p-4 text-center bg-gray-500 flex-shrink-0 w-14 h-14 text-white"
       :style="`height: ${i * 30 + 30}px`"
  >
    {{ i }}
  </div>
</section>
</template>