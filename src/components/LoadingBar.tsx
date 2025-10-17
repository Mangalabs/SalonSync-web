import { useEffect, useRef } from 'react'

export const LoadingBar = () => {
  const barRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const timer1 = setTimeout(() => {
      if (barRef.current) {
        barRef.current.style.opacity = '0'
        const timer2 = setTimeout(() => {
          barRef.current?.remove()
        }, 300)
        return () => clearTimeout(timer2)
      }
    }, 2000)

    return () => clearTimeout(timer1)
  }, [])

  return (
    <div
      ref={barRef}
      className='loading-bar fixed top-0 left-0 w-0 h-1 z-[9999]'
      style={{
        background:
          'linear-gradient(90deg, var(--yellow-strong), var(--yellow-light))',
      }}></div>
  )
}
