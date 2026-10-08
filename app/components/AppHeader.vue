<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const route = useRoute()
const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')
const { open: searchOpen } = useContentSearch()

const open = ref(false)
const isDocs = computed(() => route.path === '/docs' || route.path.startsWith('/docs/'))

// ✅ 修复了之前的语法错误，确保 watch 正确闭合
watch(searchOpen, (value) => {
  if (value) {
    open.value = false
  }
})

const items = computed(() => [
  {
    label: '首页',
    to: '/'
  },
  {
    label: '产品目录',
    to: '/docs',
    active: isDocs.value
  },
  {
    label: '妆效展示',
    to: '/blog'
  },
  {
    label: '加盟合作',
    to: '/introduction'
  },
  {
    label: '价格',
    to: '/pricing'
  },
  {
    label: '联系我',
    to: '/contact'
  },
  {
    label: '我的动态',
    to: 'https://91.pt'
  }
])
</script>

<template>
  <UHeader v-model:open="open">
    <template #left>
      <NuxtLink
        to="/"
        class="focus-visible:outline-3 outline-primary/25 rounded-md p-1 -ms-1"
      >
        <AppLogo class="w-auto h-6 shrink-0" />
      </NuxtLink>
    </template>

    <!-- 桌面端导航：在大屏幕上显示 -->
    <UNavigationMenu
      :items="items"
      variant="link"
      class="hidden lg:flex"
    />

    <template #right>
      <UColorModeButton />
      <UContentSearchButton class="lg:hidden" />
      <UButton
        label="联系我"
        color="neutral"
        trailing-icon="i-lucide-arrow-right"
        class="hidden lg:inline-flex"
        to="mailto:vv@velvify.com"
      />
    </template>

    <!-- 👇 移动端导航：使用 NuxtLink 循环，100% 点击有效，且点击后自动关闭菜单 -->
    <template #body>
      <div class="space-y-2 py-4">
        <NuxtLink
          v-for="item in items"
          :key="item.to"
          :to="item.to"
          class="block px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          :class="{ 'text-primary font-semibold bg-gray-50 dark:bg-gray-800/50': item.active }"
          @click="open = false"
        >
          {{ item.label }}
        </NuxtLink>
      </div>

      <template v-if="isDocs">
        <USeparator class="my-6" />
        <UContentNavigation
          :navigation="navigation"
          highlight
        />
      </template>
      
      <USeparator class="my-6" />
<!--
      <UButton
        label="Sign in"
        color="neutral"
        variant="subtle"
        to="/login"
        block
        class="mb-3"
      />-->
      <UButton
        label="联系我"
        color="neutral"
        to="mailto:vv@velvify.com"
        block
      />
      <USeparator class="my-6" />
    </template>
  </UHeader>
</template>