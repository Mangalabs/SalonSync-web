<template>
  <div class="max-w-md w-full">
    <PaymentSuccess v-if="status === 'success'" />
    <PaymentError v-else-if="status === 'error'" />
    
    <div v-else class="text-center">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
      <p class="text-white">Verificando status do pagamento...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import PaymentSuccess from './PaymentSuccess.vue'
import PaymentError from './PaymentError.vue'

const status = ref<'success' | 'error' | null>(null)
const showDemoButtons = ref(false)
const getPaymentStatus = (): 'success' | 'error' => {
  const urlParams = new URLSearchParams(window.location.search)
  
  const successParam = urlParams.get('success')
  
  const statusParam = urlParams.get('status')
  const paymentStatus = urlParams.get('payment_status')
  
  if (successParam === 'true') {
    return 'success'
  } else if (successParam === 'false') {
    return 'error'
  }
  
  if (statusParam === 'success' || paymentStatus === 'success' || statusParam === 'approved') {
    return 'success'
  } else if (statusParam === 'error' || statusParam === 'failed' || statusParam === 'cancelled' || paymentStatus === 'failed') {
    return 'error'
  }
  
  return 'error'
}

onMounted(() => {
  status.value = getPaymentStatus()
  
  if (import.meta.env?.MODE === 'development') {
    showDemoButtons.value = true
  }
})
</script>

<style>
@keyframes checkmark {
  0% {
    transform: scale(0) rotate(45deg);
    opacity: 0;
  }
  50% {
    transform: scale(1.3) rotate(45deg);
    opacity: 1;
  }
  100% {
    transform: scale(1) rotate(45deg);
    opacity: 1;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

@keyframes glow {
  0%,
  100% {
    box-shadow: 0 0 20px rgba(16, 185, 129, 0.3);
  }
  50% {
    box-shadow: 0 0 40px rgba(16, 185, 129, 0.6);
  }
}

@keyframes errorGlow {
  0%,
  100% {
    box-shadow: 0 0 20px rgba(239, 68, 68, 0.3);
  }
  50% {
    box-shadow: 0 0 40px rgba(239, 68, 68, 0.6);
  }
}

@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.checkmark {
  animation: checkmark 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.4s both;
}
.fade-in-up {
  animation: fadeInUp 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.float-animation {
  animation: float 3s ease-in-out infinite;
}
.glow-success {
  animation: glow 2s ease-in-out infinite;
}
.glow-error {
  animation: errorGlow 2s ease-in-out infinite;
}
.gradient-bg {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  background-size: 400% 400%;
  animation: gradientShift 8s ease infinite;
}
.glass-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
.success-gradient {
  background: linear-gradient(135deg, #00f260 0%, #0575e6 100%);
}
.error-gradient {
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
}
.shimmer-button {
  background: linear-gradient(90deg, #667eea 0%, #764ba2 50%, #667eea 100%);
  background-size: 200% 100%;
  animation: shimmer 2s infinite;
}
.card-hover {
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.card-hover:hover {
  transform: translateY(-5px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
}
</style>