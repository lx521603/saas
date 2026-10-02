<script setup lang="ts">
// Vue 3 的 <script setup> 语法，不需要再写 'use client'
</script>

<template>
  <!-- 使用 Vue 的过渡或直接加 CSS 动画类名 -->
  <section 
    class="flex flex-col items-center justify-center text-center py-16 px-6 bg-gradient-to-b from-[#f0f9ff] to-[#e0f4ff] rounded-3xl shadow-lg animate-fade-in-up"
  >
    <h1 class="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-300 to-indigo-400 mb-6 drop-shadow-md">
      🌬️ Dopi 轻盈柔顺护发素 🌬️
    </h1>

    <!-- 图片 hover 效果直接用 Tailwind 的 transition 和 hover:scale 即可 -->
    <img
      src="/img/products-08.jpg"
      alt="Dopi 轻盈柔顺护发素"
      width="500"
      class="rounded-2xl shadow-2xl mb-8 hover:scale-105 transition-transform duration-500 ease-out"
    />

    <p class="text-xl text-gray-700 max-w-2xl leading-relaxed mb-8">
      轻盈柔顺，顺滑不油腻，修复发丝毛躁，延展性更佳，搭配控油洗发水让头发蓬松亮丽。
    </p>

    <p class="text-lg text-gray-500 italic">
      🌟 洗后顺滑，像丝带般轻盈，甩一甩就自带光泽感。<br />
      🌟 和洗发水组合使用，头发像云朵般轻盈柔顺，每天都是好心情。
    </p>
  </section>
</template>

<style scoped>
/* 替代 framer-motion 的 initial 和 animate */
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