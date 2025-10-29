import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { User, Mail, Phone, CheckCircle2, Shield } from 'lucide-react'

type SubmitStatus =
  | 'idle'
  | 'loading'
  | 'success'
  | 'error'
  | 'validation-error'

export function NewsletterSection() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: '',
  })
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle')
  const [feedbackMessage, setFeedbackMessage] = useState('')

  const GOOGLE_SCRIPT_URL =
    'https://script.google.com/macros/s/AKfycbyyBZi1e3nGg7aMoJEykxboHGvpnzzA7FUVfP5j6B_iRSyUNE6_TVeUgY8QNGMzxmDw/exec'

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const isValidWhatsApp = (phone: string) => {
    const cleanPhone = phone.replace(/\D/g, '')
    return cleanPhone.length >= 10 && cleanPhone.length <= 11
  }

  const formatWhatsApp = (value: string) => {
    const cleaned = value.replace(/\D/g, '')
    if (cleaned.length <= 11) {
      if (cleaned.length <= 2) return cleaned
      if (cleaned.length <= 7)
        return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2)}`
      return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(
        7,
        11
      )}`
    }
    return formData.whatsapp
  }

  const handleChange = (field: string, value: string) => {
    if (field === 'whatsapp') {
      setFormData((prev) => ({ ...prev, [field]: formatWhatsApp(value) }))
    } else {
      setFormData((prev) => ({ ...prev, [field]: value }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.nome.trim()) {
      setSubmitStatus('validation-error')
      setFeedbackMessage('Preencha seu nome')
      setTimeout(() => {
        setSubmitStatus('idle')
        setFeedbackMessage('')
      }, 2000)
      return
    }

    if (!formData.email || !isValidEmail(formData.email)) {
      setSubmitStatus('validation-error')
      setFeedbackMessage('Email inválido')
      setTimeout(() => {
        setSubmitStatus('idle')
        setFeedbackMessage('')
      }, 2000)
      return
    }

    if (!formData.whatsapp || !isValidWhatsApp(formData.whatsapp)) {
      setSubmitStatus('validation-error')
      setFeedbackMessage('WhatsApp inválido')
      setTimeout(() => {
        setSubmitStatus('idle')
        setFeedbackMessage('')
      }, 2000)
      return
    }

    setSubmitStatus('loading')
    setFeedbackMessage('')

    try {
      const cleanWhatsApp = formData.whatsapp.replace(/\D/g, '')

      const dataToSend = new FormData()
      dataToSend.append('nome', formData.nome.trim())
      dataToSend.append('email', formData.email.trim().toLowerCase())
      dataToSend.append('whatsapp', cleanWhatsApp)
      dataToSend.append('timestamp', new Date().toISOString())

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: dataToSend,
        mode: 'no-cors',
      })

      setSubmitStatus('success')
      setFeedbackMessage('Cadastro realizado!')

      setTimeout(() => {
        setFormData({ nome: '', email: '', whatsapp: '' })
        setSubmitStatus('idle')
        setFeedbackMessage('')
      }, 2000)
    } catch (error) {
      console.error('Erro ao cadastrar:', error)
      setSubmitStatus('error')
      setFeedbackMessage('Erro ao enviar. Tente novamente.')
      setTimeout(() => {
        setSubmitStatus('idle')
        setFeedbackMessage('')
      }, 2500)
    }
  }

  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-[#0a0a0a] to-black'>
      <div className='absolute inset-0'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(240,184,93,0.08),transparent_70%)]' />

        <motion.div
          className='absolute top-1/2 left-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full opacity-5 blur-[80px] md:blur-[120px]'
          style={{
            background: 'radial-gradient(circle, #f0b85d, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [-50, 0, -50],
            y: [-50, 0, -50],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className='w-full px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:py-24 relative z-10'>
        <div className='max-w-4xl mx-auto w-full'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-center mb-8 sm:mb-10 md:mb-12'>

            <h2 className='text-white text-3xl md:text-4xl font-bold mb-4'>
              Fique por dentro das{' '}
              <span className='bg-gradient-to-r from-[#f0b85d] to-[#d4a046] bg-clip-text text-transparent'>
                novidades
              </span>
            </h2>

            <p className='text-[#e5e5e5] text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-2'>
              Cadastre-se e receba em primeira mão ofertas especiais, dicas de
              gestão e novidades do SalonSync direto no seu WhatsApp e email.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}>
            <form
              onSubmit={handleSubmit}
              className='relative bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-[#f0b85d]/20 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 lg:p-10 shadow-[0_20px_60px_rgba(240,184,93,0.1)]'>

              <div className='space-y-4 sm:space-y-5 md:space-y-6'>
                <div className='space-y-1.5 sm:space-y-2'>
                  <label
                    htmlFor='nome'
                    className='text-[#e5e5e5] text-sm sm:text-base flex items-center gap-2'>
                    <User className='w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#f0b85d]' />
                    Nome Completo
                  </label>
                  <Input
                    id='nome'
                    type='text'
                    placeholder='Digite seu nome'
                    value={formData.nome}
                    onChange={(e) => handleChange('nome', e.target.value)}
                    maxLength={100}
                    className='bg-black/50 border-[#727272]/30 text-white placeholder:text-[#727272] focus:border-[#f0b85d] focus:ring-[#f0b85d]/20 transition-all h-11 sm:h-12 text-base'
                    disabled={submitStatus === 'loading'}
                  />
                </div>

                <div className='space-y-1.5 sm:space-y-2'>
                  <label
                    htmlFor='email'
                    className='text-[#e5e5e5] text-sm sm:text-base flex items-center gap-2'>
                    <Mail className='w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#f0b85d]' />
                    Email
                  </label>
                  <Input
                    id='email'
                    type='email'
                    placeholder='Digite seu email'
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    maxLength={100}
                    className='bg-black/50 border-[#727272]/30 text-white placeholder:text-[#727272] focus:border-[#f0b85d] focus:ring-[#f0b85d]/20 transition-all h-11 sm:h-12 text-base'
                    disabled={submitStatus === 'loading'}
                  />
                </div>

                <div className='space-y-1.5 sm:space-y-2'>
                  <label
                    htmlFor='whatsapp'
                    className='text-[#e5e5e5] text-sm sm:text-base flex items-center gap-2'>
                    <Phone className='w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#f0b85d]' />
                    WhatsApp
                  </label>
                  <Input
                    id='whatsapp'
                    type='tel'
                    placeholder='Digite seu WhatsApp'
                    value={formData.whatsapp}
                    onChange={(e) => handleChange('whatsapp', e.target.value)}
                    maxLength={15}
                    className='bg-black/50 border-[#727272]/30 text-white placeholder:text-[#727272] focus:border-[#f0b85d] focus:ring-[#f0b85d]/20 transition-all h-11 sm:h-12 text-base'
                    disabled={submitStatus === 'loading'}
                  />
                </div>

                <div className='pt-2 sm:pt-3 md:pt-4 space-y-3'>
                  <Button
                    type='submit'
                    disabled={submitStatus === 'loading'}
                    className={`w-full transition-all duration-300 h-12 sm:h-13 md:h-14 text-sm sm:text-base group relative overflow-hidden disabled:cursor-not-allowed ${
                      submitStatus === 'success'
                        ? 'bg-gradient-to-r from-green-500/90 to-green-600/90 text-white'
                        : submitStatus === 'error' ||
                          submitStatus === 'validation-error'
                        ? 'bg-gradient-to-r from-[#f0b85d] to-[#d4a046] text-black opacity-70'
                        : 'bg-gradient-to-r from-[#f0b85d] to-[#d4a046] text-black hover:shadow-[0_0_30px_rgba(240,184,93,0.5)]'
                    }`}>
                    <AnimatePresence mode='wait'>
                      {submitStatus === 'loading' ? (
                        <motion.span
                          key='loading'
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className='flex items-center justify-center gap-2'>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: 'linear',
                            }}
                            className='w-4 h-4 sm:w-5 sm:h-5 border-2 border-black/30 border-t-black rounded-full'
                          />
                          <span className='hidden sm:inline'>
                            Processando...
                          </span>
                          <span className='sm:hidden'>Enviando...</span>
                        </motion.span>
                      ) : submitStatus === 'success' ? (
                        <motion.span
                          key='success'
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className='flex items-center justify-center gap-2'>
                          <CheckCircle2 className='w-4 h-4 sm:w-5 sm:h-5' />
                          <span>Enviado!</span>
                        </motion.span>
                      ) : submitStatus === 'error' ||
                        submitStatus === 'validation-error' ? (
                        <motion.span
                          key='error'
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className='flex items-center justify-center gap-2'>
                          <span className='hidden sm:inline'>
                            Quero receber ofertas exclusivas
                          </span>
                          <span className='sm:hidden'>Receber ofertas</span>
                          <CheckCircle2 className='w-4 h-4 sm:w-5 sm:h-5' />
                        </motion.span>
                      ) : (
                        <motion.span
                          key='idle'
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className='flex items-center justify-center gap-2'>
                          <span className='hidden sm:inline'>
                            Quero receber ofertas exclusivas
                          </span>
                          <span className='sm:hidden'>Receber ofertas</span>
                          <CheckCircle2 className='w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform' />
                        </motion.span>
                      )}
                    </AnimatePresence>

                    {submitStatus === 'idle' && (
                      <motion.div
                        className='hidden sm:block absolute inset-0 bg-white/20'
                        initial={{ x: '-100%', skewX: -15 }}
                        whileHover={{ x: '200%' }}
                        transition={{ duration: 0.6 }}
                      />
                    )}
                  </Button>

                  <AnimatePresence>
                    {feedbackMessage && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.2 }}
                        className={`text-center text-xs sm:text-sm ${
                          submitStatus === 'success'
                            ? 'text-green-400'
                            : 'text-red-400'
                        }`}>
                        {feedbackMessage}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className='text-[#727272] text-xs sm:text-sm text-center flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap'>
                  <span className='flex items-center gap-1.5 sm:gap-2'>
                    <Shield className='w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#f0b85d] flex-shrink-0' />
                    Seus dados estão protegidos.
                  </span>
                  <span>Sem spam, apenas conteúdo relevante.</span>
                </motion.p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
