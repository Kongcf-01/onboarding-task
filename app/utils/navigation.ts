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
      { label: 'ICO', to: '/', nav: 'landings' },
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
      { label: 'Our Services' },
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
