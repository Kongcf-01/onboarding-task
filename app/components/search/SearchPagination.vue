<template>
  <nav
    v-if="totalPages > 1"
    class="navigation pagination relative mt-16 min-h-[56px] px-[15px] font-rubik text-[19px] font-bold text-ink max-[709px]:mt-10"
    aria-label="Posts"
  >
    <div class="nav-links relative flex min-h-[52px] items-center max-[709px]:pr-[106px] min-[710px]:pr-0">
      <span
        class="pointer-events-none absolute top-1/2 right-[-1px] z-[1] hidden -translate-y-1/2 text-[32px] leading-none text-white/30 max-[709px]:block"
        aria-hidden="true"
      >→</span>
      <span
        class="pointer-events-none absolute top-1/2 right-[55px] z-[1] hidden -translate-y-1/2 text-[32px] leading-none text-white/30 max-[709px]:block"
        aria-hidden="true"
      >←</span>

      <a
        v-if="currentPage > 1"
        :href="buildSearchResultsPath(query, currentPage - 1)"
        class="prev group/prev page-numbers mr-5 inline-flex h-[52px] items-center overflow-hidden text-[#C82D00] no-underline transition-colors hover:text-[#B12D86]"
        @click="onPageClick($event, currentPage - 1)"
      >
        <span class="-left-px mr-2.5 inline-flex size-8 shrink-0 items-center justify-center" aria-hidden="true">
          <i class="fe fe-arrow-left relative -top-px block text-[32px] leading-none before:block before:leading-none group-hover/prev:animate-pagination-hover-btn-prev" />
        </span>
        <span class="leading-8">Prev</span>
      </a>

      <div class="flex items-center gap-3">
        <template v-for="pageNumber in totalPages" :key="pageNumber">
          <span
            v-if="pageNumber === currentPage"
            class="page-numbers current text-[#B12D86]"
            aria-current="page"
          >
            <span class="sr-only">Page </span>{{ pageNumber }}
          </span>
          <a
            v-else
            :href="buildSearchResultsPath(query, pageNumber)"
            class="page-numbers text-[#17161A] no-underline transition-colors hover:text-[#B12D86] min-[710px]:inline max-[709px]:text-white/70 max-[709px]:opacity-30"
            @click="onPageClick($event, pageNumber)"
          >
            {{ pageNumber }}
          </a>
        </template>
      </div>

      <a
        v-if="currentPage < totalPages"
        :href="buildSearchResultsPath(query, currentPage + 1)"
        class="next group/next page-numbers ml-5 inline-flex h-[52px] items-center overflow-hidden text-ink no-underline transition-colors hover:text-[#B12D86] max-[709px]:text-[#C82D00] max-[709px]:opacity-100 max-[709px]:hover:text-[#B12D86] min-[710px]:text-ink"
        @click="onPageClick($event, currentPage + 1)"
      >
        <span class="leading-8">Next</span>
        <span class="ml-2.5 inline-flex size-8 shrink-0 items-center justify-center" aria-hidden="true">
          <i class="fe fe-arrow-right relative -top-px block text-[32px] leading-none before:block before:leading-none group-hover/next:animate-pagination-hover-btn-next" />
        </span>
      </a>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { buildSearchResultsPath } from '~/utils/search'

defineProps<{
  query: string
  currentPage: number
  totalPages: number
}>()

const emit = defineEmits<{
  'page-change': [page: number]
}>()

function onPageClick(event: MouseEvent, page: number) {
  event.preventDefault()
  emit('page-change', page)
}
</script>
