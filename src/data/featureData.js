import {
  faCalendarCheck,
  faChartLine,
  faUsers,
  faBoxesStacked,
  faMobileScreen,
  faHeadset,
  faMoneyBillWave,
  faUserCog,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export const featureData = {
  mainTitle: {
    heading: "Tudo que seu salão precisa em um só lugar",
    highlight: "em um só lugar",
    description:
      "Organize, atenda e venda mais sem esforço. Um sistema completo que cuida da gestão do seu salão e encanta seus clientes.",
  },

  primaryFeatures: [
    // TODO: Habilitar assim que o wpp estiver configurado
    // {
    //   title: "Agenda inteligente",
    //   highlight: "inteligente",
    //   description:
    //     "Agendamentos automáticos, sem erros e sem horários vazios. Você mantém a agenda sempre cheia.",
    //   benefits: [
    //     "Agendamentos pelo WhatsApp 24h",
    //     "Evita marcações no mesmo horário",
    //   ],
    //   icon: faCalendarCheck,
    //   shape: "65% 35% 25% 75% / 55% 40% 60% 45%",
    //   image: "/chatIA.jpeg",
    // },
    {
      title: "Controle do seu dinheiro",
      highlight: "dinheiro",
      description:
        "Saiba exatamente quanto entra e sai, com relatórios claros que mostram seus lucros e ajudam a cortar prejuízos.",
      benefits: [
        "Comissões calculadas automaticamente",
        "Lista dos serviços e produtos mais rentáveis",
        "Alertas de contas atrasadas",
      ],
      icon: faChartLine,
      shape: "40% 60% 80% 20% / 45% 25% 75% 55%",
      image: "/dashboard-img.jpeg",
    },
  ],

  secondaryFeatures: [
    {
      icon: faBoxesStacked,
      title: "Controle de produtos",
      description:
        "Nunca mais fique sem tintura ou shampoo. Receba alertas antes de acabar o estoque.",
      bgClass: "bg-salon-yellow-light",
    },
    {
      icon: faMobileScreen,
      title: "Multiplataforma",
      description:
        "Acesse do celular, tablet ou computador com a mesma facilidade.",
      bgClass: "bg-salon-brown-light",
    },
    // {
    //   icon: faWhatsapp,
    //   title: "WhatsApp integrado",
    //   description:
    //     "Seus clientes confirmam e remarcarm pelo WhatsApp. Rápido, prático e sem ligações perdidas.",
    //   bgClass: "bg-salon-yellow-light",
    // },
    {
      icon: faUserCog,
      title: "Controle da equipe",
      description:
        "Gerencie escalas, comissões e desempenho da equipe com poucos cliques.",
      bgClass: "bg-salon-yellow-light",
    },
    {
      icon: faHeadset,
      title: "Suporte sempre pronto",
      description:
        "Conte com nossa equipe para te ajudar a qualquer momento, sem burocracia.",
      bgClass: "bg-salon-yellow-light",
    },
    {
      icon: faMoneyBillWave,
      title: "Mais vendas para o seu salão",
      description:
        "Crie promoções, pacotes e combos irresistíveis que aumentam seu faturamento de forma automática.",
      bgClass: "bg-salon-brown-light",
    },
  ],

  secondaryTitle: {
    heading: "Todas as ferramentas para seu salão",
    highlight: "seu salão",
    description:
      "Deixe o sistema cuidar da parte chata enquanto você foca no que ama: transformar a beleza dos seus clientes.",
  },

  valuePropositions: [
    {
      icon: faClock,
      title: "Mais tempo para você",
      description: "Menos burocracia, mais tempo para atender e encantar.",
    },
    {
      icon: faChartLine,
      title: "Mais dinheiro no bolso",
      description: "Controle seus custos e aumente seus lucros sem adivinhar.",
    },
    {
      icon: faUsers,
      title: "Clientes mais felizes",
      description: "Organização e agilidade que fazem eles voltarem sempre.",
    },
  ],
};
