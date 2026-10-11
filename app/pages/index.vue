<!-- Page d'accueil provisoire : choix entre les deux versions du site -->
<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const versions = computed(() => [
  { to: localePath('/moderne'), label: t('chooser.moderne'), image: '/images/preview-moderne.jpg', font: 'font-display', bg: 'bg-butter' },
  { to: localePath('/carnet'), label: t('chooser.carnet'), image: '/images/preview-carnet.jpg', font: 'font-lora font-semibold', bg: 'bg-sage' },
])
</script>

<template>
  <main class="min-h-screen bg-ivory px-4 py-12 font-dmsans text-espresso sm:px-6 sm:py-20">
    <div class="mx-auto max-w-5xl">
      <div class="mb-6 flex justify-end"><LangPills /></div>
      <p class="font-bold">{{ t('hero.eyebrow') }}</p>
      <h1 class="font-display text-5xl leading-none sm:text-7xl">Francesco &amp; Maria Gracia</h1>
      <p class="mt-3 text-lg">{{ t('hero.date') }} · {{ t('hero.place') }}</p>

      <h2 class="mt-14 font-display text-3xl">{{ t('chooser.title') }}</h2>
      <p class="mb-8 mt-2">{{ t('chooser.text') }}</p>
      <div class="grid gap-6 md:grid-cols-2">
        <NuxtLink v-for="v in versions" :key="v.to" :to="v.to" class="group overflow-hidden rounded-3xl transition hover:-translate-y-1 hover:shadow-xl" :class="v.bg">
          <img :src="v.image" alt="" class="block aspect-[4/3] w-full object-cover object-top" />
          <div class="flex items-center justify-between gap-4 p-6">
            <span class="text-2xl" :class="v.font">{{ v.label }}</span>
            <span class="font-bold">{{ t('chooser.open') }} →</span>
          </div>
        </NuxtLink>
      </div>
    </div>
  </main>
</template>
