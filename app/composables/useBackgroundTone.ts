const LIGHT_SECTION_SELECTOR =
  'section.bg-white, section[class*="bg-white"], section[class*="bg-[#f4f4f4]"], section[class*="bg-ico-bg-light"]'

const DARK_SECTION_SELECTOR =
  'section.bg-black, section[class*="bg-black"], section[class*="bg-[#111]"], section[class*="bg-dojo-blue"], section.dark-background, section[class*="bg-dojo-overlay"]'

function parseRgb(bg: string): [number, number, number] | null {
  const match = bg.match(/rgba?\(\s*(\d+)[,\s]+(\d+)[,\s]+(\d+)/)
  if (!match) return null
  return [Number(match[1]), Number(match[2]), Number(match[3])]
}

function luminance(r: number, g: number, b: number): number {
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255
}

function isLightBackgroundColor(bg: string): boolean {
  if (!bg || bg === 'transparent' || bg === 'rgba(0, 0, 0, 0)') return false
  const rgb = parseRgb(bg)
  if (!rgb) return false
  return luminance(...rgb) > 0.82
}

/** Returns true when the point sits on a light (white) background. */
export function isPointOnLightBackground(
  x: number,
  y: number,
  ignoreSelector = '#dojo-scroll-hint, #dojo-scroll-gotop',
): boolean {
  if (!import.meta.client) return false

  const ignored = document.querySelectorAll(ignoreSelector)
  ignored.forEach((el) => {
    if (el instanceof HTMLElement) el.style.pointerEvents = 'none'
  })

  const el = document.elementFromPoint(x, y)

  ignored.forEach((el) => {
    if (el instanceof HTMLElement) el.style.pointerEvents = ''
  })

  if (!el) return false
  if (el.closest(LIGHT_SECTION_SELECTOR)) return true
  if (el.closest(DARK_SECTION_SELECTOR)) return false

  let node: Element | null = el
  while (node && node !== document.body) {
    if (node instanceof HTMLElement) {
      if (node.matches(LIGHT_SECTION_SELECTOR)) return true
      if (node.matches(DARK_SECTION_SELECTOR)) return false
      const bg = getComputedStyle(node).backgroundColor
      if (isLightBackgroundColor(bg)) return true
      if (parseRgb(bg) && luminance(...parseRgb(bg)!) < 0.25) return false
    }
    node = node.parentElement
  }

  return false
}

export function sampleBackgroundTone(
  x: number,
  ys: number[],
  ignoreSelector = '#dojo-scroll-hint, #dojo-scroll-gotop',
): 'light' | 'dark' {
  const lightVotes = ys.filter((y) => isPointOnLightBackground(x, y, ignoreSelector)).length
  return lightVotes >= Math.ceil(ys.length / 2) ? 'light' : 'dark'
}
