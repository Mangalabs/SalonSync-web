import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, AlertCircle } from 'lucide-react';
import { Card } from './ui/card';
import { AreaChart, Area, ResponsiveContainer, BarChart, Bar, LineChart, Line } from 'recharts';

export function FinancialControl() {
const features = [
  {
    icon: DollarSign,
    title: 'Comissões calculadas automaticamente',
    description: 'Esqueça os cálculos manuais: nosso sistema calcula as comissões da equipe em tempo real, economizando tempo e evitando erros.',
    chartType: 'area',
    data: [
      { value: 2400 },
      { value: 3200 },
      { value: 2800 },
      { value: 3800 },
      { value: 3400 },
      { value: 4200 },
      { value: 4800 }
    ]
  },
  {
    icon: TrendingUp,
    title: 'Descubra seus serviços mais rentáveis',
    description: 'Saiba rapidamente quais serviços e produtos geram mais lucro, para focar no que realmente cresce seu negócio.',
    chartType: 'bar',
    data: [
      { value: 40 },
      { value: 70 },
      { value: 55 },
      { value: 85 },
      { value: 60 },
      { value: 90 },
      { value: 75 }
    ]
  },
  {
    icon: AlertCircle,
    title: 'Nunca perca pagamentos',
    description: 'Receba alertas automáticos sobre contas atrasadas e vencimentos, mantendo seu fluxo de caixa sempre sob controle.',
    chartType: 'line',
    data: [
      { value: 30 },
      { value: 45 },
      { value: 35 },
      { value: 60 },
      { value: 50 },
      { value: 70 },
      { value: 65 }
    ]
  }
];


  const renderChart = (chartType: string, data: any[]) => {
    switch (chartType) {
      case 'area':
        return (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f0b85d" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#f0b85d" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke="#f0b85d" 
                strokeWidth={2}
                fill="url(#colorValue)" 
                animationDuration={1500}
              />
            </AreaChart>
          </ResponsiveContainer>
        );
      case 'bar':
        return (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <Bar 
                dataKey="value" 
                fill="#f0b85d" 
                radius={[4, 4, 0, 0]}
                animationDuration={1500}
              />
            </BarChart>
          </ResponsiveContainer>
        );
      case 'line':
        return (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#f0b85d" 
                strokeWidth={3}
                dot={{ fill: '#f0b85d', r: 4 }}
                animationDuration={1500}
              />
            </LineChart>
          </ResponsiveContainer>
        );
      default:
        return null;
    }
  };

  return (
    <section id='financeiro' className="relative py-24 overflow-hidden" style={{ background: '#e5e5e5' }}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-black text-4xl md:text-4xl font-bold">
            Controle do seu <span style={{ color: '#f0b85d' }}>dinheiro</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#727272' }}>
            Transforme números em decisões inteligentes: acompanhe seu faturamento e otimize seus resultados.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="p-8 h-full bg-white border-none shadow-lg hover:shadow-2xl transition-all duration-300 group">
                <motion.div
                  className="mb-6"
                  initial={{ scale: 1, rotate: 0 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #f0b85d 0%, #d99e4a 100%)' }}
                  >
                    <feature.icon size={32} className="text-black" />
                  </div>
                </motion.div>

                <h3 className="mb-3 group-hover:text-[#f0b85d] transition-colors text-black">
                  {feature.title}
                </h3>
                <p style={{ color: '#727272' }}>{feature.description}</p>

                <motion.div 
                  className="mt-6 h-24 bg-gradient-to-b from-transparent to-[#f0b85d]/5 rounded-lg p-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                >
                  {renderChart(feature.chartType, feature.data)}
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="absolute top-10 right-10 w-64 h-64 rounded-full opacity-10"
          style={{ background: '#f0b85d' }}
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
      </div>
    </section>
  );
}
