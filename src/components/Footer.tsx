import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

export function Footer() {
  const productLinks = [
    { label: 'Funcionalidades', href: '#funcionalidades' },
    { label: 'Planos', href: '#planos' },
    { label: 'Contato', href: '#contato' }
  ];

  const accessLinks = [
    { label: 'Acessar sistema', href: 'https://salondash.mangalab.io' }
  ];

  const contactInfo = [
    { icon: Mail, text: 'contato@mangalab.io', href: 'mailto:contato@mangalab.io' },
    { icon: Phone, text: '(85) 992961295', href: 'tel:+5585992961295' },
    { icon: MapPin, text: 'Eusébio - CE'}
  ];

  return (
    <footer
      id='contato'
      className='relative bg-black text-white overflow-hidden'>
      <div className='absolute inset-0 bg-gradient-to-b from-black to-[#666060]/20' />

      <div className='container mx-auto px-6 relative z-10'>
        <div className='py-16 grid md:grid-cols-4 gap-12'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='md:col-span-2'>
            <div className='flex items-center gap-2 mb-4'>
              <img
                src='/icon-salon.png'
                alt='Logo Salon'
                className='w-32 h-22'
              />
            </div>
            <p className='mb-6 max-w-md' style={{ color: '#e5e5e5' }}>
              A solução completa para gestão da sua empresa. Tecnologia moderna
              para modernizar seu negócio.
            </p>

            <div className='space-y-3'>
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className='flex items-center gap-3 group'
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}>
                  <div
                    className='w-10 h-10 rounded-full flex items-center justify-center'
                    style={{
                      background:
                        'linear-gradient(135deg, #f0b85d 0%, #d99e4a 100%)',
                    }}>
                    <item.icon size={18} className='text-black' />
                  </div>
                  <span
                    className='group-hover:text-[#f0b85d] transition-colors'
                    style={{ color: '#e5e5e5' }}>
                    {item.text}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}>
            <h4 className='mb-4' style={{ color: '#f0b85d' }}>
              Produto
            </h4>
            <ul className='space-y-2'>
              {productLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    className='hover:text-[#f0b85d] transition-colors inline-block'
                    style={{ color: '#e5e5e5' }}
                    whileHover={{ x: 5 }}>
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}>
            <h4 className='mb-4' style={{ color: '#f0b85d' }}>
              Acesso
            </h4>
            <ul className='space-y-2'>
              {accessLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    target='_blank'
                    className='hover:text-[#f0b85d] transition-colors inline-flex items-center gap-2 border rounded-md bg-amber-200/25 px-3 py-1'
                    style={{ color: '#e5e5e5' }}
                    whileHover={{ x: 5 }}>
                    {link.label}
                    <ExternalLink size={14} />
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='py-6 border-t border-white/10'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <p style={{ color: '#727272' }}>
              © 2025 MangaLab. Todos os direitos reservados.
            </p>
            <span className='ml-2'  style={{ color: '#727272' }}>
              Desenvolvido com
              <img
                src='/icon-copyright.png'
                alt='amor'
                className='h-4 w-4 inline m-1'
                aria-hidden='true'
              />
              pela equipe
              <a
                className='text-yellow-400 hover:text-yellow-500 transition-colors'
                href='https://www.mangalab.io'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Visite o site da MangaLab'>
                <b> MangaLab</b>
              </a>
            </span>
          </div>
        </motion.div>
      </div>

      <motion.div
        className='absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-5'
        style={{ background: '#f0b85d' }}
        animate={{
          scale: [1, 1.2, 1],
          x: [-50, 0, -50],
        }}
        transition={{ duration: 15, repeat: Infinity }}
      />

      <motion.div
        className='absolute top-0 right-0 w-64 h-64 rounded-full opacity-5'
        style={{ background: '#f0b85d' }}
        animate={{
          scale: [1, 1.3, 1],
          x: [50, 0, 50],
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />
    </footer>
  )
}
