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
  const sharedBenefits = [
    'Agenda organizada e sem confusão',
    'Controle financeiro claro e preciso',
    'Estoque sempre disponível',
    'Suporte rápido e eficiente',
    'Insights para aumentar ganhos',
    'Profissionais ilimitados sem custo extra',
    'Relatórios que mostram oportunidades',
    'Gerencie tudo de qualquer lugar',
  ]

  const advancedExtra = ['Programa de Fidelidade e Assinaturas incluso']

  const handleSubscribe = () => setIsDialogOpen(true)

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
            animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.3, 0.1] }}
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
                    <span className='text-5xl text-black'>R$ 119,90</span>
                    <span className='text-xl text-[#727272]'>/mês</span>
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
                    <span className='text-sm text-[#666060]'>
                      Profissionais ilimitados inclusos
                    </span>
                  </motion.div>
                </div>

                <div className='space-y-3 mb-8'>
                  {sharedBenefits.map((benefit, index) => (
                    <div
                      key={index}
                      className='flex items-start gap-3 text-black/90'>
                      <div
                        className='w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-1'
                        style={{
                          background:
                            'linear-gradient(135deg, #f0b85d 0%, #d99e4a 100%)',
                        }}>
                        <Check size={12} className='text-black' />
                      </div>
                      <span className='text-sm'>{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className='text-center'>
                  <Button
                    size='lg'
                    className='w-full px-8 py-6 relative overflow-hidden group cursor-pointer'
                    style={{
                      background:
                        'linear-gradient(135deg, #000000 0%, #666060 100%)',
                      border: 'none',
                    }}
                    onClick={handleSubscribe}>
                    <span className='relative z-10 flex items-center justify-center gap-2 text-white'>
                      <TrendingUp size={20} />
                      Assinar Plano
                    </span>
                  </Button>
                </div>

                <p className='text-center mt-4 text-sm text-[#666060]'>
                  Cada dia sem organização é lucro perdido
                </p>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -8 }}>
            <Card className='relative overflow-hidden bg-white border-none shadow-2xl h-full'>
              <div className='relative p-8'>
                <motion.div
                  className='flex justify-center mb-4'
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}>
                  <Badge
                    className='px-5 py-2 border-none'
                    style={{
                      background:
                        'linear-gradient(135deg, #000000 0%, #333333 100%)',
                    }}>
                    <Crown size={16} className='mr-2 text-white' />
                    <span className='text-white'>Avançado</span>
                  </Badge>
                </motion.div>

                <div className='text-center mb-6'>
                  <p className='text-sm mb-2 text-black/70'>
                    Fidelização máxima com assinaturas automáticas
                  </p>
                  <div className='flex items-baseline justify-center gap-2 mb-3'>
                    <span className='text-5xl text-black'>R$ 159,90</span>
                    <span className='text-xl text-[#727272]'>/mês</span>
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
                    <span className='text-sm text-[#666060]'>
                      Profissionais ilimitados inclusos
                    </span>
                  </motion.div>
                </div>

                <div className='space-y-3 mb-8'>
                  {[...sharedBenefits, ...advancedExtra].map((benefit, i) => (
                    <div
                      key={i}
                      className={`flex items-start gap-3 ${
                        benefit ===
                        'Programa de Fidelidade e Assinaturas incluso'
                          ? 'font-bold text-black'
                          : 'text-black/90'
                      }`}>
                      <div
                        className='w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.20'
                        style={{
                          background:
                            benefit ===
                            'Programa de Fidelidade e Assinaturas incluso'
                              ? 'linear-gradient(135deg, #000000 0%, #333333 100%)'
                              : 'linear-gradient(135deg, #f0b85d 0%, #d99e4a 100%)',
                        }}>
                        <Check
                          size={12}
                          className={
                            benefit ===
                            'Programa de Fidelidade e Assinaturas incluso'
                              ? 'text-white'
                              : 'text-black'
                          }
                        />
                      </div>
                      <span className='text-sm'>{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className='text-center'>
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
                  </Button>
                </div>

                <motion.p className='text-center mt-4 text-sm text-[#000000]'>
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
            <DialogTitle className='flex items-center gap-2 text-2xl'>
              <Sparkles className='text-[#f0b85d]' size={28} />
              Quase lá! Vamos criar sua conta
            </DialogTitle>
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
