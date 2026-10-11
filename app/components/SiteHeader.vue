<script setup lang="ts">
const { t } = useI18n()
const links = computed(() => [
  { href: '#story', label: t('nav.story') },
  { href: '#details', label: t('nav.details') },
  { href: '#gifts', label: t('nav.gifts') },
  { href: '#contribute', label: t('nav.contribute') },
])
</script>

<template>
  <header class="sticky top-0 z-30 border-b border-batter/40 bg-ivory/85 backdrop-blur">
    <div class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
      <a href="#top" class="font-script text-2xl text-cocoa sm:text-3xl">F &amp; M G</a>
      <ul class="hidden items-center gap-6 text-xs font-bold uppercase tracking-[0.2em] md:flex">
        <li v-for="l in links" :key="l.href">
          <a :href="l.href" class="text-cocoa-light transition hover:text-cocoa">{{ l.label }}</a>
        </li>
      </ul>
      <LangSwitcher />
    </div>
  </header>
</template>
