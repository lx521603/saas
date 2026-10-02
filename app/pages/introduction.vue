<!-- 文件路径: pages/introduction.vue -->
<script setup lang="ts">
// Nuxt 会自动导入 components/WeWeiAd.vue，无需 import！

// 把 meta 信息写在这里，用于 SEO
useHead({
  title: '薇薇创业招代理 | Dopi 悦色防晒美白粉底液',
  meta: [
    { name: 'keywords', content: '联系方式, 美妆, 芒市, 保山, 创业, 代理' },
    { name: 'description', content: '加入薇薇的创业战队，招募创业搭子与品牌代理，一起搞钱变美！' }
  ]
})
</script>

<template>
  <!-- 直接渲染你之前写好的完美组件 -->
  <WeWeiAd />
</template>