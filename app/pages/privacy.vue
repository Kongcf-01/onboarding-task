<template>
  <div class="bg-ico-blue-dark">
    <DojoHeader variant="ico" />
    <main class="min-h-[60vh] bg-ico-blue-dark py-[140px] pb-20 text-white">
      <div class="mx-auto max-w-[1200px] px-6">
        <h1 class="mb-6 font-rubik text-[clamp(2rem,4vw,48px)] font-semibold tracking-[1.2px] uppercase">
          Privacy Policy
        </h1>
        <p class="mb-5 max-w-[720px] font-montserrat text-lg leading-[1.8] text-ico-text-light">
          We use cookies to ensure you get the best experience on our website. This page describes how
          DojoChain collects and uses information when you visit our ICO landing site.
        </p>
        <p class="mb-5 max-w-[720px] font-montserrat text-lg leading-[1.8] text-ico-text-light">
          For questions about your data, contact us at
          <a href="mailto:privacy@dojochain.example" class="text-white underline">privacy@dojochain.example</a>.
        </p>
        <NuxtLink
          to="/"
          class="mt-8 inline-block font-rubik font-semibold text-white no-underline hover:text-ico-red"
        >← Back to home</NuxtLink>
      </div>
    </main>
    <DojoFooter />
  </div>
</template>
