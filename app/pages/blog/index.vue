<script setup lang="ts">
// 👇 删掉 import！Nuxt 会自动识别 app/components/ 下的所有组件

const { data: page } = await useAsyncData('blog', () => queryCollection('blog').first())
const { data: posts } = await useAsyncData('posts', () => queryCollection('posts').all())

const title = page.value?.seo?.title || page.value?.title
const description = page.value?.seo?.description || page.value?.description

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description
})

defineOgImage('Saas', { title, description })
</script>

<template>
  <UContainer>
    <UPageHeader
      v-bind="page"
      class="py-[50px]"
    />

    <UPageBody>
      <UBlogPosts>
        <UBlogPost
          v-for="(post, index) in posts"
          :key="index"
          :to="post.path"
          :title="post.title"
          :description="post.description"
          :image="post.image"
          :date="new Date(post.date).toLocaleDateString('en', { year: 'numeric', month: 'short', day: 'numeric' })"
          :authors="post.authors"
          :badge="post.badge"
          :orientation="index === 0 ? 'horizontal' : 'vertical'"
          :class="[index === 0 && 'col-span-full']"
          variant="naked"
          :ui="{
            description: 'line-clamp-2'
          }"
        />
      </UBlogPosts>

      <!-- 👇 完美复刻首页 CTA 视觉效果：只有顶部分隔线，无背景框，绝对稳定 -->
      <USeparator class="my-12" />
      
      <div class="py-20 text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-4">
          想了解更多产品细节？
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          查看我们完整的产品系列，找到最适合你的那一款。
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <UButton 
            to="/contact" 
            color="primary" 
            size="lg"
            trailing-icon="i-lucide-arrow-right"
          >
            联系微信客服
          </UButton>
          <UButton 
            to="/pricing" 
            color="neutral" 
            variant="outline"
            size="lg"
          >
            了解代理政策
          </UButton>
        </div>
      </div>
      
    </UPageBody>
  </UContainer>
</template>