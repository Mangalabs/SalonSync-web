<script setup>
import { onMounted } from "vue";

import Navbar from "./components/Navbar.vue";
import HeroSection from "./components/HeroSection.vue";
import AboutSection from "./components/AboutSection.vue";
import PricingSection from "./components/PricingSection.vue";
import CtaSection from "./components/CTASection.vue";
import FooterSection from "./components/FooterSection.vue";
import LoadingBar from "./components/LoadingBar.vue";
import AnimatedGridBackground from "./components/AnimatedGridBackground.vue";

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
    <Navbar />
    <main>
      <HeroSection />
      <AboutSection />
      <PricingSection />
      <CtaSection />
    </main>
    <FooterSection />
    <AnimatedGridBackground />
  </div>
</template>
