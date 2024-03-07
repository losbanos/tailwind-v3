<script setup lang="ts">
defineProps({
  label: String
})
const inputModel = '';
</script>

<template>
  <label class="block mb-3">
    <span v-if="label" class="after:content-['*'] after:text-red-600 block text-2xl text-gray-800">{{label}}</span>
    <input v-model="inputModel"
           type="text"
           required="true"
           class="block w-full p-3 border border-gray-400 rounded-lg focus: outline-lime-200 disabled:opacity-50 invalid:border-red-500"
    >
  </label>
</template>