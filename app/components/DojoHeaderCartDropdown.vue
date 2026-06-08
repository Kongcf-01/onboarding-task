<template>
  <li class="shopping-cart-menu-btn group relative shrink-0 list-none">
    <a
      href="#"
      class="icon-link flex cursor-default items-center gap-0.5 pr-0 pl-4 text-base text-white/90 no-underline transition-colors"
      :class="groupHoverTextClass"
      aria-label="Cart"
      @click.prevent
    >
      <i class="fe fe-shopping-cart block h-4 w-[17px] text-base leading-4" aria-hidden="true" />
      <sup class="text-[10px] font-semibold">0</sup>
    </a>

    <div
      class="pointer-events-none absolute top-[calc(100%+15px)] -right-[30px] z-[999] w-[420px] opacity-0 transition-opacity duration-200 before:absolute before:-top-[15px] before:right-0 before:left-0 before:h-[15px] before:content-[''] group-hover:pointer-events-auto group-hover:opacity-100"
    >
      <div
        class="rounded-b-lg border-t-4 bg-white p-10 shadow-[0_0_35px_rgba(0,0,0,0.1)]"
        :class="borderClass"
      >
        <p class="m-0 mb-5 font-rubik text-lg font-semibold text-ink">
          Cart review
        </p>
        <div class="widget-shopping-cart-content">
          <p class="woocommerce-mini-cart__empty-message m-0 font-rubik text-base text-ink">
            No products in the cart.
          </p>
        </div>
      </div>
    </div>
  </li>
</template>

<script setup lang="ts">
defineProps<{
  borderClass: string
  groupHoverTextClass: string
}>()
</script>
