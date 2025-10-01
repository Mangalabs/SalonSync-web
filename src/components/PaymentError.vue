<template>
  <div
    class="glass-card rounded-3xl shadow-2xl p-8 text-center fade-in-up card-hover">
    <div class="mb-8">
      <div
        class="w-24 h-24 error-gradient rounded-full flex items-center justify-center mx-auto float-animation glow-error">
        <AlertTriangle class="w-12 h-12 text-white" stroke-width="3" />
      </div>
    </div>

    <h1
      class="text-3xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent mb-4">
      <FontAwesomeIcon :icon="faQuestionCircle" class="text-yellow-500 mr-2" />
      Ops! A transação não foi concluída.
    </h1>
    <p class="text-xl text-gray-700 font-medium mb-2">
      A ação não pôde ser finalizada
    </p>
    <p class="text-sm text-gray-500 mb-8">
      Não se preocupe, você pode tentar novamente
    </p>

    <div
      class="bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-100 rounded-2xl p-6 mb-6">
      <h3 class="font-bold text-yellow-800 mb-4 text-center">
        <FontAwesomeIcon :icon="faQuestionCircle" class="text-yellow-500" />
        Possíveis motivos
      </h3>
      <p class="text-sm text-yellow-700 mb-4 text-center">
        Alguns motivos comuns para não concluir a ação:
      </p>
      <div class="grid grid-cols-2 gap-10 justify-items-center">
        <div
          class="bg-white rounded-lg p-3 shadow-sm text-center flex flex-col items-center justify-center w-28 h-20">
          <FontAwesomeIcon
            :icon="faTimesCircle"
            class="text-red-500 text-2xl mb-1" />
          <span class="text-xs font-medium text-gray-700">Cancelamento</span>
        </div>

        <div
          class="bg-white rounded-lg p-3 shadow-sm text-center flex flex-col items-center justify-center w-28 h-20">
          <FontAwesomeIcon
            :icon="faCreditCard"
            class="text-orange-500 text-2xl mb-1" />
          <span class="text-xs font-medium text-gray-700">Informações incorretas</span>
        </div>

        <div
          class="bg-white rounded-lg p-3 shadow-sm text-center flex flex-col items-center justify-center w-28 h-20">
          <FontAwesomeIcon
            :icon="faMoneyBillWave"
            class="text-yellow-500 text-2xl mb-1" />
          <span class="text-xs font-medium text-gray-700">Limite insuficiente</span>
        </div>

        <div
          class="bg-white rounded-lg p-3 shadow-sm text-center flex flex-col items-center justify-center w-28 h-20">
          <FontAwesomeIcon :icon="faBolt" class="text-blue-500 text-2xl mb-1" />
          <span class="text-xs font-medium text-gray-700">Erro temporário</span>
        </div>
      </div>
    </div>

    <div class="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
      <p class="text-sm text-blue-800">
        <strong>Não se preocupe!</strong> Você pode tentar novamente quando desejar.
      </p>
      <p
        class="text-sm text-blue-800 mt-2 flex items-center justify-center gap-2">
        <FontAwesomeIcon :icon="faPhone" class="text-blue-600 mb-4" />
        Entre em contato com a filial ou suporte caso precise de ajuda.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { AlertTriangle } from 'lucide-vue-next'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faTimesCircle,
  faCreditCard,
  faMoneyBillWave,
  faBolt,
  faQuestionCircle,
  faPhone,
} from '@fortawesome/free-solid-svg-icons'
</script>
