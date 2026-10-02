<script setup lang="ts">
// Vue 3 的 <script setup> 语法
</script>

<template>
  <section 
    class="flex flex-col items-center justify-center text-center py-16 px-6 bg-gradient-to-b from-[#f0f8ff] to-[#e0f2ff] rounded-3xl shadow-lg animate-fade-in-up"
  >
    <h1 class="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 mb-6 drop-shadow-md">
      ☁️ Dopi 云朵净颜洗面奶 ☁️
    </h1>

    <!-- 移除 motion.img，保留 Tailwind 的 hover 效果 -->
    <img
      src="/img/products-04.jpg"
      alt="Dopi 云朵净颜洗面奶"
      width="500"
      class="rounded-2xl shadow-2xl mb-8 hover:scale-105 transition-transform duration-500 ease-out"
    />

    <p class="text-xl text-gray-700 max-w-2xl leading-relaxed mb-8">
      三重甘氨酸 + 谷氨酸配方，温和清洁，不伤皮肤屏障。<br />
      绵密泡沫，减少摩擦，让洗脸成为享受。
    </p>

    <p class="text-lg text-gray-500 italic">
      🌟 泡沫轻轻包裹脸庞，就像云朵在肌肤上跳舞。<br />
      🌟 就算早晨慌忙，它也能让皮肤柔软顺滑，好像睡了一整天美容觉。
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