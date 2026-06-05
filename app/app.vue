<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
    <DojoPageTransition />
    <DojoCursor />
    <DojoGoTop />
    <DojoCookieBanner />
  </div>
</template>

<script setup lang="ts">
import DojoPageTransition from '~/components/DojoPageTransition.vue'
</script>
