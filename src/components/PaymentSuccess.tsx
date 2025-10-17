import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react'

export const PaymentSuccess = () => {
  const location = useLocation()
  const [companyName, setCompanyName] = useState<string | null>(null)
  const shareButtonRef = useRef<HTMLButtonElement | null>(null)

  const getCompanyName = (): string | null => {
    const params = new URLSearchParams(location.search)
    const nameFromUrl = params.get('company_name')
    return nameFromUrl || null
  }

  useEffect(() => {
    setCompanyName(getCompanyName())
  }, [location.search])

  const handleShare = async () => {
    const shareData = {
      title: 'Pagamento Realizado',
      text: `Acabei de me tornar membro do programa de fidelidade da ${companyName}! Agora faço parte da família e posso desfrutar dos benefícios.`,
      url: window.location.href,
    }

    try {
      if (
        navigator.share &&
        navigator.canShare &&
        navigator.canShare(shareData)
      ) {
        await navigator.share(shareData)
      } else {
        const textToShare = `${shareData.title}\n\n${shareData.text}\n\n${shareData.url}`
        await navigator.clipboard.writeText(textToShare)

        if (shareButtonRef.current) {
          const originalText = shareButtonRef.current.innerHTML
          shareButtonRef.current.innerHTML = 'Copiado!'
          shareButtonRef.current.classList.add('bg-green-600')
          setTimeout(() => {
            if (shareButtonRef.current) {
              shareButtonRef.current.innerHTML = originalText
              shareButtonRef.current.classList.remove('bg-green-600')
            }
          }, 2000)
        }
      }
    } catch (err) {
      console.error('Erro ao compartilhar:', err)
    }
  }

  return (
    <div className='glass-card rounded-3xl shadow-2xl p-8 text-center fade-in-up card-hover'>
      <div>
        <div className='w-24 h-24 success-gradient rounded-full flex items-center justify-center mx-auto float-animation glow-success'>
          <Sparkles className='w-12 h-12 text-gray-600' />
        </div>
      </div>

      <h1 className='text-2xl font-bold bg-gradient-to-r from-[#f0b85d] to-[#d4a046] bg-clip-text text-transparent mb-4 flex items-center justify-center gap-2'>
        <Sparkles className='text-yellow-300' />
        Pagamento Confirmado!
      </h1>

      <p className='text-xl md:text-2xl text-gray-800 font-semibold'>
        Olá! Seja bem-vindo(a)
        {companyName && (
          <>
            {' '}
            à <span className='font-bold text-green-600'>{companyName}</span>
          </>
        )}
        !
      </p>

      <p className='text-xl md:text-2xl text-gray-800 font-semibold mb-3'>
        Agora você pode aproveitar todos os benefícios do seu plano!
      </p>

      <p className='text-sm text-gray-500 mb-8'>
        Sua assinatura está ativa e estamos muito felizes em tê-lo(a) conosco!
      </p>

      <div className='bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 mb-6 border border-green-100 text-center'>
        <h3 className='font-bold text-gray-800 text-lg mb-3 flex items-center justify-center gap-2'>
          <Sparkles />
          Plano Ativado com Sucesso!
        </h3>
        <p className='text-gray-600 text-sm'>
          Parabéns! Você agora faz parte da nossa comunidade e pode aproveitar
          todos os benefícios exclusivos que preparamos para você.
        </p>
      </div>

      <div className='mb-6'>
        <button
          ref={shareButtonRef}
          onClick={handleShare}
          className='share-button w-full bg-gradient-to-r from-[#f0b85d] to-[#d4a046] hover:from-yellow-600 hover:to-yellow-700 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2 cursor-pointer'>
          <ArrowRight />
          Compartilhar
        </button>
      </div>
    </div>
  )
}
