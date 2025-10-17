import { ArrowRight, Sparkles, AlertTriangle, Phone } from 'lucide-react'

export const PaymentError = () => {
  return (
    <div className='glass-card rounded-3xl shadow-2xl p-6 text-center fade-in-up card-hover'>
      <div>
        <div className='w-24 h-24 error-gradient rounded-full flex items-center justify-center mx-auto float-animation glow-error'>
          <AlertTriangle className='w-12 h-12 text-gray-600' />
        </div>
      </div>

      <h1 className='text-2xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent mb-2 flex items-center justify-center gap-2'>
        <Sparkles className='text-yellow-500 w-6 h-6' />
        Ops! A transação não foi concluída.
      </h1>

      <p className='text-xl text-gray-700 font-medium mb-2'>
        A ação não pôde ser finalizada
      </p>
      <p className='text-sm text-gray-500 mb-4'>
        Não se preocupe, você pode tentar novamente
      </p>

      <div className='bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-100 rounded-2xl p-2 mb-2'>
        <h3 className='font-bold text-yellow-800 mb-2 text-center flex items-center justify-center gap-2'>
          <Sparkles className='text-yellow-500 w-5 h-5' />
          Possíveis motivos
        </h3>
        <p className='text-sm text-yellow-700 mb-2 text-center'>
          Alguns motivos comuns para não concluir a ação:
        </p>

        <div className='grid grid-cols-2 gap-6 justify-items-center'>
          <div className='bg-white rounded-lg p-2 shadow-sm text-center flex flex-col items-center justify-center w-28 h-20'>
            <ArrowRight className='text-red-500 w-6 h-6 mb-1' />
            <span className='text-xs font-medium text-gray-700'>
              Cancelamento
            </span>
          </div>

          <div className='bg-white rounded-lg p-2 shadow-sm text-center flex flex-col items-center justify-center w-28 h-20'>
            <ArrowRight className='text-orange-500 w-6 h-6 mb-1' />
            <span className='text-xs font-medium text-gray-700'>
              Informações incorretas
            </span>
          </div>

          <div className='bg-white rounded-lg p-2 shadow-sm text-center flex flex-col items-center justify-center w-28 h-20'>
            <ArrowRight className='text-yellow-500 w-6 h-6 mb-1' />
            <span className='text-xs font-medium text-gray-700'>
              Limite insuficiente
            </span>
          </div>

          <div className='bg-white rounded-lg p-2 shadow-sm text-center flex flex-col items-center justify-center w-28 h-20'>
            <ArrowRight className='text-blue-500 w-6 h-6 mb-1' />
            <span className='text-xs font-medium text-gray-700'>
              Erro temporário
            </span>
          </div>
        </div>
      </div>

      <div className='bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6'>
        <p className='text-sm text-blue-800'>
          <strong>Não se preocupe!</strong> Você pode tentar novamente quando
          desejar.
        </p>
        <p className='text-sm text-blue-800 mt-2 flex items-center justify-center gap-2'>
          <Phone className='text-blue-600 w-5 h-5' />
          Entre em contato com a filial caso precise de ajuda.
        </p>
      </div>
    </div>
  )
}
