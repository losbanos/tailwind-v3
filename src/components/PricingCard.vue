<script setup lang="ts">
defineProps<{
  name: string,
  description: string,
  price: number,
  features: Array<string>
}>();
</script>

<template>
  <div class="dark:bg-gray-800 p-4 dark:text-white rounded-lg border text-center flex flex-col justify-between">
    <div class="p-4">
      <h3 class="text-center text-xl font-bold">{{ name }}</h3>
      <p class="text-center text-base dark:text-gray-500 mt-4 mx-auto">
        {{ description }}
      </p>
      <div class="mt-4">
        <span class="text-4xl font-extrabold inline-block">${{ price }}</span>
        <span class="text-gray-500 text-base">/month</span>
      </div>
      <!-- List -->
      <ul role="list" class="mt-4 text-left">
        <li v-for="feature in features" :key="feature" class="flex mb-4">
          <!-- Icon -->
          <svg
              class="w-5 h-5 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
          >
            <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
            ></path>
          </svg>
          <span class="text-sm dark:text-white ml-2">{{ feature }}</span>
        </li>
      </ul>
    </div>
    <a href="#" class="block bg-blue-600 text-center mx-auto text-lg rounded mt-6 w-full py-2 text-white">Get started</a>
  </div>
</template>

<style scoped>

</style>