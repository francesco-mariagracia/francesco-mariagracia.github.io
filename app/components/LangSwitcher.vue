<script setup lang="ts">
const { locale, locales, t } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>

<template>
  <nav :aria-label="t('nav.language')" class="flex items-center gap-1 text-xs font-bold uppercase tracking-widest">
    <NuxtLink
      v-for="l in locales"
      :key="l.code"
      :to="switchLocalePath(l.code)"
      :hreflang="l.language"
      :title="l.name"
      :aria-current="l.code === locale ? 'true' : undefined"
      class="rounded-full px-2.5 py-1.5 transition"
      :class="l.code === locale ? 'bg-cocoa text-ivory' : 'text-cocoa hover:bg-batter/50'"
    >
      {{ l.code }}
    </NuxtLink>
  </nav>
</template>
