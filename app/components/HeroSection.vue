<script setup lang="ts">
import { wedding } from '~/config/wedding'

const { t } = useI18n()
const target = new Date(wedding.date)

// Format UTC compact pour Google Agenda / iCalendar : 20270820T130000Z
const toCal = (d: string) => new Date(d).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')
const title = 'Francesco & Maria Gracia'
const location = `${wedding.ceremony.name}, ${wedding.ceremony.address}`

const googleUrl = computed(() => {
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: title,
    dates: `${toCal(wedding.date)}/${toCal(wedding.end)}`,
    details: t('meta.description'),
    location,
  })
  return `https://calendar.google.com/calendar/render?${params}`
})

const icsUrl = computed(() => {
  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//francesco-mariagracia//wedding//FR',
    'BEGIN:VEVENT',
    'UID:wedding-20270820@francesco-mariagracia.github.io',
    `DTSTAMP:${toCal('2026-01-01T00:00:00Z')}`,
    `DTSTART:${toCal(wedding.date)}`,
    `DTEND:${toCal(wedding.end)}`,
    `SUMMARY:${title}`,
    `LOCATION:${location.replace(/,/g, '\\,')}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n')
  return `data:text/calendar;charset=utf-8,${encodeURIComponent(ics)}`
})
</script>

<template>
  <section id="top" class="relative overflow-hidden bg-gradient-to-b from-butter via-batter/70 to-ivory">
    <!-- Formes décoratives -->
    <div class="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-sage/50 blur-3xl" aria-hidden="true" />
    <div class="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-caramel/30 blur-3xl" aria-hidden="true" />

    <div class="relative mx-auto flex min-h-[calc(100svh-57px)] max-w-4xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6">
      <p class="eyebrow mb-6">{{ t('hero.eyebrow') }}</p>
      <h1 class="font-script text-6xl leading-tight text-cocoa sm:text-8xl md:text-9xl">
        Francesco
        <span class="my-2 block font-serif text-3xl italic text-cocoa-light sm:text-4xl">&amp;</span>
        Maria Gracia
      </h1>

      <div class="my-10"><Ornament /></div>

      <p class="font-serif text-2xl tracking-wide sm:text-3xl">{{ t('hero.date') }}</p>
      <p class="mt-2 text-sm uppercase tracking-[0.3em] text-cocoa-light">20 · 08 · 2027</p>

      <div class="mt-12 w-full max-w-xl">
        <CountdownTimer :target="target" />
      </div>

      <div class="mt-12 flex flex-col gap-3 sm:flex-row">
        <a :href="googleUrl" target="_blank" rel="noopener" class="btn-primary">
          <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18" /></svg>
          {{ t('hero.addToCalendar') }}
        </a>
        <a :href="icsUrl" download="francesco-maria-gracia.ics" class="btn-outline">.ics</a>
      </div>
    </div>
  </section>
</template>
