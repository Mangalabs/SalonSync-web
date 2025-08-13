<template>
  <div class="fixed inset-0 -z-10 overflow-hidden opacity-10">
    <div class="absolute inset-0 grid grid-cols-12 grid-rows-12 gap-1 transform -skew-y-6">
      <div v-for="i in 144" :key="i" 
           class="bg-yellow-300 rounded-sm animate-pulse" 
           :style="`animation-delay: ${Math.random() * 2}s; opacity: ${Math.random() * 0.5 + 0.1}`"></div>
    </div>
  </div>
</template>