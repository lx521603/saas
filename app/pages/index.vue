<script setup lang="ts">
import { ref } from 'vue'

const page = ref({
  seo: {
    title: 'Dopi 悦色防晒美白粉底液 - 演员与美妆达人信赖之选',
    description: 'Dopi 提供专业级防晒美白粉底液、积雪草修护系列及控油洗发产品。轻盈柔顺，自带光泽，让你每天都是好心情。'
  },
  hero: {
    title: '✨ 焕发自信光彩，从 **Dopi** 开始',
    description: '专为亚洲肌肤研发的养肤级彩妆与护肤系列。防晒、美白、持妆三合一，让你无惧镜头，时刻闪耀。',
    links: [
      { label: '查看全线产品', to: '/products', color: 'primary' },
      { label: '加入代理招募', to: '/pricing', color: 'neutral', variant: 'subtle' }
    ]
  },
  sections: [
    {
      title: '养肤级底妆，卸妆无负担',
      description: '添加多重植物精萃，化妆即护肤。百万密孔微纳米网纱，不吃粉，更省粉底。',
      orientation: 'horizontal',
      reverse: false, // false 表示：左边文字，右边图片
      image: '/img/social.jpg', // 👈 在这里加入你的竖图路径
      imageAlt: 'Dopi 悦色防晒美白粉底液展示',
      features: [
        { 
          title: '轻薄透气', 
          description: '如云朵般轻盈', 
          icon: 'i-lucide-feather' // 加上图标更生动
        }, 
        { 
          title: '持久锁妆', 
          description: '12小时不脱妆', 
          icon: 'i-lucide-clock' 
        }
      ]
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

const title = page.value.seo.title
const description = page.value.seo.description

useSeoMeta({
  titleTemplate: '',
  title,
  ogTitle: title,
  description,
  ogDescription: description,
})
</script>

<template>
  <div>
    <UPageHero :title="page.hero.title" :description="page.hero.description" :links="page.hero.links">
      <template #top>
        <!-- <HeroBackground /> -->
      </template>
    </UPageHero>

    <!-- 👇 重点修改在这里：加入了图片的渲染逻辑 -->
    <UPageSection
      v-for="(section, index) in page.sections"
      :key="index"
      :title="section.title"
      :description="section.description"
      :orientation="section.orientation"
      :reverse="section.reverse"
      :features="section.features"
    >
      <!-- 如果数据里有 image，就渲染这张图 -->
      <div v-if="section.image" class="flex justify-center items-center">
        <img 
          :src="section.image" 
          :alt="section.imageAlt"
          class="
            rounded-2xl 
            shadow-2xl 
            border border-gray-200 dark:border-gray-800 
            w-full max-w-[280px] md:max-w-sm 
            object-cover 
            transform hover:scale-[1.02] transition-transform duration-500
          "
        />
      </div>
    </UPageSection>

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

    <UPageSection
      id="testimonials"
      :headline="page.testimonials.headline"
      :title="page.testimonials.title"
      :description="page.testimonials.description"
    >
      <UPageColumns class="xl:columns-2 md:columns-1">
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

    <UPageCTA v-bind="page.cta" variant="naked" class="overflow-hidden">
      <!-- <LazyStarsBg /> -->
    </UPageCTA>
  </div>
</template>