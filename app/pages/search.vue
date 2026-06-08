<template>
  <div class="bg-white">
    <DojoHeader variant="default" />

    <header
      class="page-title-heading relative w-full bg-[#1f1f1f] bg-[url('/images/search/blog-banner.jpg')] bg-cover bg-center bg-no-repeat px-0 py-10 pt-28 text-white min-[992px]:pt-32"
    >
      <div class="relative z-10 mx-auto max-w-[1240px] px-6">
        <h1 class="entry-title m-0 my-4 font-rubik text-xl font-semibold tracking-[0.08em] text-white uppercase min-[768px]:text-2xl">
          Search Results for: <span>{{ displayQuery }}</span>
        </h1>
      </div>
      <div
        class="dojochain-page-title-shadow pointer-events-none absolute inset-0 z-[1] bg-[rgba(19,21,27,0.8)]"
        aria-hidden="true"
      />
    </header>

    <div id="search-results-content" class="w-full scroll-mt-28 py-20 min-[992px]:py-24">
      <div class="mx-auto max-w-[1240px] px-6">
        <div class="grid grid-cols-1 items-start gap-y-12 min-[992px]:grid-cols-12 min-[992px]:gap-x-0 min-[992px]:gap-y-0">
          <div class="min-[992px]:col-span-8 min-[992px]:pr-[15px] min-[1025px]:pr-10">
            <section v-if="results.length" class="search-results">
              <div class="flex flex-col gap-12">
                <SearchResultCard
                  v-for="entry in pagedResults"
                  :key="entry.title"
                  :entry="entry"
                />
              </div>

              <SearchPagination
                :query="displayQuery"
                :current-page="currentPage"
                :total-pages="totalPages"
                @page-change="onPageChange"
              />
            </section>

            <section v-else class="no-results not-found">
              <header class="page-header m-0 border-0 p-0">
                <h1 class="page-title m-0 font-rubik text-[23px] font-normal leading-[1.22] text-ink-muted">
                  Nothing Found
                </h1>
              </header>

              <div class="page-content">
                <p class="mb-8 font-montserrat text-base leading-[1.8] text-dojo-text-muted">
                  Sorry, but nothing matched your search terms. Please try again with some different keywords.
                </p>
                <SearchForm :initial-query="displayQuery" variant="page" @submit="onSearch" />
              </div>
            </section>
          </div>

          <div class="min-[992px]:col-span-4">
            <SearchSidebar :query="displayQuery" @search="onSearch" />
          </div>
        </div>
      </div>
    </div>

    <DojoFooter />
  </div>
</template>

<script setup lang="ts">
import {
  buildSearchResultsPath,
  normalizeSearchQuery,
  paginateSearchResults,
  searchEntries,
} from '~/utils/search'

definePageMeta({
  middleware: (to) => {
    const term = normalizeSearchQuery(String(to.query.s ?? ''))
    if (!term) return navigateTo('/')
  },
})

const route = useRoute()
const { navigateWithTransition } = usePageTransition()

const displayQuery = computed(() => String(route.query.s ?? '').trim())
const currentPage = computed(() => {
  const page = Number(route.query.page ?? 1)
  return Number.isFinite(page) && page > 0 ? page : 1
})

const results = computed(() => searchEntries(displayQuery.value))
const pagination = computed(() => paginateSearchResults(results.value, currentPage.value))
const pagedResults = computed(() => pagination.value.items)
const totalPages = computed(() => pagination.value.totalPages)

useHead({
  title: () => {
    const pageSuffix = currentPage.value > 1 ? ` – Page ${currentPage.value}` : ''
    return `Search Results for “${displayQuery.value}”${pageSuffix} – DojoChain`
  },
})

function scrollToSearchResults() {
  if (!import.meta.client) return
  nextTick(() => {
    const el = document.getElementById('search-results-content')
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY - 100
    window.scrollTo({ top: Math.max(0, top), left: 0, behavior: 'auto' })
  })
}

watch(
  () => [route.query.s, route.query.page] as const,
  (next, prev) => {
    if (!import.meta.client) return
    if (prev && next[0] === prev[0] && next[1] === prev[1]) return
    scrollToSearchResults()
  },
)

onMounted(() => {
  scrollToSearchResults()
})

async function onSearch(query: string) {
  const trimmed = query.trim()
  if (!trimmed) return
  await navigateWithTransition(buildSearchResultsPath(trimmed))
}

async function onPageChange(page: number) {
  await navigateWithTransition(buildSearchResultsPath(displayQuery.value, page))
  scrollToSearchResults()
}
</script>
