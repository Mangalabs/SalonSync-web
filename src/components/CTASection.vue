<script setup>
  import { whatsappLink } from "../data/contactData.js";
</script>
<template>
  <section
    class="py-20"
    style="
      background: linear-gradient(
        135deg,
        var(--yellow-strong),
        var(--brown-dark)
      );
    "
    aria-labelledby="cta-heading"
  >
    <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 fade-in">
      <h2 id="cta-heading" class="text-4xl font-bold text-white mb-6">
        Transforme seu salão com uma gestão inteligente e simples
      </h2>
      <p class="text-xl text-white/90 mb-8">
        Simplifique sua operação com um sistema completo que preenche sua
        agenda, organiza finanças e impulsiona o crescimento do seu negócio.
        Tenha tudo sob controle para focar no que realmente importa: seus
        clientes.
      </p>

      <a
        style="color: var(--yellow-strong)"
        :href="whatsappLink"
        target="_blank"
        class="bg-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-200 transition-all duration-300 block mx-auto w-full sm:inline-block sm:w-auto text-center"
        aria-label="Começar a usar o SalonSync agora"
      >
        <i class="fas fa-rocket mr-2" aria-hidden="true"></i>Comece agora e veja a diferença
      </a>
    </div>
  </section>
</template>