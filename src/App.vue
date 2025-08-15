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

onMounted(() => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animationDelay = "0.2s";
        entry.target.classList.add("fade-in");
      }
    });
  }, observerOptions);

  document.querySelectorAll(".fade-in").forEach((el) => {
    observer.observe(el);
  });

  document.querySelectorAll(".btn-primary").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const ripple = document.createElement("span");
      const rect = btn.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = size + "px";
      ripple.style.left = x + "px";
      ripple.style.top = y + "px";
      ripple.classList.add("ripple");

      btn.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
});
</script>

<template>
  <div class="min-h-screen">
    <LoadingBar />
    <Navbar />
    <HeroSection />
    <AboutSection />
    <PricingSection />
    <CtaSection />
    <FooterSection />
    <AnimatedGridBackground />
  </div>
</template>
