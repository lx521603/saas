<script setup lang="ts">
</script>

<template>
  <!-- 1. 背景渐变：加上暗色模式 -->
  <section class="flex flex-col items-center justify-center text-center px-6 py-16 bg-gradient-to-br from-pink-50 to-rose-100 dark:from-gray-800 dark:to-gray-900 rounded-3xl shadow-xl space-y-8 animate-fade-in-up-40">
    
    <!-- 2. 标题颜色 -->
    <h1 class="text-4xl font-bold text-rose-600 dark:text-rose-400 mb-4">
      💖 联系 Dopi · 悦色防晒美白粉底液
    </h1>

    <!-- 3. 正文颜色 -->
    <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mb-10">
      无论你是想了解产品、合作推广，还是来店试妆，我们都期待与你相遇。
    </p>

    <div class="flex flex-col md:flex-row gap-12 items-center justify-center">
      <div class="relative group">
        <img src="/img/douyin-qrcode.jpg" alt="抖音二维码" width="240" height="360" class="rounded-2xl shadow-lg transform group-hover:scale-105 transition-all duration-500 object-contain border-4 border-white dark:border-gray-700" />
        <p class="mt-4 text-gray-700 dark:text-gray-200 font-medium">抖音：VMimi33453</p>
      </div>

      <div class="relative group">
        <img src="/img/wechat-qrcode.jpg" alt="微信二维码" width="240" height="360" class="rounded-2xl shadow-lg transform group-hover:scale-105 transition-all duration-500 object-contain border-4 border-white dark:border-gray-700" />
        <p class="mt-4 text-gray-700 dark:text-gray-200 font-medium">微信：zmmz9108</p>
      </div>
    </div>

    <!-- 4. 联系信息卡片：背景、文字、链接颜色 -->
    <div class="mt-12 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md shadow-xl rounded-2xl px-8 py-6 text-left max-w-md space-y-3">
      <h2 class="text-xl font-semibold text-rose-500 dark:text-rose-400 mb-2">联系信息</h2>
      <p class="text-gray-700 dark:text-gray-200 leading-relaxed">
        📮 邮箱：
        <a href="mailto:x@glee.ch" class="text-rose-600 dark:text-rose-400 font-semibold underline hover:text-rose-700 dark:hover:text-rose-300">
          x@glee.ch
        </a>
      </p>
      <p class="text-gray-700 dark:text-gray-200 leading-relaxed">
        📍 公司地址：<br />• 芒市新玩厂（欢迎到店试用、洽谈）
      </p>
      <p class="text-gray-700 dark:text-gray-200 leading-relaxed">
        🌏 服务区域：<br />• 常驻保山、芒市<br />• 不定期在瑞丽、腾冲等地快闪出摊<br />• 诚招全国代理
      </p>
      <p class="mt-2 text-gray-600 dark:text-gray-400 italic">欢迎联系咨询 👏</p>
    </div>
  </section>
</template>

<style scoped>
@keyframes fade-in-up-40 {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-up-40 { animation: fade-in-up-40 0.8s ease-out forwards; }
</style>