<script setup lang="ts">
import { wedding } from '~/config/wedding'

const { t } = useI18n()
</script>

<template>
  <footer class="bg-cocoa px-4 py-14 text-center text-ivory">
    <p class="font-script text-5xl">Francesco &amp; Maria Gracia</p>
    <p class="mt-3 text-xs uppercase tracking-[0.3em] text-batter">20 · 08 · 2027</p>
    <p class="mt-8 text-sm">
      {{ t('footer.contact') }} ·
      <a :href="`mailto:${wedding.contactEmail}`" class="underline decoration-caramel underline-offset-4 hover:text-butter">{{ wedding.contactEmail }}</a>
    </p>
    <p class="mt-6 font-serif text-lg italic text-batter">{{ t('footer.thanks') }} ♥</p>
  </footer>
</template>
