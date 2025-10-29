import { motion } from 'framer-motion'
import {
  Package,
  Smartphone,
  Users,
  Headphones,
  CheckCircle2,
} from 'lucide-react'
import { Card } from './ui/card'
import { Badge } from './ui/badge'

export function SystemTools() {
  const tools = [
    {
      icon: Package,
      title: 'Gestão inteligente de produtos',
      description:
        'Controle cada item do seu estoque com praticidade. Saiba o que entra, o que sai e quanto cada produto representa nos seus custos.',
      color: '#f0b85d',
      bgGradient: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
      features: [
        'Controle de entrada e saída',
        'Histórico de consumo',
        'Relatórios de custo por produto',
      ],
      badge: 'Gestão total',
    },
    {
      icon: Smartphone,
      title: 'Acesso em qualquer dispositivo',
      description:
        'Gerencie seu salão do jeito que quiser: no celular, tablet ou computador, com a mesma facilidade e rapidez.',
      color: '#d99e4a',
      bgGradient: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
      features: [
        'Interface web totalmente responsiva',
        'Sincronização instantânea',
        'Mesma experiência em todos os dispositivos',
      ],
      badge: 'Multiplataforma',
    },
    {
      icon: Users,
      title: 'Gestão completa da equipe',
      description:
        'Acompanhe o desempenho, comissões e agenda de cada profissional em um só lugar, com clareza e praticidade.',
      color: '#f0b85d',
      bgGradient: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
      features: [
        'Escalas organizadas',
        'Cálculo instantâneo de comissões',
        'Dashboard por profissional',
      ],
      badge: 'Controle completo',
    },

    {
      icon: Headphones,
      title: 'Suporte dedicado em horário comercial',
      description:
        'Nossa equipe está disponível para ajudar você a aproveitar ao máximo o sistema. Atendimento rápido, humano e eficiente.',
      color: '#d99e4a',
      bgGradient: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
      features: [
        'Tutorial passo a passo',
        'Contato direto via WhatsApp',
        'Base de conhecimento completa',
      ],
      badge: 'Suporte humanizado',
    },
  ]

  return (
    <section
      id='funcionalidades'
      className='relative py-24 bg-black overflow-hidden'>
      <div className='absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black' />

      <div className='container mx-auto px-6 relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-8'>
          <h2 className='text-white mb-4 text-3xl md:text-4xl font-bold'>
            Todas as ferramentas para seu{' '}
            <span style={{ color: '#f0b85d' }}>salão</span>
          </h2>
          <p className='text-lg max-w-2xl mx-auto' style={{ color: '#e5e5e5' }}>
            Um sistema completo que simplifica cada aspecto da gestão do seu
            negócio
          </p>
        </motion.div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className='group h-full'>
              <Card
                className='relative p-6 border-2 hover:shadow-2xl transition-all duration-300 h-full flex flex-col overflow-hidden'
                style={{
                  background: tool.bgGradient,
                  borderColor: '#333333',
                }}>
                <div className='absolute top-4 right-4'>
                  <Badge
                    variant='secondary'
                    className='text-xs border-none'
                    style={{
                      background: `${tool.color}20`,
                      color: tool.color,
                    }}>
                    {tool.badge}
                  </Badge>
                </div>

                <motion.div
                  className='mb-6 relative'
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}>
                  <div className='relative'>
                    <motion.div
                      className='absolute inset-0 rounded-2xl blur-xl opacity-40'
                      style={{ background: tool.color }}
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.5, 0.3],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <div
                      className='relative w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg'
                      style={{
                        background: `linear-gradient(135deg, ${tool.color} 0%, #d99e4a 100%)`,
                      }}>
                      <tool.icon size={32} className='text-black' />
                    </div>
                  </div>
                </motion.div>

                <div className='flex-1 flex flex-col'>
                  <h4 className='text-white mb-3 group-hover:text-[#f0b85d] transition-colors'>
                    {tool.title}
                  </h4>
                  <p className='mb-6' style={{ color: '#e5e5e5' }}>
                    {tool.description}
                  </p>

                  <div className='space-y-2 mt-auto'>
                    {tool.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        className='flex items-center gap-2'
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.1 + idx * 0.1,
                        }}>
                        <CheckCircle2
                          size={16}
                          style={{ color: tool.color }}
                          className='flex-shrink-0'
                        />
                        <span className='text-sm' style={{ color: '#e5e5e5' }}>
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <motion.div
                  className='absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'
                  style={{
                    border: `2px solid ${tool.color}`,
                    boxShadow: `0 0 20px ${tool.color}40`,
                  }}
                />
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className='text-center mt-16'>
          <p className='text-lg mb-2' style={{ color: '#e5e5e5' }}>
            E muito mais funcionalidades para transformar seu negócio
          </p>
          <div className='flex flex-wrap justify-center gap-3 mt-6'>
            {[
              'Agendamento Online',
              'Relatórios Avançados',
              'Integração Financeira',
              'Marketing Automático',
            ].map((item, idx) => (
              <Badge
                key={idx}
                variant='outline'
                className='px-4 py-2 border-[#f0b85d]/30 text-[#f0b85d] hover:bg-[#f0b85d]/10 transition-colors'>
                {item}
              </Badge>
            ))}
          </div>
        </motion.div>
      </div>

      <div className='absolute top-1/2 left-0 w-96 h-96 bg-[#f0b85d]/5 rounded-full blur-3xl -translate-y-1/2' />
      <div className='absolute top-1/2 right-0 w-96 h-96 bg-[#f0b85d]/5 rounded-full blur-3xl -translate-y-1/2' />
    </section>
  )
}
