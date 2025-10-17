import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from './ui/button'

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/85 backdrop-blur-lg shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}>
      <div className='container mx-auto px-6 flex items-center justify-between'>
        <button
          onClick={() => scrollToSection('hero')}
          className='inline-flex items-center gap-2 hover:text-[#f0b85d] transition-colors cursor-pointer'>
          <motion.div
            className='flex items-center gap-2'
            whileHover={{ scale: 1.05 }}>
            <img
              src='/icon-salon.png'
              alt='Logo Salon'
              className='w-22 h-12 object-contain'
            />
          </motion.div>
        </button>

        <nav className='hidden md:flex items-center gap-8'>
          <button
            onClick={() => scrollToSection('hero')}
            className='text-white/80 hover:text-white transition-colors cursor-pointer'>
            Início
          </button>
          <button
            onClick={() => scrollToSection('financeiro')}
            className='text-white/80 hover:text-white transition-colors cursor-pointer'>
            Financeiro
          </button>
          <button
            onClick={() => scrollToSection('funcionalidades')}
            className='text-white/80 hover:text-white transition-colors cursor-pointer'>
            Funcionalidades
          </button>
          <button
            onClick={() => scrollToSection('assinatura')}
            className='text-white/80 hover:text-white transition-colors cursor-pointer'>
            Assinatura
          </button>
          <button
            onClick={() => scrollToSection('planos')}
            className='text-white/80 hover:text-white transition-colors cursor-pointer'>
            Planos
          </button>
          <button
            onClick={() => scrollToSection('contato')}
            className='text-white/80 hover:text-white transition-colors cursor-pointer'>
            Contato
          </button>
        </nav>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            onClick={() => scrollToSection('planos')}
            className='relative overflow-hidden group cursor-pointer'
            style={{
              background: 'linear-gradient(135deg, #f0b85d 0%, #d99e4a 100%)',
              border: 'none',
            }}>
            <span className='relative z-10'>Assine Agora</span>
            <motion.div
              className='absolute inset-0 bg-white/20'
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />
          </Button>
        </motion.div>
      </div>
    </motion.header>
  )
}
