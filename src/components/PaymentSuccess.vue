<template>
  <div class="glass-card rounded-3xl shadow-2xl p-8 text-center fade-in-up card-hover">
    <div class="mb-8">
      <div class="w-24 h-24 success-gradient rounded-full flex items-center justify-center mx-auto float-animation glow-success">
        <FontAwesomeIcon :icon="['fas', 'check']" class="w-22 h-22 text-white" />
      </div>
    </div>

    <h1 class="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
      <FontAwesomeIcon :icon="['fas', 'star']" class="text-yellow-300"/>
      Pagamento Confirmado!
    </h1>

    <p class="text-xl md:text-2xl text-gray-800 font-semibold">
      Olá! Seja bem-vindo(a)<span v-if="companyName"> à <span class="font-bold text-green-600">{{ companyName }}</span></span>!
    </p>

    <p class="text-xl md:text-2xl text-gray-800 font-semibold mb-3">
      Agora você pode aproveitar todos os benefícios do seu plano!
    </p>

    <p class="text-sm text-gray-500 mb-8">
      Sua assinatura está ativa e estamos muito felizes em tê-lo(a) conosco!
    </p>

    <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 mb-6 border border-green-100 text-center">
      <h3 class="font-bold text-gray-800 text-lg mb-3 flex items-center justify-center gap-2">
        <FontAwesomeIcon :icon="['fas', 'star']" />
        Plano Ativado com Sucesso!
      </h3>
      <p class="text-gray-600 text-sm">
        Parabéns! Você agora faz parte da nossa comunidade e pode aproveitar todos os benefícios exclusivos que preparamos para você.
      </p>
    </div>

    <div class="mb-6">
      <button
        @click="handleShare"
        ref="shareButton"
        class="share-button w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2">
        <FontAwesomeIcon :icon="['fas', 'share']" />
        Compartilhar
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCheck, faShare, faScissors, faStar } from "@fortawesome/free-solid-svg-icons";

library.add(faCheck, faShare, faScissors, faStar);

const shareButton = ref<HTMLButtonElement | null>(null)
const companyName = ref<string | null>(null)

const getCompanyName = () => {
  const urlParams = new URLSearchParams(window.location.search)
  const nameFromUrl = urlParams.get('company_name')
  return nameFromUrl || null
}

onMounted(() => {
  companyName.value = getCompanyName()
})

const handleShare = async () => {
  const shareData = {
    title: 'Pagamento Realizado',
    text: `Acabei de me tornar membro do programa de fidelidade da ${companyName.value}! Agora faço parte da família e posso desfrutar dos benefícios.`,
    url: window.location.href,
  }

  try {
    if (navigator.share && navigator.canShare(shareData)) {
      await navigator.share(shareData)
    } else {
      const textToShare = `${shareData.title}\n\n${shareData.text}\n\n${shareData.url}`
      await navigator.clipboard.writeText(textToShare)

      if (shareButton.value) {
        const originalText = shareButton.value.innerHTML
        shareButton.value.innerHTML = 'Copiado!'
        shareButton.value.classList.add('bg-green-600')
        setTimeout(() => {
          shareButton.value.innerHTML = originalText
          shareButton.value.classList.remove('bg-green-600')
        }, 2000)
      }
    }
  } catch (err) {
    console.error('Erro ao compartilhar:', err)
  }
}
</script>
