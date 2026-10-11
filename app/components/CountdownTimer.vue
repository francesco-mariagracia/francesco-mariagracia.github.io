<script setup lang="ts">
const props = defineProps<{ target: Date }>()
const { t } = useI18n()

// Démarre uniquement côté client pour éviter les écarts d'hydratation
const now = ref<number | null>(null)
let timer: ReturnType<typeof setInterval> | undefined

onMounted(() => {
  now.value = Date.now()
  timer = setInterval(() => (now.value = Date.now()), 1000)
})
onBeforeUnmount(() => clearInterval(timer))

const diff = computed(() => (now.value === null ? null : props.target.getTime() - now.value))

const parts = computed(() => {
  const ms = Math.max(diff.value ?? 0, 0)
  const s = Math.floor(ms / 1000)
  return [
    { value: Math.floor(s / 86400), label: t('countdown.days') },
    { value: Math.floor((s % 86400) / 3600), label: t('countdown.hours') },
    { value: Math.floor((s % 3600) / 60), label: t('countdown.minutes') },
    { value: s % 60, label: t('countdown.seconds') },
  ]
})

const DAY = 86_400_000
</script>

<template>
  <div aria-live="polite">
    <p v-if="diff !== null && diff <= 0 && diff > -DAY" class="font-serif text-3xl italic">{{ t('countdown.today') }}</p>
    <p v-else-if="diff !== null && diff <= -DAY" class="font-serif text-2xl italic">{{ t('countdown.past') }}</p>
    <div v-else class="grid grid-cols-4 gap-2 sm:gap-4">
      <div
        v-for="p in parts"
        :key="p.label"
        class="flex min-w-0 flex-col items-center rounded-xl bg-ivory/70 px-2 py-3 sm:px-5 sm:py-4"
      >
        <span class="font-serif text-3xl font-semibold tabular-nums sm:text-5xl">
          {{ diff === null ? '–' : String(p.value).padStart(2, '0') }}
        </span>
        <span class="mt-1 text-[0.6rem] uppercase tracking-[0.2em] text-cocoa-light sm:text-xs">{{ p.label }}</span>
      </div>
    </div>
  </div>
</template>
