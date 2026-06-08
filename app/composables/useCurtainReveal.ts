export function useCurtainReveal(imageLinkRef: Ref<HTMLElement | null>) {
  const isAnimated = ref(false)

  const imgClasses = computed(() =>
    isAnimated.value
      ? 'translate-x-0 transition-transform duration-[1200ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-105 motion-reduce:group-hover:scale-100'
      : 'translate-x-[150px] transition-transform duration-[2000ms] ease-[cubic-bezier(0.15,0.3,0.16,0.96)]',
  )

  let observer: IntersectionObserver | null = null
  let revealObserver: MutationObserver | null = null

  function reveal() {
    isAnimated.value = true
    observer?.disconnect()
    observer = null
    revealObserver?.disconnect()
    revealObserver = null
  }

  function watchRevealParent(el: HTMLElement) {
    const parent = el.closest<HTMLElement>('.data-reveal')
    if (!parent) return false

    if (parent.hasAttribute('data-revealed')) {
      reveal()
      return true
    }

    revealObserver = new MutationObserver(() => {
      if (parent.hasAttribute('data-revealed')) reveal()
    })
    revealObserver.observe(parent, { attributes: true, attributeFilter: ['data-revealed'] })
    return true
  }

  onMounted(() => {
    if (!import.meta.client) return

    const el = imageLinkRef.value
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      isAnimated.value = true
      return
    }

    if (watchRevealParent(el)) return

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) reveal()
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -5% 0px' },
    )

    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      requestAnimationFrame(reveal)
    } else {
      observer.observe(el)
    }
  })

  onBeforeUnmount(() => {
    observer?.disconnect()
    revealObserver?.disconnect()
  })

  return { isAnimated, imgClasses }
}
