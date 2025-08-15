<script setup>
import { whatsappLink } from "../data/contactData.js";
</script>

<template>
  <section
    id="home"
    class="hero-gradient pt-20 pb-16 min-h-screen flex items-center"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div class="grid lg:grid-cols-2 gap-12 items-center h-full">
        <div class="fade-in flex flex-col justify-center h-full">
          <h1
            class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            style="color: var(--black-soft)"
          >
            Transforme seu salão com
            <span style="color: var(--yellow-strong)">gestão inteligente</span>
          </h1>
          <p
            class="text-lg sm:text-xl mb-8 leading-relaxed"
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

        <div class="fade-in flex items-center justify-center h-full">
          <div class="relative w-full max-w-2xl">
            <div
              class="bg-black rounded-2xl shadow-2xl overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-500"
            >
              <video
                src="/demo.mp4"
                autoplay
                muted
                loop
                playsinline
                class="w-full h-auto object-cover"
                style="min-height: 400px;"
              ></video>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-gradient {
  background: linear-gradient(135deg, var(--off-white) 0%, var(--beige-light) 100%);
}

.btn-primary {
  background-color: var(--yellow-strong);
  color: white;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background-color: var(--brown-dark);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(203, 161, 31, 0.3);
}

.fade-in {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s ease forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 1023px) {
  .hero-gradient {
    padding-top: 6rem;
    padding-bottom: 6rem;
    min-height: auto;
  }
  
  video {
    min-height: 300px;
    margin-top: 2rem;
  }
}
</style>