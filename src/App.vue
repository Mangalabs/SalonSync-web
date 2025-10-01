<script setup>
import { ref, onMounted } from "vue";

import Navbar from "./components/Navbar.vue";
import HeroSection from "./components/HeroSection.vue";
import AboutSection from "./components/AboutSection.vue";
import PricingSection from "./components/PricingSection.vue";
import CtaSection from "./components/CTASection.vue";
import FooterSection from "./components/FooterSection.vue";
import LoadingBar from "./components/LoadingBar.vue";
import AnimatedGridBackground from "./components/AnimatedGridBackground.vue";
import PaymentStatus from './components/PaymentStatus.vue';

const currentPath = ref(window.location.pathname);

function enableSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute("href"));
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function enableFadeInOnScroll() {
  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationDelay = "0.2s";
          entry.target.classList.add("fade-in");
        }
      }),
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
  );

  document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
}

onMounted(() => {
  enableSmoothScroll();
  enableFadeInOnScroll();
});
</script>

<template>
  <div class="min-h-screen" role="document" aria-label="Página do SalonSync - Sistema de Gestão para Salões">
    <LoadingBar />

    <Navbar v-if="currentPath !== '/fallback'" />

    <main>
      <div v-if="currentPath === '/'">
        <HeroSection />
        <AboutSection />
        <PricingSection />
        <CtaSection />
      </div>

      <div v-else-if="currentPath === '/fallback'">
        <div class="min-h-screen flex items-center justify-center gradient-bg p-4 mx-auto">
          <PaymentStatus />
        </div>
      </div>

      <div v-else>
        <p class="text-center p-8">Página não encontrada</p>
      </div>
    </main>

    <FooterSection v-if="currentPath !== '/fallback'" />
    <AnimatedGridBackground v-if="currentPath !== '/fallback'" />
  </div>
</template>
