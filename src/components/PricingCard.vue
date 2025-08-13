<script setup>
import { whatsappLink } from "../data/contactData.js";

defineProps({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  professionals: {
    type: String,
    required: true,
  },
  features: {
    type: Array,
    required: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div
    :class="`pricing-card rounded-2xl p-8 shadow-lg fade-in ${
      featured ? 'featured shadow-xl transform scale-105' : ''
    }`"
  >
    <div
      v-if="featured"
      class="absolute -top-4 left-1/2 transform -translate-x-1/2"
    >
      <span
        class="px-4 py-2 text-sm font-semibold text-white rounded-full"
        style="background-color: var(--yellow-strong)"
      >
        Novo
      </span>
    </div>
    <div class="text-center mb-8">
      <h3 class="text-2xl font-bold mb-2" style="color: var(--black-soft)">
        {{ name }}
      </h3>
      <p class="text-sm mb-4" style="color: var(--gray-dark)">
        {{ description }}
      </p>
      <div class="text-4xl font-bold mb-2" style="color: var(--yellow-strong)">
        R$ {{ price }}<span class="text-lg font-normal">/mês</span>
      </div>
      <p class="text-sm" style="color: var(--gray-dark)">{{ professionals }}</p>
    </div>
    <ul class="space-y-3 mb-8">
      <li
        v-for="(feature, index) in features"
        :key="index"
        class="flex items-center"
      >
        <i class="fas fa-check text-green-500 mr-3"></i>
        <span>{{ feature }}</span>
      </li>
    </ul>

    <a
      :href="whatsappLink"
      target="_blank"
      rel="noopener noreferrer"
      class="w-full btn-primary py-3 rounded-full font-semibold inline-block text-center"
    >
      Escolher Plano
    </a>
  </div>
</template>
