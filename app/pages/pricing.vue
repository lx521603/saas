<script setup lang="ts">
import { ref } from 'vue'

// 1. 将数据修改为 Dopi 粉底液的代理招募方案
const page = ref({
  title: 'Dopi 悦色防晒美白粉底液 · 代理招募',
  description: '无论你是想自用省钱，还是轻创业搞钱，Dopi 都有适合你的合作方案。低门槛，高复购，带你一起变美变富！',
  seo: {
    title: 'Dopi 代理招募 | 会员价299，特代399，市代1999',
    description: '加入 Dopi 悦色防晒美白粉底液代理，低门槛创业，公司提供一件代发与全套营销支持。'
  },
  plans: [
    {
      title: 'VIP 会员',
      description: '适合新手体验与自用省钱，零压力开启变美之旅。',
      price: '¥ 299', // 直接显示固定价格
      button: { 
        label: '成为会员', 
        color: 'primary', 
        variant: 'subtle',
        to: '/contact' 
      },
      features: [
        '享受会员专属内部折扣价',
        '一次购入终身享受特价',
        '专属代理社群日常答疑',
        '复购享受1件也享受特价'
      ]
    },
    {
      title: '特约代理 (特代)',
      description: '轻创业/副业首选，更低拿货价，更高利润空间。',
      price: '¥ 399',
      highlight: true, // 突出显示推荐方案
      scale: true,
      button: { 
        label: '申请特代', 
        color: 'primary',
        to: '/contact' 
      },
      features: [
        '享受特约代理专属拿货价',
        '赠送全套高清营销素材与发圈文案',
        '总部一对一销售与引流指导',
        '优先参与品牌线下沙龙活动'
      ]
    },
    {
      title: '市级代理 (市代)',
      description: '适合团队长或实体店主，享受最高级别政策扶持。',
      price: '¥ 3999',
      button: { 
        label: '申请市代', 
        color: 'primary', 
        variant: 'subtle',
        to: '/contact' 
      },
      features: [
        '全网最高利润空间与返点政策',
        '享受严格的区域保护政策',
        '官方提供线下地推物料与展架支持',
        '优先参与新品内测与核心运营培训'
      ]
    }
  ],
  logos: {
    title: '众多美妆达人与实体店的共同选择',
    icons: [
      'i-simple-icons-tiktok',       // 抖音
      'i-simple-icons-xiaohongshu',  // 小红书 (如果图标库支持，否则会自动回退或显示占位)
      'i-simple-icons-wechat',       // 微信
      'i-simple-icons-instagram',    // Instagram/朋友圈
      'i-lucide-store'               // 实体店
    ]
  },
  faq: {
    title: '代理常见问题解答',
    description: '关于 Dopi 代理政策，你最关心的都在这里。',
    items: [
      { 
        label: '没有微商或美妆经验可以做吗？', 
        content: '完全可以！我们提供从 0 到 1 的保姆式培训，包括产品知识、引流技巧和成交话术，手把手带你入门。' 
      },
      { 
        label: '发货和售后怎么处理？需要自己囤货吗？', 
        content: '公司支持一件代发！你只负责接单和收钱，打包、发货、售后均由总部专业团队负责，让你真正实现零库存轻创业。' 
      },
      { 
        label: '如果产品卖不出去怎么办？', 
        content: '正规代理在符合公司规定的前提下，享有完善的换货保障机制。我们更会教你如何做引流和转化，让你不仅卖得出去，还能持续复购。' 
      },
      { 
        label: '如何升级代理级别？', 
        content: '当你累计拿货金额或销售单量达到上一级别的标准时，即可联系你的上级或总部客服，无缝升级享受更高权益。' 
      }
    ]
  }
})

// 2. 设置 SEO
const title = page.value.seo.title || page.value.title
const description = page.value.seo.description || page.value.description

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description
})
</script>

<template>
  <div>
    <!-- 移除了原来的 UTabs，因为代理价通常是固定的，直接展示更清晰专业 -->
    <UPageHero :title="page.title" :description="page.description" />

    <UContainer>
      <!-- 渲染三个代理级别的卡片 -->
      <UPricingPlans scale>
        <UPricingPlan
          v-for="(plan, index) in page.plans"
          :key="index"
          v-bind="plan"
          :price="plan.price"
        />
      </UPricingPlans>
    </UContainer>

    <!-- 信任背书区域 -->
    <UPageSection>
      <UPageLogos :title="page.logos.title">
        <UIcon
          v-for="icon in page.logos.icons"
          :key="icon"
          :name="icon"
          class="w-12 h-12 shrink-0 text-muted"
        />
      </UPageLogos>
    </UPageSection>

    <!-- FAQ 区域 -->
    <UPageSection :title="page.faq.title" :description="page.faq.description">
      <UAccordion
        :items="page.faq.items"
        :unmount-on-hide="false"
        :default-value="['0']"
        type="multiple"
        class="max-w-3xl mx-auto"
        :ui="{
          trigger: 'text-base text-highlighted',
          body: 'text-base text-muted'
        }"
      />
    </UPageSection>
  </div>
</template>