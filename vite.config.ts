import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import ViteSitemap from "vite-plugin-sitemap";

const routes = ['/', '/#features', '/#pricing', '/#contact']

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    ViteSitemap({
      hostname: 'https://salonsync.mangalab.io',
      dynamicRoutes: routes,
      generateRobotsTxt: true,
      exclude: ['/admin', '/private'],
      robots: [
        {
          userAgent: '*',
          allow: '/',
          disallow: ['/admin', '/private'],
        }
      ],
    }),
  ],
})
