export function useLockedViewport() {
  function apply(el: HTMLElement) {
    const width = window.innerWidth
    const height = window.innerHeight
    el.style.width = `${width}px`
    el.style.height = `${height}px`
    return { width, height }
  }

  return { apply }
}
