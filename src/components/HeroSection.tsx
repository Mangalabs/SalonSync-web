import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'

export function HeroSection() {
  return (
    <section
      id='hero'
      className='relative min-h-screen flex items-center justify-center overflow-hidden bg-black'>
      <div className='absolute inset-0 bg-black'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(240,184,93,0.15),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(217,158,74,0.1),transparent_50%)]' />

        <div
          className='absolute inset-0 opacity-[0.03]'
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg,#f0b85d,#f0b85d 2px,transparent 2px,transparent 60px)',
          }}
        />

        <div
          className='absolute inset-0 opacity-[0.05]'
          style={{
            backgroundImage:
              'radial-gradient(circle, #f0b85d 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />

        <motion.div
          className='absolute top-1/3 right-1/4 w-[420px] h-[420px] rounded-full opacity-10 blur-[80px]'
          style={{
            background: 'radial-gradient(circle, #f0b85d, transparent 70%)',
          }}
          animate={{ scale: [1, 1.2, 1], x: [0, 20, 0], y: [0, -15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className='absolute bottom-1/3 left-1/4 w-[380px] h-[380px] rounded-full opacity-8 blur-[80px]'
          style={{
            background: 'radial-gradient(circle, #d99e4a, transparent 70%)',
          }}
          animate={{ scale: [1, 1.15, 1], x: [0, -20, 0], y: [0, 15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className='absolute top-10 right-10 w-24 h-24 opacity-5'>
          <svg viewBox='0 0 100 100' className='w-full h-full'>
            <polygon
              points='50 1 95 25 95 75 50 99 5 75 5 25'
              fill='none'
              stroke='#f0b85d'
              strokeWidth='2'
            />
          </svg>
        </div>
      </div>

      <div className='container mx-auto px-4 py-20 relative z-10'>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <div className='space-y-8'>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='inline-flex items-center gap-2 bg-[#f0b85d]/10 border border-[#f0b85d]/30 rounded-full px-4 py-2'>
              <Sparkles className='w-4 h-4 text-[#f0b85d]' />
              <span className='text-[#f0b85d]'>
                Gestão Inteligente para Salões
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className='text-white text-5xl md:text-6xl lg:text-7xl leading-tight'>
              Transforme seu negócio com{' '}
              <span className='bg-gradient-to-r from-[#f0b85d] to-[#d4a046] bg-clip-text text-transparent'>
                gestão inteligente
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='text-[#e5e5e5] text-lg md:text-xl max-w-xl'>
              O SalonSync moderniza a gestão do seu salão de beleza ou
              barbearia, reduz custos e aumenta seus lucros de forma prática.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className='flex flex-col sm:flex-row gap-4'>
              <Button className='bg-gradient-to-r from-[#f0b85d] to-[#d4a046] text-black hover:shadow-[0_0_30px_rgba(240,184,93,0.5)] transition-all px-8 py-6 group cursor-pointer'>
                Começar Agora
                <ArrowRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform' />
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='relative flex justify-center items-center'>
            <div className='relative z-10 w-full max-w-2xl'>
              <div className='rounded-xl overflow-hidden shadow-[0_20px_60px_rgba(240,184,93,0.25)] border border-[#f0b85d]/20 bg-black/30 backdrop-blur-sm p-3'>
                <div className='aspect-video rounded-lg overflow-hidden'>
                  <ImageWithFallback
                    src='https://images.unsplash.com/photo-1758411898049-4de9588be514?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
                    alt='SalonSync Dashboard'
                    className='w-full h-full object-cover'
                    loading='lazy'
                  />
                </div>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, 10, 0], rotate: [0, 3, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className='absolute -top-6 -right-6 w-20 h-20 bg-[#f0b85d] opacity-20 blur-2xl rounded-full'
            />
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, -3, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className='absolute -bottom-6 -left-6 w-20 h-20 bg-[#f0b85d] opacity-20 blur-2xl rounded-full'
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
