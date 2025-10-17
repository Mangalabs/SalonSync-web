import { motion } from 'framer-motion'
import {
  TrendingUp,
  Gift,
  CheckCircle2,
  Repeat,
  DollarSign,
  Users,
  Crown,
  Calendar,
  Star,
  Sliders,
} from 'lucide-react'
import { Card } from './ui/card'
import { Badge } from './ui/badge'

export function SalesGrowth() {
  const planExamples = [
    {
      title: 'Plano Básico',
      description: '2 cortes + 1 barba por mês',
      price: 'R$ 89,90',
      frequency: '/mês',
      icon: Gift,
      features: ['Agendamento prioritário', 'Desconto em produtos'],
      tag: 'Mais Popular',
      gradient: 'from-[#f0b85d] to-[#d99e4a]',
    },
    {
      title: 'Plano Premium',
      description: 'Serviços ilimitados + extras',
      price: 'R$ 149,90',
      frequency: '/mês',
      icon: Crown,
      features: ['Todos os serviços', 'Atendimento VIP', '10% em produtos'],
      tag: 'Recomendado',
      gradient: 'from-[#d99e4a] to-[#c89040]',
    },
    {
      title: 'Pacote Trimestral',
      description: '12 serviços durante 3 meses',
      price: 'R$ 399',
      frequency: '/trimestre',
      icon: Calendar,
      features: ['Pagamento único', 'Economia de 15%', 'Flexibilidade total'],
      tag: 'Melhor Custo-Benefício',
      gradient: 'from-[#f0b85d] to-[#e8a954]',
    },
  ]

  const keyBenefits = [
    {
      icon: Repeat,
      title: 'Planos ilimitados',
      description: 'Crie quantos quiser',
    },
    {
      icon: DollarSign,
      title: 'Pagamento automático',
      description: 'Cai direto na conta',
    },
    {
      icon: TrendingUp,
      title: 'Receita previsível',
      description: 'Planeje crescimento',
    },
    {
      icon: Users,
      title: 'Clientes fiéis',
      description: 'Voltam sempre',
    },
  ]


  return (
    <section
      id='assinatura'
      className='relative py-16 overflow-hidden bg-gradient-to-br from-black via-[#0a0a0a] to-black'>
      <motion.div
        className='absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-5 blur-3xl'
        style={{ background: '#f0b85d' }}
        animate={{ scale: [1, 1.3, 1], x: [0, 50, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
      />

      <div className='container mx-auto px-6 relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='text-center mb-10 max-w-4xl mx-auto'>
          <h2 className='text-white mb-6 text-3xl md:text-4xl font-bold'>
            Transforme clientes em{' '}
            <span style={{ color: '#f0b85d' }}>assinantes fiéis</span>
          </h2>

          <div className='flex flex-wrap justify-center gap-3 mb-4'>
            {keyBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.05,
                }}
                whileHover={{ scale: 1.05 }}
                className='flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a1a1a]/80 border border-[#f0b85d]/30'>
                <benefit.icon size={16} style={{ color: '#f0b85d' }} />
                <span className='text-sm text-white'>{benefit.title}</span>
              </motion.div>
            ))}
          </div>

          <p className='text-sm' style={{ color: '#727272' }}>
            Crie planos personalizados • Cobrança automática • Sem custos extras
          </p>
        </motion.div>

        <div className='grid lg:grid-cols-[1.5fr,1fr] gap-8 max-w-6xl mx-auto mb-8'>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}>
            <p
              className='text-xs mb-3 text-center lg:text-left'
              style={{ color: '#f0b85d' }}>
              Veja ideias e crie planos únicos para seus clientes:
            </p>

            <div className='grid sm:grid-cols-3 gap-6'>
              {planExamples.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                  }}
                  whileHover={{ y: -5 }}
                  className='group'>
                  <Card className='relative p-5 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#4f4332] hover:border-[#f0b85d] transition-all duration-300 min-h-[350px] flex flex-col justify-between'>
                    <Badge
                      className='absolute top-1 right-2 text-xs px-2  font-semibold shadow-md  border-2 bg-amber-500/10'
                      style={{
                        background: `linear-gradient(135deg, ${plan.gradient})`,
                      }}>
                      <span className='text-yellow-400 text-xs'>
                        {plan.tag}
                      </span>
                    </Badge>

                    <motion.div
                      className='w-14 h-14 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg'
                      style={{
                        background: `linear-gradient(135deg, ${plan.gradient})`,
                      }}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}>
                      <plan.icon
                        size={26}
                        className='text-yellow-500 drop-shadow-md'
                      />
                    </motion.div>

                    <div className='text-center mb-3'>
                      <h4 className='text-white text-sm font-semibold mb-1'>
                        {plan.title}
                      </h4>
                      <p className='text-xs mb-2' style={{ color: '#e5e5e5' }}>
                        {plan.description}
                      </p>
                      <div className='flex items-baseline justify-center gap-1'>
                        <span className='text-xl text-white font-bold'>
                          {plan.price}
                        </span>
                        <span className='text-xs' style={{ color: '#727272' }}>
                          {plan.frequency}
                        </span>
                      </div>
                    </div>

                    <div className='space-y-1 pt-3 border-t border-[#333333]'>
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className='flex items-start gap-1.5'>
                          <CheckCircle2
                            size={14}
                            style={{ color: '#f0b85d' }}
                            className='flex-shrink-0 mt-0.5 drop-shadow-md'
                          />
                          <span
                            className='text-xs'
                            style={{ color: '#e5e5e5' }}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='max-w-6xl mx-auto mt-8'>
          <Card className='p-6 bg-gradient-to-br from-[#1a1a1a]/80 to-[#0a0a0a]/80 border border-[#f0b85d]/20 backdrop-blur-sm'>
            <h3 className='text-white mb-4 text-center text-sm'>
              Por que usar o Sistema de Assinatura?
            </h3>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                whileHover={{ x: 5 }}
                className='flex items-start gap-3 p-3 rounded-lg bg-[#0a0a0a]/50 border border-[#333333] hover:border-[#f0b85d]/50 transition-all'>
                <div
                  className='w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0'
                  style={{
                    background:
                      'linear-gradient(135deg, #f0b85d 0%, #d99e4a 100%)',
                  }}>
                  <Repeat size={18} className='text-black' />
                </div>
                <div>
                  <p className='text-xs text-white mb-1'>
                    Crie e gerencie planos ilimitados, totalmente sob medida
                    para seu salão.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                whileHover={{ x: 5 }}
                className='flex items-start gap-3 p-3 rounded-lg bg-[#0a0a0a]/50 border border-[#333333] hover:border-[#f0b85d]/50 transition-all'>
                <div
                  className='w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0'
                  style={{
                    background:
                      'linear-gradient(135deg, #f0b85d 0%, #d99e4a 100%)',
                  }}>
                  <DollarSign size={18} className='text-black' />
                </div>
                <div>
                  <p className='text-xs text-white mb-1'>
                    Cobrança automática e pagamentos diretos na sua conta.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                whileHover={{ x: 5 }}
                className='flex items-start gap-3 p-3 rounded-lg bg-[#0a0a0a]/50 border border-[#333333] hover:border-[#f0b85d]/50 transition-all'>
                <div
                  className='w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0'
                  style={{
                    background:
                      'linear-gradient(135deg, #f0b85d 0%, #d99e4a 100%)',
                  }}>
                  <TrendingUp size={18} className='text-black' />
                </div>
                <div>
                  <p className='text-xs text-white mb-1'>
                    Receita previsível e planejamento financeiro simplificado.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                whileHover={{ x: 5 }}
                className='flex items-start gap-3 p-3 rounded-lg bg-[#0a0a0a]/50 border border-[#333333] hover:border-[#f0b85d]/50 transition-all'>
                <div
                  className='w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0'
                  style={{
                    background:
                      'linear-gradient(135deg, #f0b85d 0%, #d99e4a 100%)',
                  }}>
                  <Users size={18} className='text-black' />
                </div>
                <div>
                  <p className='text-xs text-white mb-1'>
                    Faça com que seus clientes voltem sempre e aproveitem cada
                    serviço.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                whileHover={{ x: 5 }}
                className='flex items-start gap-3 p-3 rounded-lg bg-[#0a0a0a]/50 border border-[#333333] hover:border-[#f0b85d]/50 transition-all'>
                <div
                  className='w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0'
                  style={{
                    background:
                      'linear-gradient(135deg, #f0b85d 0%, #d99e4a 100%)',
                  }}>
                  <Sliders size={18} className='text-black' />
                </div>
                <div>
                  <p className='text-xs text-white mb-1'>
                    Flexibilidade total para seus planos: ajuste valores,
                    serviços, frequência e regras do jeito que quiser.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
                whileHover={{ x: 5 }}
                className='flex items-start gap-3 p-3 rounded-lg bg-[#0a0a0a]/50 border border-[#333333] hover:border-[#f0b85d]/50 transition-all md:col-span-2 lg:col-span-1'>
                <div
                  className='w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0'
                  style={{
                    background:
                      'linear-gradient(135deg, #f0b85d 0%, #d99e4a 100%)',
                  }}>
                  <Star size={18} className='text-black' />
                </div>
                <div>
                  <p className='text-xs text-white mb-1'>
                    Tudo já incluso na plataforma, sem precisar de serviços
                    extras.
                  </p>
                </div>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
