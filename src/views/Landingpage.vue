<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
// import GoogleloginButton from "../components/Auth/GoogleloginButton.vue";

import Navbar from "../components/Navbar.vue";
import Appfooter from "../components/Appfooter.vue";
// import { FwbButton } from "flowbite-vue";
const isNavbarVisible = ref(true);
let lastScroll = window.scrollY;
const navbarHeight = ref(0);

const handleScroll = () => {
  const currentScroll = window.scrollY;
  const delta = currentScroll - lastScroll;
  if (Math.abs(delta) < 5) return;
  isNavbarVisible.value = delta < 0 || currentScroll < 10;
  lastScroll = currentScroll;
};

const handleNotifyClick = () => {
  window.open('mailto:hello@amoura.dev?subject=Notify me when Amoura launches&body=Hi! I\'m excited about Amoura and would love to be notified when you launch. Please add me to your early access list!', '_blank');
};

const handleContactClick = () => {
  window.open('mailto:hello@amoura.dev?subject=Early Access Request&body=Hi! I\'m interested in early access to Amoura. Looking forward to hearing from you!', '_blank');
};

onMounted(() => {
  const el = document.getElementById("navbar");
  if (el) {
    navbarHeight.value = el.offsetHeight;
  }

  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div
    id="navbar"
    :class="[
      'fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out',
      isNavbarVisible ? 'translate-y-0' : '-translate-y-full',
    ]"
  >
    <Navbar />
  </div>

  <div
    :style="`padding-top: ${navbarHeight}px; height: calc(100vh - ${navbarHeight}px); background-image: url('/bg3.jpg');`"
    class="bg-center bg-cover bg-no-repeat flex items-center justify-center relative overflow-hidden"
  >
    <!-- Overlay for better text readability -->
    <div class="absolute inset-0 bg-black bg-opacity-30"></div>
    
    <div class="px-6 text-center relative z-10 w-full h-full flex flex-col justify-between py-8">
      <!-- Main Heading - Top -->
      <div>
        <div>
          <div
            class="font-pacifico text-white text-center text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight"
          >
            Boost your Relationship aura ++
          </div>
          <div
            class="font-pacifico text-white text-center mt-3 text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight"
          >
            with Amoura
          </div>
        </div>
      </div>
      
      <!-- Coming Soon - Middle -->
      <div class="flex-1 flex items-center justify-center">
        <div class="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl animate-pulse tracking-wider">
          COMING SOON
        </div>
      </div>
      
      <!-- Bottom Section - Notify button and contact -->
      <div>
        <div class="space-y-4">
          <!-- Notify Me Button -->
          <div>
            <button 
              @click="handleNotifyClick"
              class="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-full text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg"
            >
              ✨ Notify me when we launch
            </button>
          </div>
          
          <!-- Email for early access -->
          <div class="text-white text-sm sm:text-base">
            Want early access? Contact us at 
            <a 
              href="mailto:hello@amoura.dev" 
              @click="handleContactClick"
              class="text-yellow-400 hover:text-yellow-300 underline font-bold transition-colors duration-200"
            >
              hello@amoura.dev
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div>
    <Appfooter />
  </div>
</template>
