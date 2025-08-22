<script setup>
import { whatsappLink } from "../data/contactData.js";
</script>

<template>
  <section
    id="home"
    class="hero-gradient pt-20 pb-16 min-h-screen flex items-center"
    aria-labelledby="hero-heading"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div class="grid lg:grid-cols-2 gap-12 items-center h-full">
        <div class="fade-in flex flex-col justify-center h-full">
          <h1
            id="hero-heading"
            class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            style="color: var(--black-soft)"
          >
           Transforme seu negócio com
            <span style="color: var(--yellow-strong)"
              >gestão inteligente</span
            >
          </h1>
          <p
            class="text-lg sm:text-xl mb-8 leading-relaxed"
            style="color: var(--gray-dark)"
            aria-label="Descrição do SalonSync"
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
              aria-label="Começar a usar o SalonSync agora"
            >
              <i class="fas fa-rocket mr-2" aria-hidden="true"></i>Começar Agora
            </a>
          </div>
        </div>

        <div class="fade-in flex items-center justify-center h-full">
          <div class="relative w-full max-w-2xl">
            <div
              class="bg-black rounded-2xl shadow-2xl overflow-hidden lg:transform lg:rotate-3 lg:hover:rotate-0 transition-transform duration-500"
              aria-hidden="true"
            >
              <video
                src="/hero-video.mp4"
                autoplay
                muted
                loop
                playsinline
                class="w-full h-auto object-cover"
                aria-label="Demonstração do sistema SalonSync em funcionamento"
                title="Demonstração do SalonSync"
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
  background: linear-gradient(
    135deg,
    var(--off-white) 0%,
    var(--beige-light) 100%
  );
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

  .fade-in {
    animation: none;
    opacity: 1;
    transform: none;
  }

  .relative.w-full.max-w-2xl {
    width: 90%;
    margin: 0 auto;
  }

  .bg-black.rounded-2xl {
    transform: none !important;
    margin-top: 2rem;
  }

  video {
    max-height: 500px;
    min-height: auto;
    width: 100%;
    object-fit: contain;
  }

  h1 {
    font-size: 2.5rem;
    line-height: 1.2;
  }

  p {
    font-size: 1.1rem;
  }

  .flex.flex-col.sm\:flex-row.gap-4 {
    flex-direction: column;
    gap: 1rem;
  }

  .btn-primary,
  button {
    width: 100%;
    padding: 0.75rem 1rem;
    font-size: 1rem;
  }
}

@media (max-width: 640px) {
  h1 {
    font-size: 2rem;
  }

  video {
    max-height: 350px;
  }
}
</style>
