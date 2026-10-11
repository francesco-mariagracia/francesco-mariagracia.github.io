<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <section id="story" class="section scroll-mt-16">
    <SectionHeading :eyebrow="t('story.eyebrow')" :title="t('story.title')" />

    <p class="mx-auto mb-16 max-w-2xl text-center font-serif text-xl italic leading-relaxed text-cocoa-light sm:text-2xl">
      {{ t('story.intro') }}
    </p>

    <div class="grid items-stretch gap-6 md:grid-cols-3">
      <article class="card text-center">
        <p class="text-3xl" aria-hidden="true">🇮🇹 · 🇫🇷</p>
        <h3 class="mt-4 text-3xl font-medium">Francesco</h3>
        <p class="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-cocoa-light">Pescara → Grenoble</p>
        <p class="mt-4 leading-relaxed">{{ t('story.francesco') }}</p>
      </article>

      <article class="card flex flex-col items-center justify-center border-caramel/50 bg-butter/50 text-center">
        <svg viewBox="0 0 64 64" class="h-14 w-14 text-caramel" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <!-- Coquille Saint-Jacques, symbole des pèlerins -->
          <path d="M32 54 8 26c6-12 16-18 24-18s18 6 24 18L32 54Z" fill="currentColor" fill-opacity=".15" />
          <path d="M32 54V8M32 54 18 12M32 54 46 12M32 54 11 19M32 54 53 19" />
        </svg>
        <h3 class="mt-4 text-3xl font-medium">{{ t('story.met') }}</h3>
        <p class="mt-4 leading-relaxed">{{ t('story.metText') }}</p>
      </article>

      <article class="card text-center">
        <p class="text-3xl" aria-hidden="true">🇻🇪 · 🇵🇹</p>
        <h3 class="mt-4 text-3xl font-medium">Maria Gracia</h3>
        <p class="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-cocoa-light">Venezuela → Lisboa</p>
        <p class="mt-4 leading-relaxed">{{ t('story.mariagracia') }}</p>
      </article>
    </div>
  </section>
</template>
