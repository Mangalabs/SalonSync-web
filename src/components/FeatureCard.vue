<script setup>
defineProps({
  icon: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div
    class="card-hover bg-white p-8 rounded-2xl shadow-lg border border-gray-100 fade-in"
  >
    <div
      class="feature-icon w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
    >
      <i :class="`fas ${icon} text-2xl text-white`"></i>
    </div>
    <h3 class="text-xl font-semibold mb-4" style="color: var(--black-soft)">
      {{ title }}
    </h3>
    <p style="color: var(--gray-dark)">
      {{ description }}
    </p>
  </div>
</template>
