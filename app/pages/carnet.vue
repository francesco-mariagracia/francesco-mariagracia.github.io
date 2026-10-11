<!-- Version « Carnet de voyage » : Lora + Work Sans, polaroïds et cadres en pointillés -->
<script setup lang="ts">
const { t } = useI18n()
const { wedding, cities, events, gifts, stay, navLinks } = useWeddingContent()
const { days, status } = useCountdown()
const { googleUrl } = useCalendar()
const { copied, copy } = useCopy()
const localePath = useLocalePath()

const countdown = computed(() =>
  status.value === 'today' ? t('hero.today') : status.value === 'after' ? t('hero.past') : days.value === null ? '' : t('hero.daysLeft', days.value),
)
const bankRows = computed(() => [
  { key: 'iban', label: t('contribute.iban'), value: wedding.bank.iban },
  { key: 'bic', label: t('contribute.bic'), value: wedding.bank.bic },
])
// Légère inclinaison des polaroïds
const tilt = ['-rotate-2', 'rotate-[1.5deg]', '-rotate-1', 'rotate-2']
</script>

<template>
  <div class="bg-ivory font-work text-[17px] leading-relaxed text-bark sm:text-lg">
    <!-- Navigation -->
    <header class="bg-batter px-4 py-4 sm:px-6">
      <div class="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
        <NuxtLink :to="localePath('/carnet')" class="font-lora text-xl font-semibold italic sm:text-2xl">Francesco &amp; Maria Gracia</NuxtLink>
        <ul class="hidden gap-6 font-medium lg:flex">
          <li v-for="l in navLinks" :key="l.href"><a :href="l.href" class="hover:text-umber">{{ l.label }}</a></li>
        </ul>
        <LangSelect />
      </div>
    </header>

    <!-- Accueil -->
    <section class="mx-auto flex max-w-6xl flex-wrap items-center gap-14 px-4 py-16 sm:px-6 sm:py-24">
      <div class="min-w-0 flex-[999_1_460px]">
        <p class="mb-3 text-[15px] font-bold uppercase tracking-[0.15em] text-umber">{{ t('hero.nextStep') }}</p>
        <h1 class="font-lora text-5xl font-semibold leading-[1.05] sm:text-7xl">Francesco &amp; Maria Gracia</h1>
        <p class="mt-6 font-lora text-2xl sm:text-3xl">{{ t('hero.date') }} · {{ t('hero.place') }}</p>
        <p v-if="countdown" class="mt-2 font-medium text-umber">{{ countdown }}</p>
        <p class="mt-5 font-lora text-xl italic sm:text-2xl">{{ t('hero.quote') }}</p>
        <a :href="googleUrl" target="_blank" rel="noopener" class="mt-8 inline-block rounded-[10px] bg-bark px-7 py-4 font-bold text-ivory transition hover:bg-umber">
          {{ t('hero.addToCalendar') }}
        </a>
      </div>
      <div class="relative h-[380px] min-w-0 flex-[1_1_320px] sm:h-[480px]">
        <figure class="absolute left-0 top-8 z-10 w-[62%] -rotate-[5deg] bg-white p-3 pb-12 shadow-[0_10px_30px_rgba(67,52,31,0.18)]">
          <img src="/images/bouquet.jpg" :alt="t('alt.bouquet')" class="block aspect-square w-full object-cover" />
          <figcaption class="mt-2.5 text-center font-lora italic">{{ t('hero.soon') }}</figcaption>
        </figure>
        <figure class="absolute right-0 top-36 w-[58%] rotate-[4deg] bg-white p-3 pb-12 shadow-[0_10px_30px_rgba(67,52,31,0.18)]">
          <img src="/images/mains.jpg" :alt="t('alt.hands')" class="block aspect-square w-full object-cover" />
          <figcaption class="mt-2.5 text-center font-lora italic">20 · 08 · 2027</figcaption>
        </figure>
        <div class="absolute -top-1.5 left-[34%] z-20 h-7 w-[90px] -rotate-[8deg] bg-butter/85" aria-hidden="true" />
      </div>
    </section>

    <!-- Notre histoire -->
    <section id="histoire" class="scroll-mt-4 bg-sage px-4 py-20 sm:px-6 sm:py-24">
      <div class="mx-auto max-w-6xl">
        <h2 class="mb-3 font-lora text-4xl font-semibold sm:text-5xl">{{ t('story.carnetTitle') }}</h2>
        <p class="mb-12 max-w-2xl">{{ t('story.intro') }}</p>
        <div class="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          <figure v-for="(c, i) in cities" :key="c.id" class="bg-white p-2.5 pb-5 shadow-[0_6px_18px_rgba(67,52,31,0.14)]" :class="tilt[i]">
            <img :src="c.src" :alt="c.alt" class="block aspect-[4/3] w-full object-cover" loading="lazy" />
            <figcaption class="px-1">
              <h3 class="mt-3.5 font-lora text-2xl font-semibold">{{ c.name }}</h3>
              <p>{{ c.long }}</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    <!-- Le jour J -->
    <section id="jour-j" class="mx-auto max-w-6xl scroll-mt-4 px-4 py-20 sm:px-6 sm:py-24">
      <h2 class="mb-10 font-lora text-4xl font-semibold sm:text-5xl">{{ t('details.carnetTitle') }}</h2>
      <div class="flex flex-wrap items-stretch gap-8">
        <img src="/images/eglise.jpg" :alt="t('alt.church')" class="min-h-[280px] w-full min-w-0 flex-[1_1_420px] rounded-lg object-cover sm:min-h-[360px]" loading="lazy" />
        <div class="flex min-w-0 flex-[1_1_380px] flex-col gap-5">
          <article v-for="e in events" :key="e.key" class="rounded-lg border-2 border-dashed border-stitch p-7">
            <p class="text-[15px] font-bold uppercase tracking-[0.1em] text-umber">{{ e.time }} · {{ e.label }}</p>
            <h3 class="my-1.5 font-lora text-2xl font-semibold">{{ e.name }}</h3>
            <p class="mb-2.5">{{ e.address }}</p>
            <a :href="e.mapUrl" target="_blank" rel="noopener" class="font-bold underline underline-offset-4">{{ t('details.directions') }}</a>
          </article>
          <p class="text-umber">{{ t('details.tbc') }}</p>
        </div>
      </div>
    </section>

    <!-- Liste de cadeaux -->
    <section id="cadeaux" class="scroll-mt-4 bg-butter px-4 py-20 sm:px-6 sm:py-24">
      <div class="mx-auto max-w-6xl">
        <h2 class="mb-3 font-lora text-4xl font-semibold sm:text-5xl">{{ t('gifts.carnetTitle') }}</h2>
        <p class="mb-12 max-w-2xl">{{ t('gifts.intro') }}</p>
        <div class="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          <article v-for="g in gifts" :key="g.id" class="overflow-hidden rounded-lg bg-ivory shadow-[0_6px_18px_rgba(67,52,31,0.1)]">
            <img :src="g.src" alt="" class="block h-48 w-full object-cover" loading="lazy" />
            <div class="p-6">
              <h3 class="mb-2 font-lora text-2xl font-semibold">{{ g.title }}</h3>
              <p class="mb-3.5">{{ g.text }}</p>
              <a v-if="g.url" :href="g.url" target="_blank" rel="noopener" class="font-bold underline">{{ g.priceLabel }}</a>
              <p v-else class="font-bold">{{ g.priceLabel }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Séjour à Lisbonne -->
    <section id="lisbonne" class="scroll-mt-4 bg-sage px-4 py-20 sm:px-6 sm:py-24">
      <div class="mx-auto max-w-6xl">
        <h2 class="mb-3 font-lora text-4xl font-semibold sm:text-5xl">{{ t('stay.title') }}</h2>
        <p class="mb-12 max-w-2xl">{{ t('stay.intro') }}</p>
        <div class="grid gap-6 md:grid-cols-3">
          <a v-for="s in stay" :key="s.id" :href="s.url" class="flex flex-col gap-2.5 rounded-lg border-2 border-dashed border-stitch bg-ivory p-8 transition hover:-translate-y-1 hover:shadow-lg">
            <StayIcon :name="s.id" class="h-8 w-8" />
            <h3 class="mt-2 font-lora text-2xl font-semibold">{{ s.title }}</h3>
            <p class="flex-1">{{ s.text }}</p>
            <span class="mt-1.5 font-bold underline underline-offset-4">{{ t('stay.cta') }} →</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Participer -->
    <section id="participer" class="mx-auto flex max-w-6xl scroll-mt-4 flex-wrap items-center gap-12 px-4 py-20 sm:px-6 sm:py-24">
      <div class="flex-[1_1_300px]">
        <div class="mx-auto max-w-[340px] -rotate-3 bg-white p-2.5 pb-10 shadow-[0_8px_24px_rgba(67,52,31,0.16)]">
          <img src="/images/alliances.jpg" :alt="t('alt.rings')" class="block aspect-square w-full object-cover" loading="lazy" />
        </div>
      </div>
      <div class="flex min-w-0 flex-[1_1_420px] flex-col gap-4">
        <h2 class="font-lora text-4xl font-semibold sm:text-5xl">{{ t('contribute.carnetTitle') }}</h2>
        <p class="mb-2">{{ t('contribute.intro') }}</p>
        <div class="flex flex-col gap-4 rounded-lg border-2 border-dashed border-stitch p-6 sm:p-8">
          <div v-for="r in bankRows" :key="r.key" class="flex flex-wrap items-center justify-between gap-3">
            <div class="min-w-0">
              <div class="text-sm font-bold text-umber">{{ r.label }}</div>
              <div class="break-all text-lg">{{ r.value }}</div>
            </div>
            <button type="button" class="rounded-[10px] border-[1.5px] border-bark px-4 py-2.5 text-[15px] font-bold" @click="copy(r.key, r.value)">
              <span aria-live="polite">{{ copied === r.key ? t('contribute.copied') : t('contribute.copy') }}</span>
            </button>
          </div>
          <p class="text-sm">{{ t('contribute.holder') }} : {{ wedding.bank.holder }}</p>
          <a v-if="wedding.paypal" :href="wedding.paypal" target="_blank" rel="noopener" class="rounded-[10px] bg-bark p-4 text-center font-bold text-ivory transition hover:bg-umber">
            {{ t('contribute.paypal') }}
          </a>
        </div>
      </div>
    </section>

    <footer class="bg-batter px-4 py-12 text-center">
      <p class="font-lora text-2xl font-semibold italic sm:text-3xl">Buen camino · Buon cammino · Bom caminho · Bon chemin</p>
      <p class="mt-3">
        {{ t('footer.contact') }} · <a :href="`mailto:${wedding.contactEmail}`" class="underline">{{ wedding.contactEmail }}</a>
      </p>
      <p class="mt-1">Francesco &amp; Maria Gracia — {{ t('hero.date') }} · {{ t('footer.photos') }}</p>
    </footer>
  </div>
</template>
