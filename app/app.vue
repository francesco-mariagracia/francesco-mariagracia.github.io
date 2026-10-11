<script setup lang="ts">
const { t } = useI18n()
const head = useLocaleHead()

useHead(() => ({
  htmlAttrs: { lang: head.value.htmlAttrs?.lang },
  link: [...(head.value.link || [])],
  meta: [...(head.value.meta || [])],
}))

useSeoMeta({
  title: () => t('meta.title'),
  description: () => t('meta.description'),
  ogTitle: () => t('meta.title'),
  ogDescription: () => t('meta.description'),
  ogType: 'website',
})
</script>

<template>
  <NuxtPage />
</template>
