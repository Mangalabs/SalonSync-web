<script setup>
import { email, phone, address, socialLinks } from "../data/contactData.js";
</script>

<template>
  <footer id="contact" class="bg-gray-900 text-white py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-4 gap-8">
        <div>
          <img src="/iconSalonSync.png" class="w-58" alt="" />
          <p class="text-gray-400 mb-4">
            A solução completa para gestão de salões de beleza e barbearias.
          </p>
        </div>
        <div>
          <h4 class="text-lg font-semibold mb-4">Produto</h4>
          <ul class="space-y-2">
            <li>
              <a
                href="#features"
                class="text-gray-400 hover:text-white transition-colors"
                >Funcionalidades</a
              >
            </li>
            <li>
              <a
                href="#pricing"
                class="text-gray-400 hover:text-white transition-colors"
                >Planos</a
              >
            </li>
          </ul>
        </div>
        <div>
          <h4 class="text-lg font-semibold mb-4">Suporte</h4>
          <ul class="space-y-2">
            <li>
              <a
                href="#"
                class="text-gray-400 hover:text-white transition-colors"
                >Central de Ajuda</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-gray-400 hover:text-white transition-colors"
                >Tutoriais</a
              >
            </li>
          </ul>
        </div>
        <div>
          <h4 class="text-lg font-semibold mb-4">Contato</h4>
          <ul class="space-y-2 text-gray-400">
            <li><i class="fas fa-envelope mr-2"></i>{{ email }}</li>
            <li><i class="fas fa-phone mr-2"></i>{{ phone }}</li>
            <li><i class="fas fa-map-marker-alt mr-2"></i>{{ address }}</li>
            <div class="flex space-x-4 mb-4 mt-3">
              <a
                :href="socialLinks.facebook"
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-400 hover:text-yellow-400 transition-colors"
                ><i class="fab fa-facebook-f text-xl"></i
              ></a>
              <a
                :href="socialLinks.instagram"
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-400 hover:text-yellow-400 transition-colors"
                ><i class="fab fa-instagram text-xl"></i
              ></a>
              <a
                :href="socialLinks.linkedin"
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-400 hover:text-yellow-400 transition-colors"
                ><i class="fab fa-linkedin-in text-xl"></i
              ></a>
            </div>
          </ul>
        </div>
      </div>
      <div
        class="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
      >
        <p className="text-gray-300">
          © 2025 MangaLab. Todos os direitos reservados. |
          <span className="ml-2">
            Desenvolvido com
            <img
              src="/icon-copyright.png"
              alt="amor"
              className="h-4 w-4 inline m-1"
            />
            pela equipe <b>MangaLab</b>
          </span>
        </p>
      </div>
    </div>
  </footer>
</template>
