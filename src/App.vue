<script setup>
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";

import Navbar from "./components/Navbar.vue";
import HeroSection from "./components/HeroSection.vue";
import AboutSection from "./components/AboutSection.vue";
import PricingSection from "./components/PricingSection.vue";
import CtaSection from "./components/CTASection.vue";
import FooterSection from "./components/FooterSection.vue";
import LoadingBar from "./components/LoadingBar.vue";
import AnimatedGridBackground from "./components/AnimatedGridBackground.vue";

const route = useRoute();

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

const isPaymentPage = computed(() => route.path === '/fallback');

onMounted(() => {
  if (!isPaymentPage.value) {
    enableSmoothScroll();
    enableFadeInOnScroll();
  }
});
</script>

<template>
  <div class="min-h-screen" role="document" aria-label="Página do SalonSync - Sistema de Gestão para Salões">
    <LoadingBar />

    <Navbar v-if="!isPaymentPage" />

    <main>
      <router-view v-if="isPaymentPage" />
      
      <div v-else>
        <HeroSection />
        <AboutSection />
        <PricingSection />
        <CtaSection />
      </div>
    </main>

    <FooterSection v-if="!isPaymentPage" />
    <AnimatedGridBackground v-if="!isPaymentPage" />
  </div>
</template>