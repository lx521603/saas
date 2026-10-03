<!-- 文件路径: pages/contact.vue -->
<script setup lang="ts">
useHead({
  title: '联系我们 | Dopi 悦色防晒美白粉底液',
  meta: [
    { name: 'keywords', content: '联系方式, 美妆, 芒市, 保山' },
    { name: 'description', content: '联系 Dopi 悦色防晒美白粉底液，获取产品咨询、合作推广或到店试妆信息。' }
  ]
})

const contactInfo = [
  {
    label: '电子邮箱',
    value: 'dopi@velvify.com',
    href: 'mailto:dopi@velvify.com',
    icon: 'i-lucide-mail'
  },
  {
    label: '公司地址',
    value: '芒市新玩厂（欢迎到店试用、洽谈）',
    icon: 'i-lucide-map-pin'
  },
  {
    label: '服务区域',
    value: '诚招全国代理',
    icon: 'i-lucide-globe'
  }
]
</script>

<template>
  <div>
    <!-- 顶部 Hero 保持原样，它自带的间距通常比较合适 -->
    <UPageHero
      title="💖 联系 Dopi · 悦色防晒美白粉底液"
      description="无论你是想了解产品、合作推广，还是来店试妆，我们都期待与你相遇。"
    />

    <!-- 👇 彻底抛弃 UPageSection，用原生 div 控制间距，绝对紧凑听话！ -->
    
    <!-- 1. 二维码区域：上下间距设为 py-12 (48px)，比默认的 py-24 小一半 -->
    <div class="py-12 px-6">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-2">扫码立即联系</h2>
        <p class="text-center text-gray-500 dark:text-gray-400 mb-10">微信或抖音，随时找到我们</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- 抖音卡片 -->
          <div class="flex flex-col items-center p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:shadow-2xl">
            <img 
              src="/img/douyin-qrcode.jpg" 
              alt="抖音二维码" 
              class="w-auto h-80 md:h-96 mx-auto rounded-xl shadow-lg border-4 border-white dark:border-gray-700 mb-4"
            />
            <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100">抖音私信</h3>
            <p class="text-base text-gray-500 dark:text-gray-400 mt-2 font-mono tracking-wider">VMimi33453</p>
          </div>

          <!-- 微信卡片 -->
          <div class="flex flex-col items-center p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:shadow-2xl">
            <img 
              src="/img/wechat-qrcode.jpg" 
              alt="微信二维码" 
              class="w-auto h-80 md:h-96 mx-auto rounded-xl shadow-lg border-4 border-white dark:border-gray-700 mb-4"
            />
            <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100">微信联系</h3>
            <p class="text-base text-gray-500 dark:text-gray-400 mt-2 font-mono tracking-wider">zmmz9108</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 2. 详细联系信息区：加个淡淡的背景色区分层次，间距同样设为 py-12，紧紧衔接 -->
    <div class="py-12 px-6 bg-gray-50 dark:bg-gray-900/30 border-t border-gray-200 dark:border-gray-800">
      <div class="max-w-2xl mx-auto">
        <h2 class="text-2xl font-bold text-center text-gray-900 dark:text-gray-100 mb-2">更多联系方式</h2>
        <p class="text-center text-gray-500 dark:text-gray-400 mb-8">欢迎随时通过以下方式找到我们 👏</p>
        
        <div class="space-y-4">
          <UCard 
            v-for="(item, index) in contactInfo" 
            :key="index"
            class="flex items-start gap-4 p-5 hover:bg-white dark:hover:bg-gray-800 transition-colors cursor-default shadow-sm"
          >
            <UIcon :name="item.icon" class="w-6 h-6 text-primary mt-1 shrink-0" />
            <div>
              <h4 class="font-semibold text-gray-900 dark:text-gray-100 mb-1">{{ item.label }}</h4>
              <a 
                v-if="item.href" 
                :href="item.href" 
                class="text-primary hover:underline font-medium"
              >
                {{ item.value }}
              </a>
              <p v-else class="text-gray-600 dark:text-gray-400 leading-relaxed">
                {{ item.value }}
              </p>
            </div>
          </UCard>
        </div>
      </div>
    </div>
  </div>
</template>