<!-- Icônes de la section « Séjour à Lisbonne » -->
<script setup lang="ts">
defineProps<{ name: 'restaurants' | 'visit' | 'beaches' }>()
</script>

<template>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path v-if="name === 'restaurants'" d="M7 3v8M5 3v4a2 2 0 0 0 4 0V3M7 11v10M17 3c-2 0-3 2-3 6h3v12" />
    <path v-else-if="name === 'visit'" d="M3 21h18M5 21V10M19 21V10M9 21v-7M15 21v-7M3 10l9-6 9 6" />
    <template v-else>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M2 17c2.5 0 2.5-1.5 5-1.5s2.5 1.5 5 1.5 2.5-1.5 5-1.5 2.5 1.5 5 1.5M2 21c2.5 0 2.5-1.5 5-1.5s2.5 1.5 5 1.5 2.5-1.5 5-1.5 2.5 1.5 5 1.5" />
    </template>
  </svg>
</template>
