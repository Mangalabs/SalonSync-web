<script setup>
import { whatsappLink } from "../data/contactData.js";
</script>

<template>
  <section
    id="home"
    class="hero-gradient pt-20 pb-16 min-h-screen flex items-center"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div class="fade-in">
          <h1
            class="text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            style="color: var(--black-soft)"
          >
            Transforme seu salão com
            <span style="color: var(--yellow-strong)">gestão inteligente</span>
          </h1>
          <p
            class="text-xl mb-8 leading-relaxed"
            style="color: var(--gray-dark)"
          >
            SalonSync é a solução completa para modernizar a gestão do seu salão
            de beleza ou barbearia. Agende, controle e cresça com tecnologia de
            ponta.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <a
              :href="whatsappLink"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-primary px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center justify-center"
            >
              <i class="fas fa-rocket mr-2"></i>Começar Agora
            </a>
            <button
              class="border-2 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-all duration-300"
              style="
                border-color: var(--yellow-strong);
                color: var(--yellow-strong);
              "
            >
              <i class="fas fa-play mr-2"></i>Ver Demo
            </button>
          </div>
        </div>
        <div class="fade-in lg:pl-12">
          <div class="relative">
            <div
              class="bg-white rounded-2xl shadow-2xl p-2 transform rotate-3 hover:rotate-0 transition-transform duration-500"
            >
              <img src="/dashboardImg.png" class="rounded-2xl" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
