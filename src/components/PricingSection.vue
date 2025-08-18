<script setup>
import PricingCard from "./PricingCard.vue";

const plans = [
  {
    name: "Promocional",
    description: "Para os 10 primeiros clientes",
    price: "89,90",
    professionals: "Sem limite de profissionais",
    features: [
      "Gerenciamento de agenda",
      "Controle financeiro",
      "Controle de estoque",
      "Suporte prioritário",
      " Insights de négocio por inteligência artificial"
    ],
    promoText: "Apenas 5 planos restantes",
    promo: true,
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
    aria-labelledby="pricing-heading"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 fade-in">
        <h2 id="pricing-heading" class="text-4xl font-bold mb-4" style="color: var(--black-soft)">
          Plano único, simplicidade para sua gestão
        </h2>
        <p class="text-xl max-w-3xl mx-auto" style="color: var(--gray-dark)">
          Conheça nosso plano completo, pensado para atender todas as necessidades do seu salão com eficiência e facilidade. Comece a transformar sua gestão hoje mesmo!
        </p>
      </div>

      <div class="flex flex-wrap justify-center gap-8" role="list">
        <div
          v-for="(plan, index) in plans"
          :key="index"
          class="w-full md:w-auto md:flex-1 md:max-w-md"
          role="listitem"
          :aria-label="`Plano ${plan.name} por R$ ${plan.price} por mês`"
        >
          <PricingCard
            :name="plan.name"
            :description="plan.description"
            :price="plan.price"
            :professionals="plan.professionals"
            :features="plan.features"
            :featured="plan.featured"
            :promoText="plan.promoText"
            :promo="plan.promo"
          />
        </div>
      </div>
    </div>
  </section>
</template>
