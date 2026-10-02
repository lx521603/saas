<script setup lang="ts">
// Vue 3 的 <script setup> 语法
</script>

<template>
  <section 
    class="flex flex-col items-center justify-center text-center py-16 px-6 bg-gradient-to-b from-[#fff8f8] to-[#ffeef4] rounded-3xl shadow-lg animate-fade-in-up"
  >
    <h1 class="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-rose-400 to-amber-300 mb-6 drop-shadow-md">
      ✨ Dopi 山茶籽水润清透卸妆油 ✨
    </h1>

    <img
      src="/img/products-03.jpg"
      alt="Dopi 山茶籽水润清透卸妆油"
      width="500"
      class="rounded-2xl shadow-2xl mb-8 hover:scale-105 transition-transform duration-500 ease-out"
    />

    <p class="text-xl text-gray-700 max-w-2xl leading-relaxed mb-8">
      敏感肌可用，轻松卸掉彩妆和防晒，温和不刺激，清爽水润。
    </p>

    <p class="text-lg text-gray-500 italic">
      🌟 卸妆也能像做SPA，轻轻按摩，压力和彩妆都消失了。<br />
      🌟 就算熬夜化妆，它也不抱怨，温柔把一天的疲惫洗掉。
    </p>
  </section>
</template>

<style scoped>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}
</style>