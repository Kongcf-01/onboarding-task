<template>
  <li class="shopping-cart-menu-btn group relative shrink-0 list-none">
    <a
      href="#"
      class="icon-link flex cursor-pointer items-center gap-0.5 pr-0 pl-4 text-base text-white/90 no-underline transition-colors duration-150"
      :class="iconHoverClass"
      aria-label="Cart"
      @click.prevent
    >
      <i class="fe fe-shopping-cart block h-4 w-[17px] text-base leading-4" aria-hidden="true" />
      <sup class="text-[10px] font-semibold">0</sup>
    </a>

    <div
      class="invisible absolute top-full -right-[30px] z-[999] w-[360px] opacity-0 transition-opacity duration-150 ease-out group-hover:visible group-hover:opacity-100"
    >
      <div class="h-6 shrink-0" aria-hidden="true" />
      <div
        class="rounded-b-lg border-t-4 bg-white p-6 shadow-[0_0_35px_rgba(0,0,0,0.1)]"
        :class="borderClass"
      >
        <p class="m-0 mb-3 font-rubik text-base font-semibold text-ink">
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
  iconHoverClass: string
}>()
</script>
