<script setup lang="ts">
import { ref } from 'vue'
import AppInput from './AppInput.vue';

defineProps<{ msg: string }>()
const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="mt-10">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code >components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p class="">
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <div class="shadow-lg p-5 rounded-lg bg-red-100">
    <img src="/src/assets/images/oneline_novena.jpeg" class="rounded-md mb-6" />
    <h4 class="text-3xl font-bold">노베나</h4>
    <hr class="bg-gray-100 h-[2px] my-2" />
    <AppInput :label="'그렇지뭐'" />
    <p class="first-letter:text-5xl selection:bg-blue-400">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </p>
    <ul class="list-disc marker:text-green-300 marker:text-2xl">
      <li>스키</li>
      <li>스쿼시</li>
      <li>스쿠버</li>
      <li>수영</li>
    </ul>
    <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
  </div>
</template>
