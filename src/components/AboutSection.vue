<script setup>
import { onMounted } from "vue";
import { featureData } from "../data/featureData";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

[...featureData.primaryFeatures, ...featureData.secondaryFeatures].forEach(
  (f) => library.add(f.icon)
);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
  );
  document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
});
</script>

<template>
  <div class="font-elegant">
    <section id="features" class="py-20 px-4 max-w-7xl mx-auto">
      <div class="text-center mb-16 fade-in">
        <h2
          class="text-4xl md:text-5xl font-bold"
          style="color: var(--black-soft)"
        >
          {{
            featureData.mainTitle.heading.split(
              featureData.mainTitle.highlight
            )[0]
          }}
          <span style="color: var(--yellow-strong)">{{
            featureData.mainTitle.highlight
          }}</span>
        </h2>
        <p
          class="text-xl mx-auto"
          style="color: var(--gray-dark); max-width: 48rem"
        >
          {{ featureData.mainTitle.description }}
        </p>
      </div>
    </section>

    <template
      v-for="(feature, index) in featureData.primaryFeatures"
      :key="index"
    >
      <section class="py-20 px-4 max-w-7xl mx-auto">
        <div
          class="grid lg:grid-cols-2 gap-12 items-center fade-in"
          :class="{
            'lg:[&>*:nth-child(1)]:order-2 lg:[&>*:nth-child(2)]:order-1':
              index % 2 !== 0,
          }"
        >
          <div>
            <h3
              class="text-3xl md:text-4xl font-bold"
              style="color: var(--black-soft)"
            >
              {{ feature.title.split(feature.highlight)[0] }}
              <span style="color: var(--yellow-strong)">{{
                feature.highlight
              }}</span>
            </h3>
            <p
              class="text-lg mb-6"
              style="color: var(--gray-dark); line-height: 1.75"
            >
              {{ feature.description }}
            </p>

            <div class="space-y-4 mb-8">
              <div
                v-for="(benefit, i) in feature.benefits"
                :key="i"
                class="flex items-center space-x-3"
              >
                <div
                  class="w-2 h-2 rounded-full"
                  style="background-color: var(--yellow-strong)"
                ></div>
                <span style="color: var(--gray-dark)">{{ benefit }}</span>
              </div>
            </div>
          </div>

          <div class="relative">
            <div
              class="h-80 flex items-center justify-center hover-lift overflow-hidden border-4 border-white shadow-lg"
              :style="`border-radius: ${feature.shape};`"
            >
              <img
                :src="`${feature.image}`"
                alt="Imagem ilustrativa"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </template>

    <section
      class="py-20 px-4"
      style="
        background: linear-gradient(
          135deg,
          var(--beige-light),
          var(--off-white)
        );
      "
    >
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16 fade-in">
          <h2
            class="text-3xl md:text-4xl font-bold"
            style="color: var(--black-soft)"
          >
            {{
              featureData.secondaryTitle.heading.split(
                featureData.secondaryTitle.highlight
              )[0]
            }}
            <span style="color: var(--yellow-strong)">{{
              featureData.secondaryTitle.highlight
            }}</span>
          </h2>
          <p
            class="text-lg mx-auto"
            style="color: var(--gray-dark); max-width: 42rem"
          >
            {{ featureData.secondaryTitle.description }}
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(feature, index) in featureData.secondaryFeatures"
            :key="index"
            class="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 fade-in hover-lift"
          >
            <div
              class="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 icon-bounce"
              :class="feature.bgClass"
            >
              <font-awesome-icon
                :icon="feature.icon"
                size="2x"
                class="text-brown-dark w-8 h-8"
              />
            </div>
            <h3 class="text-xl font-bold mb-4" style="color: var(--black-soft)">
              {{ feature.title }}
            </h3>
            <p style="color: var(--gray-dark)">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
}
.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

.hover-lift {
  transition: all 0.3s ease;
}
.hover-lift:hover {
  transform: translateY(-5px) scale(1.02);
}

.icon-bounce {
  transition: all 0.3s ease;
}
.icon-bounce:hover {
  transform: scale(1.1);
  color: var(--yellow-strong);
}

@media (max-width: 768px) {
  section {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
  .hover-lift:hover,
  .icon-bounce:hover {
    transform: none;
  }
  button {
    width: 100%;
    padding: 1rem;
  }
}
</style>
