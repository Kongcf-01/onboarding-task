export type NavId = 'home' | 'landings'

export type NavSectionId = 'landings' | 'shop' | 'innerPages'

export type NavItem = {
  label: string
  to?: string
  nav?: NavId
}

export type NavSection = {
  id: NavSectionId
  label: string
  href: string
  items: NavItem[]
}

export const navSections: NavSection[] = [
  {
    id: 'landings',
    label: 'Landings',
    href: '#',
    items: [
      { label: 'ICO', to: '/ico', nav: 'landings' },
      { label: 'Crypto Wallet' },
      { label: 'Fintech Company' },
      { label: 'Crypto Blog' },
      { label: 'Shop' },
    ],
  },
  {
    id: 'shop',
    label: 'Shop',
    href: '#',
    items: [
      { label: 'My account' },
      { label: 'Checkout' },
      { label: 'Cart' },
    ],
  },
  {
    id: 'innerPages',
    label: 'Inner Pages',
    href: '#',
    items: [
      { label: 'Our Blog' },
      { label: 'Our Projects' },
      { label: 'Our Services', to: '/our-services' },
      { label: 'Our Team' },
      { label: 'Contact Us' },
      { label: 'Error 404' },
      { label: 'Coming Soon', to: '/coming-soon' },
    ],
  },
]

export function createExpandedMenusState(): Record<NavSectionId, boolean> {
  return Object.fromEntries(
    navSections.map((section) => [section.id, false]),
  ) as Record<NavSectionId, boolean>
}

export function normalizeNavPath(path: string): string {
  return path.replace(/\/$/, '') || '/'
}

export function isNavItemActive(
  item: NavItem,
  currentPath: string,
  activeNav: NavId | null,
): boolean {
  if (item.nav && activeNav === item.nav) return true
  if (!item.to) return false
  return normalizeNavPath(currentPath) === normalizeNavPath(item.to)
}

export function getNavSectionForPath(path: string): NavSectionId | null {
  const normalized = normalizeNavPath(path)
  for (const section of navSections) {
    if (section.items.some((item) => item.to && normalizeNavPath(item.to) === normalized)) {
      return section.id
    }
  }
  return null
}

function getNavTermVariants(term: string): string[] {
  const variants = new Set<string>([term])
  if (term.endsWith('s') && term.length > 2) variants.add(term.slice(0, -1))
  else if (term.length > 1) variants.add(`${term}s`)
  return [...variants]
}

function navTextMatchesTokens(text: string, tokens: string[]): boolean {
  const normalized = text.toLowerCase()
  const words: string[] = normalized.match(/[a-z0-9]+/g) ?? []

  return tokens.every((token) =>
    getNavTermVariants(token).some(
      (variant) => normalized.includes(variant) || words.includes(variant),
    ),
  )
}

export function getNavSectionsMatchingQuery(query: string): NavSectionId[] {
  const normalized = query.trim().toLowerCase()
  if (!normalized) return []

  const tokens = normalized.split(/\s+/).filter(Boolean)
  const matchingSections = new Set<NavSectionId>()

  for (const section of navSections) {
    const sectionMatches = navTextMatchesTokens(section.label, tokens)
    const itemMatches = section.items.some((item) =>
      navTextMatchesTokens(item.label, tokens),
    )

    if (sectionMatches || itemMatches) {
      matchingSections.add(section.id)
    }
  }

  return [...matchingSections]
}

export function isNavItemMatchingQuery(item: NavItem, query: string): boolean {
  const normalized = query.trim().toLowerCase().replace(/\s+/g, ' ')
  if (!normalized) return false

  const terms = normalized.split(' ').filter(Boolean)
  return navTextMatchesTokens(item.label, terms)
}
