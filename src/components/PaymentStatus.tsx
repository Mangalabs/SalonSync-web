import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { PaymentSuccess } from './PaymentSuccess';
import { PaymentError } from './PaymentError';

export const PaymentStatus = () => {
  const location = useLocation();
  const [status, setStatus] = useState<'success' | 'error' | null>(null);
 const [, setShowDemoButtons] = useState(false);

  const getPaymentStatus = (): 'success' | 'error' => {
    const params = new URLSearchParams(location.search);
    const successParam = params.get('success');
    const statusParam = params.get('status');
    const paymentStatus = params.get('payment_status');

    if (successParam === 'true') return 'success';
    if (successParam === 'false') return 'error';

    if (
      statusParam === 'success' ||
      paymentStatus === 'success' ||
      statusParam === 'approved'
    ) {
      return 'success';
    }

    if (
      statusParam === 'error' ||
      statusParam === 'failed' ||
      statusParam === 'cancelled' ||
      paymentStatus === 'failed'
    ) {
      return 'error';
    }

    return 'error';
  };

  useEffect(() => {
    setStatus(getPaymentStatus());
    if (import.meta.env.MODE === "development") {
      setShowDemoButtons(true);
    }
  }, [location.search]);

  return (
    <div className="min-h-screen flex flex-col justify-between p-4 gradient-bg">
      <div className="flex flex-1 items-center justify-center">
        <div className="max-w-md w-full">
          {status === 'success' ? (
            <PaymentSuccess />
          ) : status === 'error' ? (
            <PaymentError />
          ) : (
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
              <p className="text-white">Verificando status do pagamento...</p>
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-gray-800 mt-12 pt-4 text-center text-gray-800 font-semibold">
        <p>
          © 2025 MangaLab. Todos os direitos reservados. |
          <span className="ml-2">
            Desenvolvido com
            <img
              src="/icon-copyright.png"
              alt="amor"
              className="h-4 w-4 inline m-1"
              aria-hidden="true"
            />
            pela equipe{' '}
            <a
              className="text-yellow-400 hover:text-yellow-500 transition-colors"
              href="https://www.mangalab.io"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visite o site da MangaLab"
            >
              <b>MangaLab</b>
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};
