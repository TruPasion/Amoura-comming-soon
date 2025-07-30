<template>
  <fwb-navbar class="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900">
    <template #logo>
      <a 
        href="https://amoura.dev" 
        class="flex items-center space-x-3 hover:opacity-80 transition-opacity"
      >
        <img 
          src="../../src/assets/favicon-32x32.png" 
          alt="Amoura Logo" 
          class="w-8 h-8"
        />
        <span class="font-pacifico text-2xl text-white">Amoura</span>
      </a>
    </template>
    <template #default="{isShowMenu}">
      <fwb-navbar-collapse :is-show-menu="isShowMenu">
        <div 
          @click="handleComingSoonClick"
          class="text-white hover:text-yellow-400 cursor-pointer px-4 py-2 rounded-md font-semibold tracking-wide transition-all duration-200 hover:bg-white hover:bg-opacity-10"
        >
          Home
        </div>
        <div 
          @click="handleComingSoonClick"
          class="text-white hover:text-yellow-400 cursor-pointer px-4 py-2 rounded-md font-semibold tracking-wide transition-all duration-200 hover:bg-white hover:bg-opacity-10"
        >
          Features
        </div>
        <div 
          @click="handleComingSoonClick"
          class="text-white hover:text-yellow-400 cursor-pointer px-4 py-2 rounded-md font-semibold tracking-wide transition-all duration-200 hover:bg-white hover:bg-opacity-10"
        >
          Premium
        </div>
        <div 
          @click="handleContactClick"
          class="text-white hover:text-yellow-400 cursor-pointer px-4 py-2 rounded-md font-semibold tracking-wide transition-all duration-200 hover:bg-white hover:bg-opacity-10"
        >
          Contact
        </div>
        <div class="flex items-center space-x-2">
          <span class="text-yellow-400 text-sm font-bold animate-pulse tracking-wider uppercase bg-yellow-400 bg-opacity-20 px-3 py-1 rounded-full">
            Coming Soon
          </span>
        </div>
      </fwb-navbar-collapse>
    </template>
  </fwb-navbar>
</template>

<script setup lang="ts">
import {
  FwbNavbar,
  FwbNavbarCollapse,
  FwbNavbarLogo,
} from 'flowbite-vue'

const handleComingSoonClick = () => {
  alert('🚀 Coming Soon! This feature will be available when we launch. Stay tuned for something amazing!');
};

const handleContactClick = () => {
  window.open('mailto:hello@amoura.dev?subject=Hello from Amoura visitor&body=Hi! I\'m interested in learning more about Amoura. Looking forward to hearing from you!', '_blank');
};
</script>