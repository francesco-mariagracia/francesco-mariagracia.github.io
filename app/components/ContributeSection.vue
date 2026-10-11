<script setup lang="ts">
import { wedding } from '~/config/wedding'

const { t } = useI18n()
const online = [
  { name: 'PayPal', url: wedding.paypal },
  { name: 'Revolut', url: wedding.revolut },
].filter((o) => o.url)
</script>

<template>
  <section id="contribute" class="scroll-mt-16 bg-gradient-to-b from-ivory via-butter/50 to-batter/60">
    <div class="section">
      <SectionHeading :eyebrow="t('contribute.eyebrow')" :title="t('contribute.title')" />

      <p class="mx-auto mb-14 max-w-2xl text-center text-lg leading-relaxed">{{ t('contribute.intro') }}</p>

      <div class="grid gap-6" :class="online.length ? 'lg:grid-cols-5' : 'mx-auto max-w-2xl'">
        <article class="card bg-ivory/90 lg:col-span-3">
          <h3 class="mb-4 flex items-center gap-3 text-2xl font-semibold">
            <svg class="h-6 w-6 text-caramel" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M3 10 12 4l9 6M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 20h18" /></svg>
            {{ t('contribute.bank') }}
          </h3>
          <CopyField :label="t('contribute.holder')" :value="wedding.bank.holder" />
          <CopyField :label="t('contribute.iban')" :value="wedding.bank.iban" />
          <CopyField :label="t('contribute.bic')" :value="wedding.bank.bic" />
          <p class="mt-4 text-sm italic text-cocoa-light">{{ t('contribute.reference') }}</p>
        </article>

        <article v-if="online.length" class="card flex flex-col bg-ivory/90 lg:col-span-2">
          <h3 class="mb-2 flex items-center gap-3 text-2xl font-semibold">
            <svg class="h-6 w-6 text-caramel" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20M6 15h4" /></svg>
            {{ t('contribute.online') }}
          </h3>
          <p class="mb-6 text-cocoa-light">{{ t('contribute.onlineText') }}</p>
          <div class="mt-auto flex flex-col gap-3">
            <a v-for="o in online" :key="o.name" :href="o.url" target="_blank" rel="noopener" class="btn-primary">{{ o.name }}</a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
