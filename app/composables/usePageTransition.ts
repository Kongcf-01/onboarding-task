export type PreloaderPhase = 'hidden' | 'playing'

/** Circle grow finishes (~200ms delay + 1100ms outer ring) */
const CIRCLE_DONE_MS = 1300
const CURTAIN_MS = 1600

let transitionLock = false

export function usePageTransition() {
  const phase = useState<PreloaderPhase>('dojo-preloader-phase', () => 'playing')
  const animating = useState('dojo-preloader-animating', () => false)
  const showCurtain = useState('dojo-preloader-curtain', () => false)
  const initialDone = useState('dojo-preloader-initial-done', () => false)

  function wait(ms: number) {
    return new Promise<void>((resolve) => {
      window.setTimeout(resolve, ms)
    })
  }

  async function startPlaying() {
    showCurtain.value = false
    animating.value = false
    phase.value = 'playing'
    await nextTick()
    await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()))
    animating.value = true
  }

  async function runTransition(action?: () => void | Promise<void>) {
    if (!import.meta.client || transitionLock) return

    transitionLock = true

    try {
      await startPlaying()
      await wait(CIRCLE_DONE_MS)
      showCurtain.value = true
      if (action) await action()
      await wait(CURTAIN_MS)
    } finally {
      phase.value = 'hidden'
      animating.value = false
      showCurtain.value = false
      transitionLock = false
    }
  }

  async function navigateWithTransition(to: string) {
    const router = useRouter()
    if (to === router.currentRoute.value.path) {
      await runTransition()
      return
    }
    await runTransition(() => router.push(to))
  }

  async function playInitialPreloader() {
    if (!import.meta.client || transitionLock || initialDone.value) return
    await runTransition()
    initialDone.value = true
  }

  return {
    phase,
    animating,
    showCurtain,
    initialDone,
    navigateWithTransition,
    playInitialPreloader,
    runTransition,
  }
}
