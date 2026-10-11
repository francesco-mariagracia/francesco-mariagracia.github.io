<script setup lang="ts">
defineProps<{ eyebrow: string; title: string }>()
</script>

<template>
  <header class="mb-12 space-y-4 sm:mb-16">
    <p class="eyebrow">{{ eyebrow }}</p>
    <h2 class="section-title">{{ title }}</h2>
    <Ornament />
  </header>
</template>
