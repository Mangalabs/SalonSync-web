<script setup>
import { email, phone, address, loginUrl } from "../data/contactData.js";

</script>

<template>
  <footer id="contact" class="bg-gray-900 text-white py-16" aria-label="Informações de contato e rodapé">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-4 gap-8">
        <div>
          <img src="/iconSalonSync.png" class="w-58" alt="Logo do SalonSync - Sistema de gestão para salões" />
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
                aria-label="Conheça as funcionalidades do SalonSync"
                >Funcionalidades</a
              >
            </li>
            <li>
              <a
                href="#pricing"
                class="text-gray-400 hover:text-white transition-colors"
                aria-label="Veja nossos planos e preços"
                >Planos</a
              >
            </li>
          </ul>
        </div>
        <div>
          <h4 class="text-lg font-semibold mb-4">Contato</h4>
          <ul class="space-y-2 text-gray-400">
            <li><i class="fas fa-envelope mr-2" aria-hidden="true"></i>{{ email }}</li>
            <li><i class="fas fa-phone mr-2" aria-hidden="true"></i>{{ phone }}</li>
            <li><i class="fas fa-map-marker-alt mr-2" aria-hidden="true"></i>{{ address }}</li>
          </ul>
        </div>
        <div>
          <h4 class="text-lg font-semibold mb-4">Area do cliente</h4>
          <a
            :href="loginUrl"
            target="_blank"
            class="btn-secondary inline-flex items-center px-5 py-2 rounded-full text-sm font-semibold transition-all"
            aria-label="Acessar o sistema SalonSync"
          >
            <i class="fas fa-sign-in-alt mr-2" aria-hidden="true"></i>Acessar Sistema
          </a>
        </div>
      </div>
      <div
        class="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
      >
        <p>
          © 2025 MangaLab. Todos os direitos reservados. |
          <span class="ml-2">
            Desenvolvido com
            <img
              src="/icon-copyright.png"
              alt="amor"
              class="h-4 w-4 inline m-1"
              aria-hidden="true"
            />
            pela equipe
            <a
              class="text-yellow-400 hover:text-yellow-500 transition-colors"
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
  </footer>
</template>

<style scoped>
.btn-secondary {
  background-color: var(--off-white);
  color: var(--brown-dark);
  border: 2px solid var(--brown-light);
  transition: all 0.3s ease;
  font-weight: 600;
}

.btn-secondary:hover {
  background-color: var(--beige-light);
  color: var(--brown-dark);
  border-color: var(--brown-dark);
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(144, 112, 58, 0.2);
}
</style>
