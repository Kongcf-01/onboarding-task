/** Matches `.data-reveal` class from `~/utils/reveal` (not an HTML attribute) */
function isRevealEl(el: HTMLElement): boolean {
  return el.classList.contains('data-reveal')
}

function queryRevealEls(root: ParentNode): HTMLElement[] {
  return [...root.querySelectorAll<HTMLElement>('.data-reveal')]
}

export function useIcoScrollReveal(rootRef: Ref<HTMLElement | null>) {
  const animReady = ref(false)
  let triggerObserver: IntersectionObserver | null = null
  let itemObserver: IntersectionObserver | null = null
  let scrollListener: (() => void) | null = null
  const revealedGroups = new Set<string>()
  const revealedItems = new Set<HTMLElement>()
  const revealedAllocationRows = new Set<HTMLElement>()

  function scheduleVisible(el: HTMLElement, delayMs = 0) {
    const apply = () => {
      const root = rootRef.value
      if (root && !root.hasAttribute('data-anim-ready')) {
        requestAnimationFrame(apply)
        return
      }
      el.setAttribute('data-revealed', '')
    }

    if (delayMs > 0) {
      window.setTimeout(apply, delayMs)
    } else {
      window.setTimeout(apply, 0)
    }
  }

  function isInViewport(el: HTMLElement): boolean {
    const rect = el.getBoundingClientRect()
    return rect.top < window.innerHeight && rect.bottom > 0
  }

  function revealScrollItem(el: HTMLElement) {
    if (revealedItems.has(el)) return
    revealedItems.add(el)

    if (isRevealEl(el)) {
      scheduleVisible(el, getRevealDelayMs(el))
    }
    queryRevealEls(el).forEach((child) => {
      scheduleVisible(child, getRevealDelayMs(child))
    })
  }

  function revealAllocationBlock(block: HTMLElement) {
    if (revealedItems.has(block)) return
    revealedItems.add(block)

    block.setAttribute('data-chart-visible', '')
    const circle = block.querySelector<HTMLElement>('[data-progress-circle]')
    const title = block.querySelector<HTMLElement>('[data-allocation-title]')
    if (circle) scheduleVisible(circle)
    if (title) scheduleVisible(title)

    window.setTimeout(() => {
      block.setAttribute('data-content-visible', '')
      const content = block.querySelector<HTMLElement>('[data-allocation-content]')
      if (content) scheduleVisible(content)
    }, 520)
  }

  function revealAllocationRow(row: HTMLElement) {
    if (revealedAllocationRows.has(row)) return
    revealedAllocationRows.add(row)

    row.querySelectorAll<HTMLElement>('[data-reveal-allocation]').forEach((block) => {
      revealAllocationBlock(block)
    })
  }

  function getRevealDelayMs(el: HTMLElement): number {
    const raw =
      el.style.getPropertyValue('--reveal-delay').trim()
      || getComputedStyle(el).getPropertyValue('--reveal-delay').trim()
    return Number.parseFloat(raw) || 0
  }

  function revealGroup(root: HTMLElement, group: string) {
    if (revealedGroups.has(group)) return
    revealedGroups.add(group)

    const items = new Set<HTMLElement>()

    root.querySelectorAll<HTMLElement>(`[data-reveal-group="${group}"]`).forEach((container) => {
      if (isRevealEl(container)) {
        items.add(container)
      }
      queryRevealEls(container).forEach((child) => {
        items.add(child)
      })
    })

    items.forEach((el) => {
      scheduleVisible(el, getRevealDelayMs(el))
    })
  }

  function handleIntersection(el: HTMLElement, root: HTMLElement) {
    if (el.hasAttribute('data-reveal-allocation-row')) {
      revealAllocationRow(el)
    } else if (el.hasAttribute('data-reveal-item')) {
      revealScrollItem(el)
    } else {
      const group = el.dataset.revealTrigger
      if (group) {
        revealGroup(root, group)
      } else if (isRevealEl(el)) {
        scheduleVisible(el, getRevealDelayMs(el))
      }
    }
  }

  function setupObservers(root: HTMLElement) {
    const triggers = root.querySelectorAll<HTMLElement>('[data-reveal-trigger]')
    const reveals = queryRevealEls(root)

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) {
      reveals.forEach((el) => el.setAttribute('data-revealed', ''))
      root.querySelectorAll<HTMLElement>('[data-reveal-allocation-row]').forEach(revealAllocationRow)
      triggers.forEach((el) => {
        const group = el.dataset.revealTrigger
        if (group) revealGroup(root, group)
      })
      return
    }

    triggerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          handleIntersection(entry.target as HTMLElement, root)
          triggerObserver?.unobserve(entry.target)
        })
      },
      { threshold: 0, rootMargin: '0px 0px 5% 0px' },
    )

    itemObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          handleIntersection(entry.target as HTMLElement, root)
          itemObserver?.unobserve(entry.target)
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )

    const observeTrigger = (el: HTMLElement) => {
      if (isInViewport(el)) {
        handleIntersection(el, root)
        return
      }
      triggerObserver?.observe(el)
    }

    const observeItem = (el: HTMLElement) => {
      if (isInViewport(el)) {
        handleIntersection(el, root)
        return
      }
      itemObserver?.observe(el)
    }

    triggers.forEach(observeTrigger)
    root.querySelectorAll<HTMLElement>('[data-reveal-item]').forEach(observeItem)
    root.querySelectorAll<HTMLElement>('[data-reveal-allocation-row]').forEach(observeItem)
    reveals.forEach((el) => {
      if (
        el.dataset.revealGroup
        || el.dataset.revealTrigger
        || el.closest('[data-reveal-item]')
        || el.closest('[data-reveal-allocation]')
        || el.closest('[data-reveal-allocation-row]')
      ) {
        return
      }
      observeItem(el)
    })

    scrollListener = () => {
      triggers.forEach((el) => {
        if (el.dataset.revealTrigger && revealedGroups.has(el.dataset.revealTrigger)) return
        if (isInViewport(el)) {
          handleIntersection(el, root)
          triggerObserver?.unobserve(el)
        }
      })
    }
    window.addEventListener('scroll', scrollListener, { passive: true })
  }

  onMounted(async () => {
    if (!import.meta.client) return

    animReady.value = true
    await nextTick()
    await nextTick()

    const root = rootRef.value
    if (!root) return

    setupObservers(root)
  })

  onBeforeUnmount(() => {
    triggerObserver?.disconnect()
    itemObserver?.disconnect()
    if (scrollListener) {
      window.removeEventListener('scroll', scrollListener)
    }
  })

  return { animReady }
}
