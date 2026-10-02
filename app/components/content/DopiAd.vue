<script setup lang="ts">
// Vue 3 的 <script setup> 语法，不需要写 'use client'
</script>

<template>
  <!-- 使用原生 section 标签，加上自定义的 CSS 动画类名 -->
  <section 
    class="flex flex-col items-center justify-center text-center py-16 px-6 bg-gradient-to-b from-[#fff8f8] to-[#ffeef4] rounded-3xl shadow-lg animate-fade-in-up"
  >
    <h1 class="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-rose-400 to-amber-300 mb-6 drop-shadow-md">
      ✨ Dopi 悦色防晒美白粉底液 ✨
    </h1>

    <!-- 移除 motion.img，直接使用原生 img。
         原代码的 whileHover 效果，直接用 Tailwind 的 hover:scale-105 就能完美实现 -->
    <img
      src="/img/social.jpg"
      alt="Dopi 悦色防晒美白粉底液"
      width="500"
      class="rounded-2xl shadow-2xl mb-8 hover:scale-105 transition-transform duration-500 ease-out"
    />

    <p class="text-xl text-gray-700 max-w-2xl leading-relaxed mb-8">
      作为演员，时刻保持最佳状态是我的工作。<br />
      <span class="font-semibold text-rose-500">Dopi</span>，我信赖的护肤专家。
    </p>

    <p class="text-lg text-gray-500 italic">
      —— 董璇
    </p>
  </section>
</template>

<style scoped>
/* 替代 framer-motion 的 initial={{ opacity: 0, y: 20 }} 和 animate */
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