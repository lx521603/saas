<script setup lang="ts">
import { ref } from 'vue'

const page = ref({
  seo: {
    title: 'Dopi 悦色 - 演员与美妆达人信赖的养肤级彩妆',
    description: 'Dopi 提供专业级防晒美白粉底液、积雪草修护系列及控油洗发产品。12小时持妆，让你无惧镜头，时刻闪耀。'
  },
  hero: {
    title: '✨ 焕发自信光彩，从 **Dopi** 开始',
    description: '专为亚洲肌肤研发的养肤级彩妆与护肤系列。防晒、美白、持妆三合一，让你无惧镜头，时刻保持最佳状态。',
    links: [
      { label: '查看全线产品', to: '/docs', color: 'primary', size: 'xl' },
      { label: '加入代理招募', to: '/introduction', color: 'neutral', variant: 'subtle', size: 'xl', trailingIcon: 'i-lucide-arrow-right' }
    ]
  },
  
  // 🌟 精确计算比例的 Bento Grid (便当盒网格)
    // 🌟 精确计算比例的 Bento Grid (便当盒网格)
  bentoFeatures: {
    title: '为什么 100万+ 女性选择 Dopi？',
    description: '我们不仅仅提供产品，更提供一种从容自信的生活方式。',
    items: [
      {
        title: '养肤级底妆，卸妆无负担',
        description: '添加多重植物精萃，化妆即护肤。百万密孔微纳米网纱，不吃粉，更省粉底。',
        icon: 'i-lucide-sparkles',
        class: 'col-span-1 lg:col-span-2',
        image: '/img/social.jpg',
        imageRatio: 'aspect-[16/9]'
      },
      {
        title: '12小时全天候持妆',
        description: '独家微分子锁妆科技，从早高峰到深夜聚会，告别补妆焦虑。',
        icon: 'i-lucide-clock',
        class: 'col-span-1 lg:col-span-1',
        image: '/img/products-01.jpg',
        imageRatio: 'aspect-square'
      },
      {
        title: '悦色丝绒不沾杯口红',
        description: '醇厚正彩，哑而不干。质地丝滑，锁色不绷唇，喝水也不沾杯，约会必备。',
        icon: 'i-lucide-heart',
        class: 'col-span-1 lg:col-span-1',
        image: '/img/products-09.jpg',
        imageRatio: 'aspect-[4/3]'
      },
      {
        title: '悦颜养肤持妆气垫',
        description: '百万密孔微纳米网纱，不吃粉不浪费。轻轻一拍，粉底均匀贴合每一寸肌肤。',
        icon: 'i-lucide-sparkles',
        class: 'col-span-1 lg:col-span-2',
        image: '/img/products-02.jpg',
        imageRatio: 'aspect-[21/9]'
      }
    ]
  },

  testimonials: {
    headline: '真实反馈',
    title: '听听她们怎么说',
    description: '来自不同场景的真实用户评价，是我们不断前进的最大动力。',
    items: [
      { 
        quote: '用了 Dopi 粉底液，同事都问我是不是去做了医美，皮肤真的在发光！而且一天下来完全不暗沉。', 
        user: { name: '林小姐', description: '资深美妆爱好者', avatar: { src: 'https://i.pravatar.cc/128?img=5' } } 
      },
      { 
        quote: '作为特约代理，总部的扶持真的到位。零基础也能轻松上手，现在不仅自己变美了，还实现了月入过万。', 
        user: { name: '木子', description: 'Dopi 城市特约代理', avatar: { src: 'https://i.pravatar.cc/128?img=9' } } 
      },
      { 
        quote: '我是敏感肌，试过很多粉底都会泛红。Dopi 的养肤配方真的绝了，卸妆后皮肤状态甚至比化妆前还好！', 
        user: { name: 'Vivi', description: '美妆博主', avatar: { src: 'https://i.pravatar.cc/128?img=10' } } 
      }
    ]
  },

  cta: {
    title: '准备好开启你的变美之旅了吗？',
    description: '立即联系我们，获取专属试用装或详细的代理政策。',
    links: [
      { label: '联系微信客服', to: '/contact', color: 'primary', size: 'lg', trailingIcon: 'i-lucide-arrow-right' },
      { label: '了解代理政策', to: '/pricing', color: 'neutral', variant: 'outline', size: 'lg' }
    ]
  }
})

const title = page.value.seo.title
const description = page.value.seo.description

useSeoMeta({
  titleTemplate: '%s | Dopi',
  title,
  ogTitle: title,
  description,
  ogDescription: description,
})
</script>

<template>
  <div class="overflow-hidden">
    <!-- 1. Hero 区域 -->
    <UPageHero 
      :title="page.hero.title" 
      :description="page.hero.description" 
      :links="page.hero.links" 
    />

    <!-- 2. 🌟 Bento Grid (便当盒网格) 核心区域 -->
    <UPageSection 
      :title="page.bentoFeatures.title" 
      :description="page.bentoFeatures.description"
    >
      <UPageGrid class="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <UPageCard
          v-for="(item, index) in page.bentoFeatures.items"
          :key="index"
          :title="item.title"
          :description="item.description"
          :icon="item.icon"
          :class="item.class"
          spotlight
          class="h-full flex flex-col justify-between"
        >
          <!-- 🛡️ 防崩坏图片渲染 -->
          <template v-if="item.image" #header>
            <div :class="['w-full overflow-hidden rounded-xl mb-4', item.imageRatio]">
              <img 
                :src="item.image" 
                :alt="item.title"
                class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </template>
        </UPageCard>
      </UPageGrid>
    </UPageSection>

    <!-- 3. 用户评价 (瀑布流布局) -->
    <UPageSection
      id="testimonials"
      :headline="page.testimonials.headline"
      :title="page.testimonials.title"
      :description="page.testimonials.description"
      class="bg-gray-50/50 dark:bg-gray-900/50"
    >
      <UPageColumns class="xl:columns-3 lg:columns-2 md:columns-1 gap-6">
        <UPageCard
          v-for="(testimonial, index) in page.testimonials.items"
          :key="index"
          variant="subtle"
          :description="testimonial.quote"
          :ui="{ description: 'before:content-[open-quote] after:content-[close-quote] text-lg leading-relaxed' }"
          class="break-inside-avoid mb-6"
        >
          <template #footer>
            <UUser v-bind="testimonial.user" size="md" />
          </template>
        </UPageCard>
      </UPageColumns>
    </UPageSection>

    <!-- 4. 底部强力 CTA -->
    <USeparator class="my-12" />
    <UPageCTA 
      v-bind="page.cta" 
      variant="naked" 
      class="overflow-hidden py-20" 
    />
  </div>
</template>