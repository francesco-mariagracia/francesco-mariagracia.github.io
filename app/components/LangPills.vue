<!-- Sélecteur de langue en pilule (version moderne) -->
<script setup lang="ts">
const { locale, locales, t } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>

<template>
  <nav :aria-label="t('nav.language')" class="flex overflow-hidden rounded-full border-[1.5px] border-espresso text-sm font-bold uppercase">
    <NuxtLink
      v-for="l in locales"
      :key="l.code"
      :to="switchLocalePath(l.code)"
      :hreflang="l.language"
      :title="l.name"
      :aria-current="l.code === locale ? 'true' : undefined"
      class="px-3 py-2 transition"
      :class="l.code === locale ? 'bg-espresso text-ivory' : 'text-espresso hover:bg-batter/60'"
    >
      {{ l.code }}
    </NuxtLink>
  </nav>
</template>
