<script setup lang="ts">
const { data: page } = await useAsyncData('changelog', () => queryCollection('changelog').first())
const { data: versions } = await useAsyncData('versions', () => queryCollection('versions').order('date', 'DESC').all())

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
      <UChangelogVersions>
        <UChangelogVersion
          v-for="(version, index) in versions"
          :key="index"
          :title="version.title"
          :date="version.date"
          :description="version.description"
          :badges="version.badges"
          :authors="version.authors"
        >
          <template #body>
            <!-- 👇 核心修改：移除 max-h 和 w-full，改用 max-w-full，让图片以原始比例自由舒展 -->
            <img 
              v-if="version.image" 
              :src="version.image" 
              :alt="version.title || 'Changelog Image'"
              class="max-w-full h-auto rounded-xl mb-8 mx-auto block shadow-sm" 
            />
            
            <ContentRenderer :value="version.body" />
          </template>
        </UChangelogVersion>
      </UChangelogVersions>
    </UPageBody>
  </UContainer>
</template>