<template>
  <aside class="page-sidebar sticky-sidebar w-full min-[992px]:sticky min-[992px]:top-40" role="complementary">
    <div class="widget mb-[60px] bg-white p-10">
      <SearchForm :initial-query="query" variant="page" @submit="emit('search', $event)" />
    </div>

    <div class="widget widget-recent-posts mb-[60px] bg-white p-10 pb-0">
      <div class="widget-title-container mb-6">
        <h5 class="m-0 font-rubik text-lg font-semibold tracking-[1px] text-ink uppercase">
          Recent Posts
        </h5>
      </div>
      <ul class="dojochain-widget-list m-0 list-none p-0">
        <li v-for="post in searchRecentPosts" :key="post.title" class="mb-4">
          <article class="post">
            <figure class="blog-grid-image m-0 overflow-hidden">
              <a :href="post.href" class="block">
                <img
                  :src="post.image"
                  :alt="post.title"
                  width="570"
                  height="320"
                  class="block h-auto w-full transition-transform duration-[1200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-105"
                  loading="lazy"
                />
              </a>
            </figure>
            <div class="blog-grid-content mb-4 w-full pt-[25px] text-left">
              <h3 class="blog-grid-headline m-0 mb-4 text-[20px] font-semibold leading-[1.3] text-[#17161A] min-[1600px]:text-[26px]">
                <a :href="post.href" class="inline-block w-full text-[#17161A] no-underline transition-colors hover:text-ico-red">{{ post.title }}</a>
              </h3>
              <div class="blog-grid-meta flex items-center justify-between">
                <div class="meta-holder">
                  <div class="author-attributes text-[13px] text-dojo-text-muted">
                    by <b class="font-semibold text-ink">{{ post.author }}</b> / {{ post.date }}
                  </div>
                </div>
              </div>
            </div>
          </article>
        </li>
      </ul>
    </div>

    <div class="widget widget-categories mb-[60px] bg-white p-10">
      <div class="widget-title-container mb-0">
        <h5 class="m-0 font-rubik text-lg font-semibold tracking-[1px] text-ink uppercase">
          Categories
        </h5>
      </div>
      <ul class="m-0 list-none border-t border-[#f3f3f7] p-0">
        <li
          v-for="category in searchCategories"
          :key="category.label"
          class="border-b border-[#f3f3f7] py-3 leading-[1.4] before:mr-2 before:inline-block before:text-base before:text-[#999] before:content-['→']"
        >
          <a
            :href="category.href"
            class="font-rubik text-ico-burgundy no-underline transition-colors hover:text-ico-red"
          >{{ category.label }}</a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { searchCategories, searchRecentPosts } from '~/utils/searchContent'

defineProps<{
  query: string
}>()

const emit = defineEmits<{
  search: [query: string]
}>()
</script>
