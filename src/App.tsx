import { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom'

import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { FinancialControl } from './components/FinancialControl'
import { SystemTools } from './components/SystemTools'
import { SalesGrowth } from './components/SalesGrowth'
import { PricingSection } from './components/PricingSection'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'
import { LoadingBar } from './components/LoadingBar'
import { PaymentStatus } from './components/PaymentStatus'


function AppWrapper() {
  const location = useLocation()
  const [isPaymentPage, setIsPaymentPage] = useState(false)

  useEffect(() => {
    setIsPaymentPage(location.pathname === '/fallback')
  }, [location])

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'

    if (!isPaymentPage) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              ;(entry.target as HTMLElement).style.animationDelay = '0.2s'
              entry.target.classList.add('fade-in')
            }
          })
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      )

      document
        .querySelectorAll('.fade-in')
        .forEach((el) => observer.observe(el))

      return () => {
        document.documentElement.style.scrollBehavior = 'auto'
        observer.disconnect()
      }
    }
  }, [isPaymentPage])

  return (
    <div
      className='min-h-screen relative overflow-x-hidden'
      role='document'
      aria-label='Página do SalonSync - Sistema de Gestão para Salões'>
      <LoadingBar />

      {!isPaymentPage && <Header />}

      <main>
        {isPaymentPage ? (
          <PaymentStatus />
        ) : (
          <>
            <HeroSection />
            <FinancialControl />
            <SystemTools />
            <SalesGrowth />
            <PricingSection />
            <FinalCTA />
          </>
        )}
      </main>

      {!isPaymentPage && <Footer />}
    </div>
  )
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/*' element={<AppWrapper />} />
      </Routes>
    </Router>
  )
}
