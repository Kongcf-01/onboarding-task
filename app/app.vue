<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
    <DojoPageTransition />
    <DojoCursor />
    <DojoScrollChrome />
    <DojoCookieBanner />
  </div>
</template>

<script setup lang="ts">
import DojoPageTransition from '~/components/DojoPageTransition.vue'
import DojoScrollChrome from '~/components/DojoScrollChrome.vue'
</script>
