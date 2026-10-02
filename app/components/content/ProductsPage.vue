<script setup lang="ts">
// Nuxt 会自动导入 components 目录下的组件，无需手动 import！
// 页面标题等 SEO 信息可以在这里配置
useHead({
  title: 'Dopi产品大全'
})
</script>

<template>
  <!-- 注意：React 的 className 在 Vue 中要改成 class -->
  <div class="flex flex-col gap-16 px-6 md:px-12 py-12">
    <DopiAd />
    <DopiYuyan />
    <DopiCushion />
    <DopiMakeupOil />
    <DopiCleanser />
    <DopiCentellaWater />
    <DopiCentellaCream />
    <DopiShampoo />
    <DopiConditioner />
    <DopiLipstick />
  </div>
</template>