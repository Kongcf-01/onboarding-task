<template>
  <article class="search-result-card border-b border-[#f3f3f7] pb-12 last:border-b-0 last:pb-0">
    <div class="dojochain-search-card-body-meta mb-4 flex items-center gap-1.5 font-rubik text-[13px] text-dojo-text-muted">
      <span class="capitalize">{{ entry.type }}</span>
      <span aria-hidden="true">·</span>
      <span>{{ entry.readTime }}</span>
    </div>

    <h2 class="entry-title m-0 mb-5 font-rubik text-[28px] font-semibold leading-[1.2] text-ink uppercase min-[768px]:text-[32px]">
      <a
        :href="entry.href"
        class="text-ink no-underline transition-colors hover:text-ico-red"
        @click="onTitleClick"
      >{{ entry.title }}</a>
    </h2>

    <div class="entry-summary font-montserrat text-base leading-[1.8] text-dojo-text-muted">
      <p class="m-0">
        {{ entry.excerpt }}
        <a
          :href="entry.href"
          class="font-rubik text-ico-red no-underline transition-colors hover:text-ico-red-hover"
          @click="onTitleClick"
        >… Continue reading</a>
      </p>
    </div>

    <footer class="entry-footer mt-8 flex items-center justify-between border-t border-[#f3f3f7] pt-6">
      <div class="flex flex-wrap items-center gap-x-1 font-rubik text-sm font-semibold tracking-[0.04em] uppercase">
        <span class="text-[#999999]">By</span>
        <span class="text-[#B12D86]">{{ entry.author }}</span>
        <span class="text-[#999999]">On</span>
        <span class="text-[#B12D86]">{{ entry.date }}</span>
      </div>
      <div class="flex items-center gap-1.5 font-rubik text-sm font-semibold text-[#B12D86]">
        <i class="fe fe-message-circle text-sm leading-none" aria-hidden="true" />
        <span>{{ entry.comments }}</span>
      </div>
    </footer>
  </article>
</template>

<script setup lang="ts">
import type { SearchResultEntry } from '~/utils/searchContent'

const props = defineProps<{
  entry: SearchResultEntry
}>()

const { navigateWithTransition } = usePageTransition()

async function onTitleClick(event: MouseEvent) {
  if (!props.entry.href || props.entry.href === '#') return
  event.preventDefault()
  await navigateWithTransition(props.entry.href)
}
</script>
