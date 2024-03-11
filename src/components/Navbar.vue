<script setup lang="ts">
import {ref} from 'vue';
const active = ref(false);
const mobileMenuActive = ref(false);
</script>
<template>
  <header class="bg-gray-900 p-2 flex justify-between items-center relative">
    <button class="sm:hidden w-8 flex flex-col gap-1 p-2 outline outline-white rounded" @click="mobileMenuActive=!mobileMenuActive">
      <span class="block w-full h-[2px] bg-white"></span>
      <span class="block w-full h-[2px] bg-white"></span>
      <span class="block w-full h-[2px] bg-white"></span>
    </button>
    <div class="flex items-center">
      <img src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="TailwindUI" class="w-16 h-16 sm:mr-3"/>
      <ul class="bg-gray-900 sm:bg-gray-900 text-white gap-1 absolute top-full flex flex-col sm:static sm:flex-row left-0 w-full">
        <li class="dark:text-gray-300 p-4 hover:text-gray-100 hover:bg-gray-600 rounded cursor-pointer">Dashboard</li>
        <li class="dark:text-gray-300 p-4 hover:text-gray-100 hover:bg-gray-600 rounded cursor-pointer">Team</li>
        <li class="dark:text-gray-300 p-4 hover:text-gray-100 hover:bg-gray-600 rounded cursor-pointer">Projects</li>
        <li class="dark:text-gray-300 p-4 hover:text-gray-100 hover:bg-gray-600 rounded cursor-pointer">Calendar</li>
      </ul>
    </div>
    <div class="flex gap-2 items-center">
      <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          aria-hidden="true"
          class="w-6 h-6 text-gray-300"
      >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
        ></path>
      </svg>
      <div class="relative">
        <button @click="active=!active">
          <img src="https://avatars.githubusercontent.com/u/7635209?v=4" alt="Daniel Kelly" class="w-10 h-10 rounded-full ring-white ring-2 ring-offset-2 ring-offset-gray-900"/>
        </button>
        <ul v-if="active" class="border dark:bg-gray-100 bg-gray-100 text-gray-100 absolute top-full rounded-md right-0 min-w-[170px] flex flex-col">
          <li class="text-gray-900 rounded-b p-2 hover:bg-gray-200 cusor-point">Your Profile</li>
          <li class="text-gray-900 rounded-b p-2 hover:bg-gray-200 cusor-point">Settings</li>
          <li class="text-gray-900 rounded-b p-2 hover:bg-gray-200 cusor-point">Signout</li>
        </ul>

      </div>
    </div>
  </header>
</template>