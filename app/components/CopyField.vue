<script setup lang="ts">
const props = defineProps<{ label: string; value: string }>()
const { t } = useI18n()
const copied = ref(false)

async function copy() {
  try {
    await navigator.clipboard.writeText(props.value.replace(/\s/g, ''))
    copied.value = true
    setTimeout(() => (copied.value = false), 2000)
  } catch {
    // Presse-papiers indisponible : la valeur reste sélectionnable à la main
  }
}
</script>

<template>
  <div class="flex flex-col gap-2 border-b border-batter/60 py-3 last:border-0 sm:flex-row sm:items-center sm:justify-between">
    <div class="min-w-0">
      <p class="text-[0.65rem] font-bold uppercase tracking-[0.25em] text-cocoa-light">{{ label }}</p>
      <p class="break-all font-mono text-sm sm:text-base">{{ value }}</p>
    </div>
    <button
      type="button"
      class="shrink-0 self-start rounded-full border border-caramel px-4 py-1.5 text-xs font-bold uppercase tracking-widest transition hover:bg-caramel hover:text-ivory sm:self-auto"
      @click="copy"
    >
      <span aria-live="polite">{{ copied ? t('contribute.copied') : t('contribute.copy') }}</span>
    </button>
  </div>
</template>
