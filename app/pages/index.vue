<script setup lang="ts">
import { ref } from 'vue'

// 1. 将首页数据直接写在本地，100% 可靠，加载极快，永不白屏
const page = ref({
  seo: {
    title: 'Dopi 悦色防晒美白粉底液 - 演员与美妆达人信赖之选',
    description: 'Dopi 提供专业级防晒美白粉底液、积雪草修护系列及控油洗发产品。轻盈柔顺，自带光泽，让你每天都是好心情。'
  },
  hero: {
    title: '✨ 焕发自信光彩，从 **Dopi** 开始', // 支持简单的 Markdown 加粗
    description: '专为亚洲肌肤研发的养肤级彩妆与护肤系列。防晒、美白、持妆三合一，让你无惧镜头，时刻闪耀。',
    links: [
      { label: '查看全线产品', to: '/docs/getting-started', color: 'primary' },
      { label: '加入代理招募', to: '/pricing', color: 'neutral', variant: 'subtle' }
    ]
  },
  sections: [
    {
      title: '养肤级底妆，卸妆无负担',
      description: '添加多重植物精萃，化妆即护肤。百万密孔微纳米网纱，不吃粉，更省粉底。',
      orientation: 'horizontal',
      reverse: false,
      features: [{ title: '轻薄透气', description: '如云朵般轻盈' }, { title: '持久锁妆', description: '12小时不脱妆' }]
    }
  ],
  features: {
    title: '为什么选择 Dopi？',
    description: '我们不仅仅提供产品，更提供一种自信的生活方式。',
    items: [
      { title: '天然成分', description: '严选全球优质草本植物提取物，温和不刺激。', icon: 'i-lucide-leaf' },
      { title: '专业研发', description: '由资深皮肤科医生与彩妆师联合配方。', icon: 'i-lucide-flask-conical' },
      { title: '高性价比', description: '去掉品牌溢价，把利润让给每一位爱美女性。', icon: 'i-lucide-wallet' }
 ]
  },
  testimonials: {
    headline: '用户评价',
    title: '听听她们怎么说',
    description: '真实用户的反馈，是我们不断前进的动力。',
    items: [
      { quote: '用了 Dopi 粉底液，同事都问我是不是去做了医美，皮肤真的在发光！', user: { name: '林小姐', description: '资深美妆爱好者', avatar: { src: 'https://i.pravatar.cc/128?img=1' } } },
      { quote: '作为特约代理，总部的扶持真的到位，零基础也能轻松上手，现在已经月入过万啦。', user: { name: '薇薇', description: 'Dopi 特约代理', avatar: { src: 'https://i.pravatar.cc/128?img=5' } } }
    ]
  },
  cta: {
    title: '准备好开启你的变美之旅了吗？',
    description: '立即联系我们，获取专属试用装或代理政策详情。',
    links: [
      { label: '联系微信客服', to: '/contact', color: 'primary', size: 'lg' }
    ]
  }
})

// 2. 设置 SEO
const title = page.value.seo.title
const description = page.value.seo.description

useSeoMeta({
  titleTemplate: '',
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  // ogImage: '替换为你自己的首页分享图链接'
})
</script>

<template>
  <!-- 3. 移除了 v-if="page"，因为数据永远存在 -->
  <div>
    <UPageHero :title="page.hero.title" :description="page.hero.description" :links="page.hero.links">
      <template #top>
        <!-- 如果还没有这个组件，请先注释掉，防止报错 -->
        <!-- <HeroBackground /> -->
      </template>
      
      <!-- 之前说的 PromotionalVideo，如果还没写好，请先注释掉 -->
      <!-- <PromotionalVideo /> -->
    </UPageHero>

    <!-- 动态渲染自定义区块 -->
    <UPageSection
      v-for="(section, index) in page.sections"
      :key="index"
      :title="section.title"
      :description="section.description"
      :orientation="section.orientation"
      :reverse="section.reverse"
      :features="section.features"
    >
      <!-- <ImagePlaceholder /> -->
    </UPageSection>

    <!-- 特性网格 -->
    <UPageSection :title="page.features.title" :description="page.features.description">
      <UPageGrid>
        <UPageCard
          v-for="(item, index) in page.features.items"
          :key="index"
          v-bind="item"
          spotlight
        />
      </UPageGrid>
    </UPageSection>

    <!-- 用户评价 -->
    <UPageSection
      id="testimonials"
      :headline="page.testimonials.headline"
      :title="page.testimonials.title"
      :description="page.testimonials.description"
    >
      <UPageColumns class="xl:columns-2 md:columns-1"> <!-- 调整了列数，2列在手机和平板上更好看 -->
        <UPageCard
          v-for="(testimonial, index) in page.testimonials.items"
          :key="index"
          variant="subtle"
          :description="testimonial.quote"
          :ui="{ description: 'before:content-[open-quote] after:content-[close-quote]' }"
        >
          <template #footer>
            <UUser v-bind="testimonial.user" size="lg" />
          </template>
        </UPageCard>
      </UPageColumns>
    </UPageSection>

    <USeparator />

    <!-- 底部 CTA -->
    <UPageCTA v-bind="page.cta" variant="naked" class="overflow-hidden">
      <!-- <LazyStarsBg /> -->
    </UPageCTA>
  </div>
</template>