<script setup lang="ts">
import { wedding } from '~/config/wedding'

const { t } = useI18n()
const events = computed(() => [
  { key: 'ceremony', icon: '💍', label: t('details.ceremony'), ...wedding.ceremony },
  { key: 'reception', icon: '🥂', label: t('details.reception'), ...wedding.reception },
])
</script>

<template>
  <section id="details" class="scroll-mt-16 bg-sage/40">
    <div class="section">
      <SectionHeading :eyebrow="t('details.eyebrow')" :title="t('details.title')" />

      <div class="mx-auto mb-10 max-w-md text-center">
        <p class="text-xs font-bold uppercase tracking-[0.3em] text-olive">{{ t('details.date') }}</p>
        <p class="mt-2 font-serif text-3xl">{{ t('hero.date') }}</p>
      </div>

      <div class="grid gap-6 md:grid-cols-2">
        <article v-for="e in events" :key="e.key" class="card bg-ivory/80 text-center">
          <p class="text-3xl" aria-hidden="true">{{ e.icon }}</p>
          <h3 class="mt-3 text-3xl font-medium">{{ e.label }}</h3>
          <p class="mt-1 font-serif text-2xl text-cocoa-light">{{ e.time }}</p>
          <p class="mt-4 font-bold">{{ e.name }}</p>
          <p class="text-cocoa-light">{{ e.address }}</p>
          <a :href="e.mapUrl" target="_blank" rel="noopener" class="btn-outline mt-6">
            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12Z" /><circle cx="12" cy="9" r="2.5" /></svg>
            {{ t('details.map') }}
          </a>
        </article>
      </div>

      <p class="mx-auto mt-10 max-w-2xl text-center italic text-olive">{{ t('details.tbc') }}</p>
    </div>
  </section>
</template>
