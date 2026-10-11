<script setup lang="ts">
import { wedding } from '~/config/wedding'

const { t, n } = useI18n()
const price = (p: number | null) =>
  p === null ? t('gifts.free') : t('gifts.from', { price: n(p, { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }) })
</script>

<template>
  <section id="gifts" class="section scroll-mt-16">
    <SectionHeading :eyebrow="t('gifts.eyebrow')" :title="t('gifts.title')" />

    <p class="mx-auto mb-14 max-w-2xl text-center text-lg leading-relaxed">{{ t('gifts.intro') }}</p>

    <ul class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <li v-for="g in wedding.gifts" :key="g.id" class="card flex flex-col transition hover:-translate-y-1 hover:shadow-md">
        <div class="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-butter text-2xl" aria-hidden="true">{{ g.icon }}</div>
        <h3 class="text-2xl font-semibold">{{ t(`gifts.items.${g.id}.title`) }}</h3>
        <p class="mt-2 flex-1 leading-relaxed text-cocoa-light">{{ t(`gifts.items.${g.id}.text`) }}</p>
        <div class="mt-6 flex items-center justify-between gap-3 border-t border-batter/60 pt-4">
          <span class="text-sm font-bold text-olive">{{ price(g.price) }}</span>
          <a v-if="g.url" :href="g.url" target="_blank" rel="noopener" class="text-sm font-bold uppercase tracking-widest underline decoration-caramel underline-offset-4">{{ t('gifts.view') }}</a>
          <a v-else href="#contribute" class="text-sm font-bold uppercase tracking-widest underline decoration-caramel underline-offset-4">{{ t('gifts.contribute') }}</a>
        </div>
      </li>
    </ul>
  </section>
</template>
