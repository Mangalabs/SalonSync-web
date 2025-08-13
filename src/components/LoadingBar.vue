<script setup>
import { onMounted } from "vue";

onMounted(() => {
  setTimeout(() => {
    const loadingBar = document.querySelector(".loading-bar");
    if (loadingBar) {
      loadingBar.style.opacity = "0";
      setTimeout(() => loadingBar.remove(), 300);
    }
  }, 2000);
});
</script>

<template>
  <div
    class="loading-bar fixed top-0 left-0 w-0 h-1 z-9999"
    style="
      background: linear-gradient(
        90deg,
        var(--yellow-strong),
        var(--yellow-light)
      );
    "
  ></div>
</template>
