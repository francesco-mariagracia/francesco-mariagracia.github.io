<!-- Sélecteur de langue en liste déroulante (version carnet) -->
<script setup lang="ts">
const { locale, locales, t } = useI18n()
const switchLocalePath = useSwitchLocalePath()

function change(e: Event) {
  navigateTo(switchLocalePath((e.target as HTMLSelectElement).value as typeof locale.value))
}
</script>

<template>
  <label class="flex items-center gap-2 text-[15px] font-medium">
    {{ t('nav.language') }}
    <select
      :value="locale"
      class="rounded-lg border-[1.5px] border-bark bg-ivory px-2.5 py-1.5 text-bark"
      @change="change"
    >
      <option v-for="l in locales" :key="l.code" :value="l.code">{{ l.name }}</option>
    </select>
  </label>
</template>
