<script setup lang="ts">
// Vue 3 的 <script setup> 语法
</script>

<template>
  <section 
    class="flex flex-col items-center justify-center text-center py-16 px-6 bg-gradient-to-b from-[#fffaf6] to-[#fff0e6] rounded-3xl shadow-lg animate-fade-in-up"
  >
    <h1 class="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-rose-400 via-orange-300 to-amber-400 mb-6 drop-shadow-md">
      🌿 Dopi 积雪草精华面霜 🌿
    </h1>

    <!-- 移除 motion.img，直接使用原生 img。
         原代码的 whileHover 和 className 里的 hover:scale-105 效果重复，保留 Tailwind 的即可 -->
    <img
      src="/img/products-06.jpg"
      alt="Dopi 积雪草精华面霜"
      width="500"
      class="rounded-2xl shadow-2xl mb-8 hover:scale-105 transition-transform duration-500 ease-out"
    />

    <p class="text-xl text-gray-700 max-w-2xl leading-relaxed mb-8">
      源头控油，舒适不油腻；锁水保湿，抗皱紧致，修复肌肤屏障，让肌肤焕发健康光彩。
    </p>

    <p class="text-lg text-gray-500 italic">
      🌟 涂上它，肌肤就像喝饱了水的小花，舒适又柔软。<br />
      🌟 源头控油，出门也能自信不泛光，简直是懒人护肤必备。
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