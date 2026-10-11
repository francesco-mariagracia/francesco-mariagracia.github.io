import { wedding } from '~/config/wedding'

const DAY = 86_400_000

/** Nombre de jours avant le mariage, calculé côté client pour éviter les écarts d'hydratation. */
export function useCountdown() {
  const days = ref<number | null>(null)
  const status = ref<'before' | 'today' | 'after'>('before')
  onMounted(() => {
    const diff = new Date(wedding.date).getTime() - Date.now()
    days.value = Math.max(Math.ceil(diff / DAY), 0)
    status.value = diff > 0 ? 'before' : diff > -DAY ? 'today' : 'after'
  })
  return { days, status }
}

/** Liens « Ajouter au calendrier » (Google Agenda et fichier .ics). */
export function useCalendar() {
  const { t } = useI18n()
  // Format UTC compact : 20270820T140000Z
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

  return { googleUrl, icsUrl }
}

/** Copie dans le presse-papiers avec un retour visuel temporaire. */
export function useCopy() {
  const copied = ref<string | null>(null)
  async function copy(key: string, value: string) {
    try {
      await navigator.clipboard.writeText(value.replace(/\s/g, ''))
      copied.value = key
      setTimeout(() => (copied.value = null), 2000)
    } catch {
      // Presse-papiers indisponible : la valeur reste sélectionnable à la main
    }
  }
  return { copied, copy }
}

/** Contenu commun aux deux versions du site. */
export function useWeddingContent() {
  const { t, n } = useI18n()

  const cities = computed(() =>
    [
      { id: 'pescara', image: 'trabocchi' },
      { id: 'grenoble', image: 'grenoble' },
      { id: 'puertocabello', image: 'puertocabello' },
      { id: 'lisbonne', image: 'lisbonne' },
    ].map((c) => ({
      ...c,
      src: `/images/${c.image}.jpg`,
      name: t(`story.cities.${c.id}.name`),
      tag: t(`story.cities.${c.id}.tag`),
      text: t(`story.cities.${c.id}.text`),
      long: t(`story.cities.${c.id}.long`),
      alt: t(`story.cities.${c.id}.alt`),
    })),
  )

  const events = computed(() => [
    { key: 'ceremony', label: t('details.ceremony'), ...wedding.ceremony },
    { key: 'reception', label: t('details.reception'), ...wedding.reception },
  ])

  const gifts = computed(() =>
    wedding.gifts.map((g) => ({
      ...g,
      src: `/images/${g.image}.jpg`,
      title: t(`gifts.items.${g.id}.title`),
      text: t(`gifts.items.${g.id}.text`),
      priceLabel:
        g.price === null
          ? t('gifts.free')
          : t('gifts.about', { price: n(g.price, { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }) }),
    })),
  )

  const stay = computed(() =>
    (['restaurants', 'visit', 'beaches'] as const).map((id) => ({
      id,
      url: wedding.stay[id],
      title: t(`stay.${id}.title`),
      text: t(`stay.${id}.text`),
    })),
  )

  const navLinks = computed(() => [
    { href: '#histoire', label: t('nav.story') },
    { href: '#jour-j', label: t('nav.details') },
    { href: '#cadeaux', label: t('nav.gifts') },
    { href: '#lisbonne', label: t('nav.stay') },
    { href: '#participer', label: t('nav.contribute') },
  ])

  return { wedding, cities, events, gifts, stay, navLinks }
}
