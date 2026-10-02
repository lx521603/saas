<script setup lang="ts">
import { ref } from 'vue'
const showWeChat = ref(true)
</script>

<template>
  <!-- 1. 背景渐变：加上 dark:from-gray-800 dark:to-gray-900 -->
  <section class="flex flex-col items-center justify-center text-center px-6 py-16 bg-gradient-to-br from-pink-50 to-rose-100 dark:from-gray-800 dark:to-gray-900 rounded-3xl shadow-xl space-y-6 animate-fade-in-up-40">
    
    <!-- 2. 标题颜色：加上 dark:text-rose-400 -->
    <h1 class="text-4xl font-bold text-rose-600 dark:text-rose-400 mb-4">🌸 薇薇的创业战队招募中！</h1>

    <!-- 3. 正文颜色：加上 dark:text-gray-200 -->
    <div class="text-gray-800 dark:text-gray-200 leading-relaxed space-y-3 max-w-2xl">
      <p>受够了当月光族？看腻了老板脸色？</p>
      <p>别只会刷视频羡慕别人了——看看薇薇我！💪</p>
      <p>从零开始摆摊卖美妆，抖音、小红书记录每一天：</p>
      <p>今天被城管撵，明天爆单手抽筋，但姐赚的每一分钱都硬气！🔥</p>
    </div>

    <!-- 4. 卡片背景：加上 dark:bg-gray-800/70，文字加上 dark:text-gray-200 -->
    <div class="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl p-6 shadow-md text-gray-900 dark:text-gray-100 max-w-lg text-left space-y-2">
      <h2 class="text-xl font-semibold text-rose-500 dark:text-rose-400">👯‍♀️ 正式招募【创业搭子 & 品牌代理】</h2>
      <ul class="list-disc list-inside space-y-1">
        <li>想搞钱，有执行力，不口嗨。</li>
        <li>爱美妆，对变美这件事充满热情。</li>
        <li>敢在路边对美女喊“姐姐来试试这个色号！”</li>
      </ul>
      <p class="pt-2">带你解锁：选品技巧 + 摆摊秘籍 + 全网引流玩法。</p>
      <p class="font-semibold text-rose-600 dark:text-rose-400">犹豫就会败北，果断才能白富美！</p>
    </div>

    <div class="mt-6 space-y-4 w-full flex flex-col items-center">
      <div class="flex justify-center space-x-4">
        <!-- 5. 按钮未选中状态：加上 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 -->
        <button
          @click="showWeChat = true"
          :class="[
            'px-4 py-2 rounded-full border transition-all duration-200',
            showWeChat ? 'bg-green-500 text-white border-green-500' : 'bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200'
          ]"
        >
          微信联系我
        </button>
        <button
          @click="showWeChat = false"
          :class="[
            'px-4 py-2 rounded-full border transition-all duration-200',
            !showWeChat ? 'bg-pink-500 text-white border-pink-500' : 'bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200'
          ]"
        >
          抖音私信我
        </button>
      </div>

      <Transition name="fade-scale" mode="out-in">
        <div :key="showWeChat ? 'wechat' : 'douyin'" class="mt-6 py-8 flex flex-col items-center">
          <img
            :src="showWeChat ? '/img/wechat-qrcode.jpg' : '/img/douyin-qrcode.jpg'"
            :alt="showWeChat ? '微信二维码' : '抖音二维码'"
            class="w-auto h-72 mx-auto rounded-xl shadow-lg border-4 border-white dark:border-gray-700 object-contain"
            style="max-width: 70%;"
          />
          <p class="text-gray-700 dark:text-gray-300 mt-3">
            {{ showWeChat ? '📲 扫码加我微信，立刻聊！' : '💬 打开抖音扫一扫，直接私信我！' }}
          </p>
        </div>
      </Transition>
    </div>
  </section>
</template>

<style scoped>
@keyframes fade-in-up-40 {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-up-40 { animation: fade-in-up-40 0.8s ease-out forwards; }

.fade-scale-enter-active, .fade-scale-leave-active { transition: all 0.4s ease; }
.fade-scale-enter-from, .fade-scale-leave-to { opacity: 0; transform: scale(0.95); }
</style>