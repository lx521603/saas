<!-- 文件路径: pages/introduction.vue -->
<script setup lang="ts">
import { ref } from 'vue'

useHead({
  title: '薇薇创业招代理 | Dopi 悦色防晒美白粉底液',
  meta: [
    { name: 'keywords', content: '联系方式, 美妆, 芒市, 保山, 创业, 代理' },
    { name: 'description', content: '加入薇薇的创业战队，招募创业搭子与品牌代理，一起搞钱变美！' }
  ]
})

// 控制微信/抖音切换的状态
const activeTab = ref('wechat')
const contactMethods = [
  { label: '微信联系我', value: 'wechat', icon: 'i-lucide-message-circle' },
  { label: '抖音私信我', value: 'douyin', icon: 'i-lucide-video' }
]
</script>

<template>
  <div>
    <!-- 1. 顶部 Hero 区域 (保持适度留白，吸引注意力) -->
    <UPageHero
      title="🌸 薇薇的创业战队招募中！"
      description="受够了当月光族？看腻了老板脸色？别只会刷视频羡慕别人了——看看薇薇我！💪 从零开始摆摊卖美妆，今天被城管撵，明天爆单手抽筋，但姐赚的每一分钱都硬气！🔥"
    >
      <template #links>
        <UButton label="立即加入战队" to="/contact" color="primary" size="lg" />
      </template>
    </UPageHero>

    <!-- 👇 将 space-y-16 改为 space-y-8，大幅收紧板块间距 -->
    <UContainer class="space-y-8">
      
      <!-- 2. 招募条件网格：用原生 div 替代 UPageSection，彻底消灭巨大默认留白 -->
      <div class="py-12 px-6">
        <div class="max-w-5xl mx-auto text-center mb-10">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-3">👯‍♀️ 正式招募【创业搭子 & 品牌代理】</h2>
          <p class="text-lg text-gray-500 dark:text-gray-400">带你解锁：选品技巧 + 摆摊秘籍 + 全网引流玩法。犹豫就会败北，果断才能白富美！</p>
        </div>
        
        <UPageGrid>
          <UPageCard
            title="想搞钱，有执行力"
            description="拒绝口嗨，我们需要的是真正想改变现状、愿意付出行动的实干派。"
            icon="i-lucide-target"
          />
          <UPageCard
            title="爱美妆，充满热情"
            description="对变美这件事充满热情，乐于分享好物，愿意帮助更多女性找回自信。"
            icon="i-lucide-heart"
          />
          <UPageCard
            title="敢于突破，不怕吃苦"
            description="敢在路边对美女喊“姐姐来试试这个色号！”，享受成交带来的成就感。"
            icon="i-lucide-zap"
          />
        </UPageGrid>
      </div>

      <!-- 3. 二维码切换区域：同样用原生 div，加上淡背景区分层次，并放大二维码 -->
      <div class="py-12 px-6 bg-gray-50 dark:bg-gray-900/30 border-t border-gray-200 dark:border-gray-800">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">扫码立即加入，开启搞钱之路</h2>
          
          <UTabs
            v-model="activeTab"
            :items="contactMethods"
            color="primary"
            class="mb-8 justify-center"
          />
          
          <div class="flex flex-col items-center p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:shadow-2xl max-w-md mx-auto">
            <!-- 👇 核心修改：放大二维码尺寸，与 contact 页面保持完全一致 -->
            <img
              :src="activeTab === 'wechat' ? '/img/wechat-qrcode.jpg' : '/img/douyin-qrcode.jpg'"
              :alt="activeTab === 'wechat' ? '微信二维码' : '抖音二维码'"
              class="w-auto h-80 md:h-96 mx-auto rounded-xl shadow-lg border-4 border-white dark:border-gray-700 mb-6"
            />
            <p class="text-xl font-bold text-gray-900 dark:text-gray-100">
              {{ activeTab === 'wechat' ? '📲 扫码加我微信，立刻聊！' : '💬 打开抖音扫一扫，直接私信我！' }}
            </p>
          </div>
        </div>
      </div>

    </UContainer>
  </div>
</template>