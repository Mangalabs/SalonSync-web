<script setup>
import PricingCard from "./PricingCard.vue";

const plans = [
  {
    name: "Profissional",
    description: "Ideal para salões médios",
    price: "149",
    professionals: "Até 5 profissionais",
    features: [
      "Gerenciamento de agenda",
      "Controle financeiro",
      "Controle de estoque",
      "Suporte prioritário",
    ],
    featured: true,
  },
];
</script>

<template>
  <section
    id="pricing"
    class="py-20 parallax"
    style="
      background: linear-gradient(135deg, #f3f3f3, var(--off-white));
    "
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 fade-in">
        <h2 class="text-4xl font-bold mb-4" style="color: var(--black-soft)">
          Plano único, simplicidade para sua gestão
        </h2>
        <p class="text-xl max-w-3xl mx-auto" style="color: var(--gray-dark)">
          Conheça nosso plano completo, pensado para atender todas as necessidades do seu salão com eficiência e facilidade. Comece a transformar sua gestão hoje mesmo!
        </p>
      </div>

      <div class="flex flex-wrap justify-center gap-8">
        <div
          v-for="(plan, index) in plans"
          :key="index"
          class="w-full md:w-auto md:flex-1 md:max-w-md"
        >
          <PricingCard
            :name="plan.name"
            :description="plan.description"
            :price="plan.price"
            :professionals="plan.professionals"
            :features="plan.features"
            :featured="plan.featured"
          />
        </div>
      </div>
    </div>
  </section>
</template>
