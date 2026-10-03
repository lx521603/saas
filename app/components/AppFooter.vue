<script setup lang="ts">
// 逻辑部分保持原样或留空即可
</script>

<template>
  <USeparator
    icon="i-simple-icons-nuxtdotjs"
    class="h-px"
  />

  <UFooter>
    <template #left>
      <p class="text-muted text-sm">
        <!-- 💡 提示：如果你想把这里的 Velvify.com 改成 Dopi，可以直接修改这里的文字 -->
        Velvify.com • © {{ new Date().getFullYear() }}
      </p>
    </template>

    <template #right>
      <!-- 1. X (原 Twitter) -->
      <UButton
        to="https://x.com/SaistX"
        target="_blank"
        icon="i-simple-icons-x"
        aria-label="X (Twitter)"
        color="neutral"
        variant="ghost"
      />
      
      <!-- 2. Instagram -->
      <UButton
        to="https://www.instagram.com/viviwang911/"
        target="_blank"
        icon="i-simple-icons-instagram"
        aria-label="Instagram"
        color="neutral"
        variant="ghost"
      />
      
      <!-- 3. Facebook (直接使用你提供的分享链接，完美跳转) -->
      <UButton
        to="https://www.facebook.com/share/1Cwjv4oLZr/"
        target="_blank"
        icon="i-simple-icons-facebook"
        aria-label="Facebook"
        color="neutral"
        variant="ghost"
      />
    </template>
  </UFooter>
</template>
