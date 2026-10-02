<!-- 文件路径: pages/contact.vue -->
<script setup lang="ts">
// Nuxt 会自动导入 components/WeWeiContact.vue，无需 import！

// 把原来 mdx 的 meta 信息写在这里，用于 SEO
useHead({
  title: '联系我们 | Dopi 悦色防晒美白粉底液',
  meta: [
    { name: 'keywords', content: '联系方式, 美妆, 芒市, 保山' },
    { name: 'description', content: '联系 Dopi 悦色防晒美白粉底液，获取产品咨询、合作推广或到店试妆信息。' }
  ]
})
</script>

<template>
  <!-- 直接渲染组件即可 -->
  <WeWeiContact />
</template>