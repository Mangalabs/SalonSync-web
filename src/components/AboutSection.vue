<script setup>
const features = [
  {
    icon: "fa-calendar-alt",
    title: "Agendamento Online",
    description:
      "Preencha sua agenda 24h por dia com confirmações automáticas e lembretes no WhatsApp para reduzir faltas.",
  },
  {
    icon: "fa-users",
    title: "Gestão de Clientes",
    description:
      "Conheça cada cliente pelo nome, histórico e preferências para oferecer um atendimento inesquecível.",
  },
  {
    icon: "fa-chart-line",
    title: "Relatórios Inteligentes",
    description:
      "Descubra o que realmente impulsiona seu negócio com métricas claras e dashboards em tempo real.",
  },
  {
    icon: "fa-credit-card",
    title: "Controle Financeiro",
    description:
      "Tenha total controle de receitas, despesas e comissões para maximizar seus lucros.",
  },
  {
    icon: "fa-box",
    title: "Controle de Estoque",
    description:
      "Nunca mais perca vendas: receba alertas de estoque baixo e acompanhe tudo em tempo real.",
  },
  {
    icon: "fa-concierge-bell",
    title: "Catálogo de Serviços",
    description:
      "Apresente seus serviços com preços por filial e associação a profissionais para fechar negócios mais rápido.",
  },
];
</script>

<template>
  <section id="features" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 fade-in">
        <h2 class="text-4xl font-bold mb-4" style="color: var(--black-soft)">
          Funcionalidades que fazem a diferença
        </h2>
        <p class="text-xl max-w-3xl mx-auto" style="color: var(--gray-dark)">
          Tudo que você precisa para gerenciar seu salão de forma profissional e
          eficiente
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="card-hover bg-white p-8 rounded-2xl shadow-lg border border-gray-100 fade-in"
        >
          <div
            class="feature-icon w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
          >
            <i :class="`fas ${feature.icon} text-2xl text-white`"></i>
          </div>
          <h3
            class="text-xl font-semibold mb-4"
            style="color: var(--black-soft)"
          >
            {{ feature.title }}
          </h3>
          <p style="color: var(--gray-dark)">
            {{ feature.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
