<script setup lang="ts">
// Vue 3 的 <script setup> 语法
// 注：原代码导入了 next/image 但并未实际使用，这里直接使用原生 img 标签即可
</script>

<template>
  <section 
    class="flex flex-col items-center justify-center text-center py-16 px-6 bg-gradient-to-b from-[#fff8f8] to-[#ffeef4] rounded-3xl shadow-lg animate-fade-in-up"
  >
    <h1 class="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-rose-400 to-amber-300 mb-6 drop-shadow-md">
      ✨ Dopi 悦颜养肤持妆气垫 ✨
    </h1>

    <!-- 移除 motion.img，保留 Tailwind 的 hover 效果 -->
    <img
      src="/img/products-02.jpg"
      alt="Dopi 悦颜养肤持妆气垫"
      width="500"
      class="rounded-2xl shadow-2xl mb-8 hover:scale-105 transition-transform duration-500 ease-out"
    />

    <p class="text-xl text-gray-700 max-w-2xl leading-relaxed mb-8">
      网纱采用百万密孔微纳米技术。<br />
      不吃粉，不浪费你的一滴粉。
    </p>

    <p class="text-lg text-gray-500 italic">
      🌟 轻轻一拍，粉底就像会跳舞，均匀贴合每一寸肌肤。<br />
      🌟 早上忙着化妆，下午还在闪耀，好像气垫比我还勤快。
    </p>
  </section>
</template>

<style scoped>
/* 替代 framer-motion 的入场动画 */
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