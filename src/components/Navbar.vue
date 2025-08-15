<script setup>
import { ref } from "vue";
import { whatsappLink } from "../data/contactData.js";

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>

<template>
  <nav class="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center">
          <img src="/iconSalonSync.png" class="w-30 h-15 p-1" alt="" />
        </div>
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-8">
            <a
              href="#home"
              class="nav-link text-gray-700 hover:text-yellow-600 px-3 py-2 text-sm font-medium"
              >Início</a
            >
            <a
              href="#features"
              class="nav-link text-gray-700 hover:text-yellow-600 px-3 py-2 text-sm font-medium"
              >Funcionalidades</a
            >
            <a
              href="#pricing"
              class="nav-link text-gray-700 hover:text-yellow-600 px-3 py-2 text-sm font-medium"
              >Planos</a
            >
            <a
              href="#contact"
              class="nav-link text-gray-700 hover:text-yellow-600 px-3 py-2 text-sm font-medium"
              >Contato</a
            >
            <a
              :href="whatsappLink"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-primary px-6 py-2 rounded-full text-sm font-semibold inline-block"
            >
              Assine Agora
            </a>
          </div>
        </div>
        <div class="md:hidden">
          <button
            @click="toggleMobileMenu"
            class="mobile-menu-btn text-gray-700"
          >
            <i class="fas fa-bars text-xl"></i>
          </button>
        </div>
      </div>
    </div>

    <div v-if="isMobileMenuOpen" class="md:hidden bg-white shadow-lg">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a
          href="#home"
          class="nav-link block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-yellow-600"
          >Início</a
        >
        <a
          href="#features"
          class="nav-link block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-yellow-600"
          >Funcionalidades</a
        >
        <a
          href="#pricing"
          class="nav-link block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-yellow-600"
          >Planos</a
        >
        <a
          href="#contact"
          class="nav-link block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-yellow-600"
          >Contato</a
        >
        <a
          :href="whatsappLink"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-primary w-full px-3 py-2 rounded-md text-base font-medium inline-block text-center"
        >
          Assine Agora
        </a>
      </div>
    </div>
  </nav>
</template>
