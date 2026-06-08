<template>
  <li class="search-menu-btn group relative shrink-0 list-none">
    <a
      href="#"
      class="icon-link group/search flex items-center gap-0.5 px-4 text-base no-underline"
      aria-label="Search"
      @click.prevent
    >
      <i
        class="fe fe-search block text-base leading-none text-white/90 transition-colors duration-200"
        :class="iconHoverClass"
        aria-hidden="true"
      />
    </a>

    <div
      class="pointer-events-none absolute top-[calc(100%+15px)] -right-[30px] z-[999] w-[380px] opacity-0 transition-opacity duration-200 before:absolute before:-top-[15px] before:right-0 before:left-0 before:h-[15px] before:content-[''] group-hover:pointer-events-auto group-hover:opacity-100"
    >
      <div
        class="rounded-b-lg border-t-4 bg-white p-5 shadow-[0_0_35px_rgba(0,0,0,0.1)]"
        :class="borderClass"
      >
        <form id="side-search" class="search-form relative" role="search" @submit.prevent="submit">
          <label class="m-0 block">
            <span class="sr-only">Search for:</span>
            <input
              v-model="query"
              type="search"
              name="s"
              class="hide-search-cancel box-border min-h-[59px] w-full rounded-full border border-transparent bg-[#f8f9fa] py-3.5 pl-5 pr-[62px] font-rubik text-base text-ink outline-none transition-[border-color] duration-200 placeholder:text-[#8a8a8a] focus:border-[#e2e2e2]"
              placeholder="Search ..."
            />
          </label>
          <button
            type="submit"
            class="search-submit absolute top-[2px] right-[2px] flex h-[55px] w-[55px] cursor-pointer items-center justify-center rounded-full border-0 bg-[#111] text-white"
            aria-label="Search"
          >
            <span class="sr-only">Search</span>
            <i class="fe fe-search text-xl leading-none" aria-hidden="true" />
          </button>
        </form>
      </div>
    </div>
  </li>
</template>

<script setup lang="ts">
const props = defineProps<{
  borderClass: string
  iconHoverClass: string
  initialQuery?: string
}>()

const emit = defineEmits<{
  submit: [query: string]
}>()

const query = ref('')

watch(
  () => props.initialQuery,
  (value) => {
    query.value = value ?? ''
  },
  { immediate: true },
)

function submit() {
  const trimmed = query.value.trim()
  if (!trimmed) return
  emit('submit', trimmed)
}
</script>
