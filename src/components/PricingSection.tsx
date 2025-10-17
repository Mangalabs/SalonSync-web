import { motion } from 'framer-motion'
import {
  Check,
  Sparkles,
  Zap,
  Crown,
  TrendingUp,
  Loader2,
  ExternalLink,
} from 'lucide-react'
import { Button } from './ui/button'
import { Card } from './ui/card'
import { Badge } from './ui/badge'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './ui/dialog'
import { useState } from 'react'

export function PricingSection() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isRedirecting, setIsRedirecting] = useState(false)
  const essentialBenefits = [
    'Agenda organizada e sem confusão',
    'Controle financeiro claro e preciso',
    'Estoque sempre disponível',
    'Suporte rápido e eficiente',
    'Insights para aumentar ganhos',
    'Profissionais ilimitados sem custo extra',
    'Relatórios que mostram oportunidades',
    'Gerencie tudo de qualquer lugar',
  ]

  const advancedBenefits = [
    'Agenda organizada e sem confusão',
    'Controle financeiro claro e preciso',
    'Estoque sempre disponível',
    'Suporte rápido e eficiente',
    'Insights para aumentar ganhos',
    'Profissionais ilimitados sem custo extra',
    'Relatórios que revelam oportunidades',
    'App mobile para gerenciar de qualquer lugar',
    'Sistema de Assinaturas que garante receita mensal',
  ]

  const handleSubscribe = () => {
    setIsDialogOpen(true)
  }

  const handleCreateAccount = () => {
    setIsRedirecting(true)
    setTimeout(() => {
      window.open('https://salondash.mangalab.io/register', '_blank')
    }, 500)
    setIsRedirecting(false)
    setIsDialogOpen(false)
  }

  return (
    <section
      id='planos'
      className='relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#f0b85d] to-[#d99e4a] py-20'>
      <div className='absolute inset-0 opacity-10'>
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute w-32 h-32 border border-black/20 rounded-full'
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-8'>
          <h2 className='text-black mb-4 text-3xl md:text-4xl font-bold'>
            Plano único, simplicidade para sua gestão
          </h2>
          <p className='text-lg max-w-2xl mx-auto text-black/80'>
            Tudo que você precisa para revolucionar seu negócio em um único
            plano completo
          </p>
        </motion.div>

        <div className='grid md:grid-cols-2 gap-8 max-w-6xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -8 }}>
            <Card className='relative overflow-hidden bg-white border-none shadow-2xl h-full'>
              <motion.div
                className='absolute inset-0 bg-gradient-to-br from-[#f0b85d]/20 to-transparent opacity-50'
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                }}
                transition={{ duration: 10, repeat: Infinity }}
              />

              <div className='relative p-8'>
                <motion.div
                  className='flex justify-center mb-4'
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}>
                  <Badge
                    className='px-5 py-2 border-none'
                    style={{
                      background:
                        'linear-gradient(135deg, #f0b85d 0%, #d99e4a 100%)',
                    }}>
                    <Sparkles size={16} className='mr-2 text-black' />
                    <span className='text-black'>Essencial</span>
                  </Badge>
                </motion.div>

                <div className='text-center mb-6'>
                  <p className='text-sm mb-2 text-black/70'>
                    Controle completo do seu salão
                  </p>
                  <div className='flex items-baseline justify-center gap-2 mb-3'>
                    <span className='text-5xl text-black'>R$ 99,90</span>
                    <span className='text-xl' style={{ color: '#727272' }}>
                      /mês
                    </span>
                  </div>

                  <motion.div
                    className='inline-flex items-center gap-2 px-4 py-2 rounded-full'
                    style={{ background: '#f0b85d20' }}
                    animate={{
                      boxShadow: [
                        '0 0 0 0 rgba(240, 184, 93, 0)',
                        '0 0 0 10px rgba(240, 184, 93, 0.1)',
                        '0 0 0 0 rgba(240, 184, 93, 0)',
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}>
                    <Zap size={16} style={{ color: '#f0b85d' }} />
                    <span className='text-sm' style={{ color: '#666060' }}>
                      Profissionais ilimitados inclusos
                    </span>
                  </motion.div>
                </div>

                <div className='space-y-3 mb-8'>
                  {essentialBenefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className='flex items-start gap-3'>
                      <motion.div
                        className='w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5'
                        style={{
                          background:
                            'linear-gradient(135deg, #f0b85d 0%, #d99e4a 100%)',
                        }}
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.4 }}>
                        <Check size={12} className='text-black' />
                      </motion.div>
                      <span className='text-sm text-black/90'>{benefit}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className='text-center'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}>
                  <Button
                    size='lg'
                    className='w-full px-8 py-6 relative overflow-hidden group cursor-pointer'
                    style={{
                      background:
                        'linear-gradient(135deg, #000000 0%, #666060 100%)',
                      border: 'none',
                    }}
                    onClick={handleSubscribe}>
                    <motion.span
                      className='relative z-10 flex items-center justify-center gap-2 text-white'
                      animate={{
                        textShadow: [
                          '0 0 0px rgba(240,184,93,0)',
                          '0 0 10px rgba(240,184,93,0.5)',
                          '0 0 0px rgba(240,184,93,0)',
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}>
                      <TrendingUp size={20} />
                      Assinar Plano
                    </motion.span>

                    <motion.div
                      className='absolute inset-0'
                      style={{ background: '#f0b85d' }}
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                  </Button>
                </motion.div>

                <motion.p
                  className='text-center mt-4 text-sm'
                  style={{ color: '#666060' }}
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}>
                  Cada dia sem organização é lucro perdido
                </motion.p>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -8 }}>
            <Card className='relative overflow-hidden bg-white border-4 border-black shadow-2xl h-full'>
              <div className='absolute top-4 right-4 z-20'>
                <Badge
                  className='px-3 py-1.5 text-xs border-none shadow-xl'
                  style={{
                    background:
                      'linear-gradient(135deg, #000000 0%, #333333 100%)',
                  }}>
                  <Crown size={14} className='mr-1' />
                  <span className='text-white'>Receita Garantida Todo Mês</span>
                </Badge>
              </div>

              <motion.div
                className='absolute inset-0 bg-gradient-to-br from-[#f0b85d]/30 to-transparent opacity-60'
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                }}
                transition={{ duration: 10, repeat: Infinity }}
              />

              <div className='relative p-8'>
                <motion.div
                  className='flex justify-center mb-4'
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}>
                  <Badge
                    className='px-5 py-2 border-none shadow-lg'
                    style={{
                      background:
                        'linear-gradient(135deg, #000000 0%, #333333 100%)',
                    }}>
                    <Crown size={16} className='mr-2 text-white' />
                    <span className='text-white'>Avançado</span>
                  </Badge>
                </motion.div>

                <div className='text-center mb-6'>
                  <p className='text-sm mb-2 text-black'>
                    Fidelização máxima com assinaturas automáticas
                  </p>
                  <div className='flex items-baseline justify-center gap-2 mb-3'>
                    <span className='text-5xl text-black'>R$ 159,90</span>
                    <span className='text-xl' style={{ color: '#727272' }}>
                      /mês
                    </span>
                  </div>

                  <motion.div
                    className='inline-flex items-center gap-2 px-4 py-2 rounded-full'
                    style={{ background: 'rgba(0,0,0,0.1)' }}
                    animate={{
                      boxShadow: [
                        '0 0 0 0 rgba(0, 0, 0, 0)',
                        '0 0 0 10px rgba(0, 0, 0, 0.05)',
                        '0 0 0 0 rgba(0, 0, 0, 0)',
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}>
                    <Crown size={16} className='text-black' />
                    <span className='text-sm text-black'>
                      Transforme clientes em assinantes fiéis
                    </span>
                  </motion.div>
                </div>

                <div className='space-y-3 mb-8'>
                  {advancedBenefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className='flex items-start gap-3'>
                      <motion.div
                        className='w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5'
                        style={{
                          background:
                            benefit ===
                            'Sistema de Assinaturas que garante receita todo mês'
                              ? 'linear-gradient(135deg, #000000 0%, #333333 100%)'
                              : 'linear-gradient(135deg, #f0b85d 0%, #d99e4a 100%)',
                        }}
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.4 }}>
                        <Check
                          size={12}
                          className={
                            benefit ===
                            'Sistema de Assinaturas que garante receita todo mês'
                              ? 'text-white'
                              : 'text-black'
                          }
                        />
                      </motion.div>
                      <span
                        className={`text-sm ${
                          benefit ===
                          'Sistema de Assinaturas que garante receita mensal'
                            ? 'text-black font-bold'
                            : 'text-black/90 font-medium'
                        }`}>
                        {benefit}
                      </span>
                      {benefit ===
                        'Sistema de Assinaturas que garante receita mensal' && (
                        <Badge
                          className='ml-auto px-2 py-0.5 text-xs border-none shadow-md'
                          style={{
                            background:
                              'linear-gradient(135deg, #f0b85d 0%, #d99e4a 100%)',
                          }}>
                          <span className='text-black font-bold'>
                            EXCLUSIVO
                          </span>
                        </Badge>
                      )}
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className='text-center'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}>
                  <Button
                    size='lg'
                    className='w-full px-8 py-6 relative overflow-hidden group cursor-pointer'
                    style={{
                      background:
                        'linear-gradient(135deg, #f0b85d 0%, #d99e4a 100%)',
                      border: 'none',
                    }}
                    onClick={handleSubscribe}>
                    <motion.span
                      className='relative z-10 flex items-center justify-center gap-2 text-white'
                      animate={{
                        textShadow: [
                          '0 0 0px rgba(0,0,0,0)',
                          '0 0 10px rgba(0,0,0,0.3)',
                          '0 0 0px rgba(0,0,0,0)',
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}>
                      <Crown size={20} />
                      Assinar Plano
                    </motion.span>

                    <motion.div
                      className='absolute inset-0'
                      style={{ background: '#000000' }}
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                  </Button>
                </motion.div>

                <motion.p
                  className='text-center mt-4 text-sm'
                  style={{ color: '#000000' }}
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity }}>
                  Seus concorrentes já têm clientes assinantes. E você?
                </motion.p>
              </div>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='text-center mt-4'>
          <p className='text-black/90 text-lg mb-2'>
            Chega de perder tempo com sistemas lentos e confusos!
          </p>
          <p className='text-black'>
            Cada dia sem SalonSync é dinheiro que deixa de entrar e clientes que
            vão para a concorrência. Garanta já a vantagem para o seu salão!
          </p>
        </motion.div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className='sm:max-w-md bg-white border-2 border-black/10'>
          <DialogHeader>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}>
              <DialogTitle className='flex items-center gap-2 text-2xl'>
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.5, repeat: 3 }}>
                  <Sparkles className='text-[#f0b85d]' size={28} />
                </motion.div>
                Quase lá! Vamos criar sua conta
              </DialogTitle>
            </motion.div>
            <DialogDescription className='text-base pt-4 text-black/80'>
              Para assinar este plano, você precisa criar sua conta gratuita no
              Dashboard. Depois de cadastrado, você encontrará o plano
              selecionado pronto para assinar e finalizar a assinatura de forma
              rápida e segura.
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className='flex-col sm:flex-row gap-3 pt-4'>
            <Button
              variant='outline'
              onClick={() => setIsDialogOpen(false)}
              className='w-full sm:w-auto border-2 border-black/20 hover:bg-black/5 cursor-pointer'
              disabled={isRedirecting}>
              Cancelar
            </Button>
            <Button
              onClick={handleCreateAccount}
              disabled={isRedirecting}
              className='w-full sm:w-auto relative overflow-hidden cursor-pointer'
              style={{
                background: isRedirecting
                  ? '#cccccc'
                  : 'linear-gradient(135deg, #f0b85d 0%, #d99e4a 100%)',
                border: 'none',
              }}>
              {isRedirecting ? (
                <span className='flex items-center justify-center gap-2 text-black'>
                  <Loader2 className='animate-spin' size={18} />
                  Redirecionando...
                </span>
              ) : (
                <span className='flex items-center justify-center gap-2 text-black'>
                  <ExternalLink size={18} />
                  Criar minha conta
                </span>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  )
}
