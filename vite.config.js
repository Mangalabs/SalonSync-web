import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import ViteSitemap from "vite-plugin-sitemap";

const routes = ['/', '/#features', '/#pricing', '/#contact']

export default defineConfig({
  plugins: [
    vue(),
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