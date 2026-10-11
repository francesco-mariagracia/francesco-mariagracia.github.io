<!-- Version « Moderne » : DM Serif Display + DM Sans, mosaïque de photos et tuiles colorées -->
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
</script>

<template>
  <div class="bg-ivory font-dmsans text-[17px] leading-relaxed text-espresso sm:text-lg">
    <!-- Navigation -->
    <header class="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-5 sm:px-6">
      <NuxtLink :to="localePath('/moderne')" class="font-display text-2xl">F+MG</NuxtLink>
      <ul class="hidden gap-8 text-base font-medium lg:flex">
        <li v-for="l in navLinks" :key="l.href"><a :href="l.href" class="hover:text-umber">{{ l.label }}</a></li>
      </ul>
      <LangPills />
    </header>

    <!-- Accueil -->
    <section class="mx-auto max-w-6xl px-4 pb-20 pt-4 sm:px-6 sm:pb-24">
      <div class="mb-10 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p class="mb-3 font-bold">{{ t('hero.eyebrow') }}</p>
          <h1 class="font-display text-6xl leading-[0.95] sm:text-8xl lg:text-[104px]">
            Francesco<br /><span class="italic">&amp;</span> Maria Gracia
          </h1>
        </div>
        <div class="sm:text-right">
          <p class="font-display text-4xl leading-none sm:text-6xl">20.08.2027</p>
          <p class="mb-5 mt-2 font-medium">
            {{ t('hero.place') }}<template v-if="countdown"> · {{ countdown }}</template>
          </p>
          <a :href="googleUrl" target="_blank" rel="noopener" class="inline-block rounded-xl bg-espresso px-7 py-4 font-bold text-ivory transition hover:bg-umber">
            {{ t('hero.addToCalendar') }}
          </a>
        </div>
      </div>

      <div class="grid auto-rows-[160px] grid-cols-2 gap-3 sm:auto-rows-[200px] lg:grid-cols-4">
        <img src="/images/mains.jpg" :alt="t('alt.hands')" class="col-span-2 row-span-2 h-full w-full rounded-3xl object-cover" />
        <div class="flex flex-col justify-end rounded-3xl bg-butter p-5 sm:p-6">
          <span class="font-display text-3xl leading-none sm:text-4xl">{{ t('hero.countries') }}</span>
          <span class="text-sm font-medium sm:text-base">{{ t('hero.countriesList') }}</span>
        </div>
        <img src="/images/alliances.jpg" :alt="t('alt.rings')" class="h-full w-full rounded-3xl object-cover" />
        <img src="/images/roses.jpg" :alt="t('alt.roses')" class="h-full w-full rounded-3xl object-cover" />
        <div class="flex flex-col justify-end rounded-3xl bg-sage p-5 sm:p-6">
          <span class="font-display text-3xl leading-none sm:text-4xl">{{ t('hero.path') }}</span>
          <span class="text-sm font-medium sm:text-base">{{ t('hero.pathText') }}</span>
        </div>
      </div>
    </section>

    <!-- Notre histoire -->
    <section id="histoire" class="scroll-mt-4 bg-espresso px-4 py-20 text-ivory sm:px-6 sm:py-24">
      <div class="mx-auto max-w-6xl">
        <h2 class="mb-12 max-w-3xl font-display text-4xl leading-tight sm:text-6xl">{{ t('story.title') }}</h2>
        <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <article v-for="c in cities" :key="c.id">
            <img :src="c.src" :alt="c.alt" class="block h-60 w-full rounded-[20px] object-cover" loading="lazy" />
            <p class="mt-5 text-[15px] font-bold text-butter">{{ c.tag }}</p>
            <h3 class="mt-1 font-display text-3xl">{{ c.name }}</h3>
            <p>{{ c.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- Le jour J -->
    <section id="jour-j" class="mx-auto max-w-6xl scroll-mt-4 px-4 py-20 sm:px-6 sm:py-24">
      <h2 class="mb-10 font-display text-5xl sm:text-6xl">{{ t('details.title') }}</h2>
      <div class="grid gap-4 md:grid-cols-2">
        <article v-for="(e, i) in events" :key="e.key" class="relative flex min-h-[360px] items-end overflow-hidden rounded-3xl">
          <img
            :src="i === 0 ? '/images/eglise.jpg' : '/images/table.jpg'"
            :alt="i === 0 ? t('alt.church') : t('alt.reception')"
            class="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
          <div class="relative m-4 flex flex-1 flex-col gap-0.5 rounded-2xl p-6" :class="i === 0 ? 'bg-butter' : 'bg-batter'">
            <span class="font-display text-5xl leading-none">{{ e.time }}</span>
            <span class="text-xl font-bold">{{ e.label }}</span>
            <span>{{ e.name }} · {{ e.address }}</span>
            <a :href="e.mapUrl" target="_blank" rel="noopener" class="mt-2 font-bold underline underline-offset-4">{{ t('details.directions') }} ↗</a>
          </div>
        </article>
      </div>
      <p class="mt-8 text-umber">{{ t('details.tbc') }}</p>
    </section>

    <!-- Liste de cadeaux -->
    <section id="cadeaux" class="mx-auto max-w-6xl scroll-mt-4 px-4 pb-20 sm:px-6 sm:pb-24">
      <div class="mb-8 flex flex-wrap items-end justify-between gap-4">
        <h2 class="font-display text-5xl sm:text-6xl">{{ t('gifts.title') }}</h2>
        <p class="max-w-md">{{ t('gifts.intro') }}</p>
      </div>
      <ul class="border-b-[1.5px] border-espresso">
        <li v-for="g in gifts" :key="g.id" class="flex flex-wrap items-center gap-x-5 gap-y-2 border-t-[1.5px] border-espresso py-5">
          <img :src="g.src" alt="" class="h-20 w-20 rounded-2xl object-cover sm:h-24 sm:w-24" loading="lazy" />
          <span class="min-w-[220px] flex-1 font-display text-3xl">{{ g.title }}</span>
          <span class="basis-full sm:flex-[2] sm:basis-auto">{{ g.text }}</span>
          <a v-if="g.url" :href="g.url" target="_blank" rel="noopener" class="font-bold underline">{{ g.priceLabel }}</a>
          <span v-else class="font-bold">{{ g.priceLabel }}</span>
        </li>
      </ul>
    </section>

    <!-- Séjour à Lisbonne -->
    <section id="lisbonne" class="mx-auto max-w-6xl scroll-mt-4 px-4 pb-20 sm:px-6 sm:pb-24">
      <img src="/images/lisbonne.jpg" :alt="t('alt.lisbon')" class="mb-10 block h-56 w-full rounded-3xl object-cover sm:h-72" loading="lazy" />
      <h2 class="mb-3 font-display text-5xl sm:text-6xl">{{ t('stay.title') }}</h2>
      <p class="mb-8 max-w-xl">{{ t('stay.intro') }}</p>
      <div class="grid gap-6 md:grid-cols-3">
        <a v-for="s in stay" :key="s.id" :href="s.url" class="flex min-h-[220px] flex-col gap-2 rounded-3xl bg-batter p-8 transition hover:-translate-y-1 hover:shadow-lg">
          <StayIcon :name="s.id" class="h-8 w-8" />
          <h3 class="mt-3 font-display text-4xl leading-tight">{{ s.title }}</h3>
          <p class="flex-1">{{ s.text }}</p>
          <span class="font-bold">{{ t('stay.cta') }} →</span>
        </a>
      </div>
    </section>

    <!-- Participer -->
    <section id="participer" class="mx-auto max-w-6xl scroll-mt-4 px-4 pb-20 sm:px-6 sm:pb-24">
      <div class="flex flex-wrap overflow-hidden rounded-[32px] bg-sage">
        <img src="/images/alliances.jpg" :alt="t('alt.rings')" class="min-h-[260px] w-full min-w-0 flex-[1_1_360px] object-cover sm:min-h-[380px]" loading="lazy" />
        <div class="flex flex-[1_1_440px] flex-col gap-3 p-6 sm:p-12">
          <h2 class="font-display text-4xl leading-tight sm:text-5xl">{{ t('contribute.title') }}</h2>
          <p class="mb-2">{{ t('contribute.intro') }}</p>
          <div v-for="r in bankRows" :key="r.key" class="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-ivory px-5 py-4">
            <div class="min-w-0">
              <div class="text-sm font-bold">{{ r.label }}</div>
              <div class="break-all">{{ r.value }}</div>
            </div>
            <button type="button" class="rounded-[10px] bg-espresso px-4 py-2.5 text-[15px] font-bold text-ivory" @click="copy(r.key, r.value)">
              <span aria-live="polite">{{ copied === r.key ? t('contribute.copied') : t('contribute.copy') }}</span>
            </button>
          </div>
          <p class="text-sm">{{ t('contribute.holder') }} : {{ wedding.bank.holder }}</p>
          <a v-if="wedding.paypal" :href="wedding.paypal" target="_blank" rel="noopener" class="rounded-2xl bg-espresso p-4 text-center font-bold text-ivory transition hover:bg-umber">
            {{ t('contribute.paypal') }}
          </a>
        </div>
      </div>
    </section>

    <footer class="mx-auto flex max-w-6xl flex-wrap justify-between gap-4 border-t-[1.5px] border-espresso px-4 py-8 sm:px-6">
      <span class="font-display text-2xl">Francesco &amp; Maria Gracia</span>
      <span>
        {{ t('footer.contact') }} · <a :href="`mailto:${wedding.contactEmail}`" class="underline">{{ wedding.contactEmail }}</a>
      </span>
      <span>20.08.2027 · {{ t('footer.photos') }}</span>
    </footer>
  </div>
</template>
