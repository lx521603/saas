<script setup lang="ts">
// Vue 3 的 <script setup> 语法
</script>

<template>
  <section 
    class="flex flex-col items-center justify-center text-center py-16 px-6 bg-gradient-to-b from-[#fff0f3] to-[#ffe6ed] rounded-3xl shadow-lg animate-fade-in-up"
  >
    <h1 class="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-rose-400 to-red-400 mb-6 drop-shadow-md">
      💄 Dopi 悦色丝绒不沾杯口红 💄
    </h1>

    <!-- 第一张图片：移除 motion.img，保留 Tailwind 的 hover 效果 -->
    <img
      src="/img/products-09.jpg"
      alt="Dopi 悦色丝绒不沾杯口红"
      width="400"
      class="rounded-2xl shadow-2xl mb-6 hover:scale-105 transition-transform duration-500 ease-out"
    />

    <!-- 第二张图片：同样处理 -->
    <img
      src="/img/products-10.jpg"
      alt="Dopi 悦色丝绒不沾杯口红色号"
      width="400"
      class="rounded-2xl shadow-2xl mb-8 hover:scale-105 transition-transform duration-500 ease-out"
    />

    <p class="text-xl text-gray-700 max-w-2xl leading-relaxed mb-8">
      1️⃣ 醇厚正彩，哑而不干<br />
      2️⃣ 质地丝滑，锁色不绷唇<br />
      3️⃣ 每次涂抹都完美显色，轻松hold住一整天
    </p>

    <p class="text-lg text-gray-500 italic">
      🌟 涂上它，唇色像丝绒般柔滑，喝水也不沾杯，简直是约会必备！<br />
      🌟 色号多到挑花眼，每一款都让你自带氛围感。
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