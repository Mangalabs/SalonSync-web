import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

export function FinalCTA() {
  const highlights = [
    'Gestão completa em um só sistema',
    'Aumente o faturamento e reduza falhas',
    'Controle financeiro, agenda e equipe em tempo real',
    'Suporte humano e especializado sempre à disposição',
  ]

  return (
    <section className='relative py-32 overflow-hidden bg-gradient-to-br from-[#d99e4a] via-[#f0b85d] to-[#d99e4a]'>
      <div className='absolute inset-0'>
        <motion.div
          className='absolute inset-0'
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.1) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '40px 40px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      <div className='container mx-auto px-6 relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='max-w-4xl mx-auto text-center'>
          <motion.h2
            className='text-black mb-6 text-3xl md:text-4xl font-bold'
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            Leve seu salão a outro nível com uma gestão{' '}
            <span className='text-white'>inteligente e automatizada</span>
          </motion.h2>

          <motion.p
            className='text-xl mb-12 text-black/80 max-w-3xl mx-auto leading-relaxed'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}>
            Chega de sistemas{' '}
            <span className='font-semibold text-black'>lentos</span> e{' '}
            <span className='font-semibold text-black'>confusos</span>. Com o{' '}
            <span className='font-bold text-white'>SalonSync</span>, você tem
            tudo o que precisa em um só lugar:{' '}
            <span className='font-semibold text-black'>
              faturamento, agendamentos, equipe e estoque
            </span>
            , de forma{' '}
            <span className='font-semibold text-black'>
              rápida, intuitiva e sem complicações
            </span>
            . Dê o próximo passo e{' '}
            <span className='font-bold text-white'>
              assuma o controle total
            </span>{' '}
            do seu salão, com{' '}
            <span className='font-semibold text-black'>eficiência</span> e{' '}
            <span className='font-semibold text-black'>clareza</span> em cada
            detalhe.
          </motion.p>

          <motion.div
            className='grid md:grid-cols-2 gap-4 mb-12 max-w-2xl mx-auto'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}>
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                className='flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-lg p-4'
                whileHover={{
                  scale: 1.05,
                  backgroundColor: 'rgba(255,255,255,0.3)',
                }}
                transition={{ duration: 0.3 }}>
                <CheckCircle2 size={24} className='text-black flex-shrink-0' />
                <span className='text-black text-left'>{highlight}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}>

            <motion.p
              className='mt-6 text-black/70'
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}>
              Sem taxa de setup • Cancele quando quiser • Suporte premium
              incluso
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
