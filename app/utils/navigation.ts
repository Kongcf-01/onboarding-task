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

export function getNavSectionsMatchingQuery(query: string): NavSectionId[] {
  const normalized = query.trim().toLowerCase()
  if (!normalized) return []

  const tokens = normalized.split(/\s+/).filter(Boolean)
  const matchingSections = new Set<NavSectionId>()

  for (const section of navSections) {
    const sectionMatches = tokens.every((token) => section.label.toLowerCase().includes(token))
    const itemMatches = section.items.some((item) =>
      tokens.every((token) => item.label.toLowerCase().includes(token)),
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
  const label = item.label.toLowerCase()
  const labelWords: string[] = label.match(/[a-z0-9]+/g) ?? []

  if (terms.length === 1) {
    const term = terms[0]
    return Boolean(term && labelWords.includes(term))
  }

  if (label.includes(normalized)) return true
  return terms.every((term) => labelWords.includes(term))
}
