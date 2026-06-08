export type ServiceCard = {
  title: string
  description: string
}

export type CaseStudy = {
  title: string
  category: string
  image: string
  href: string
}

export const serviceCards: ServiceCard[] = [
  {
    title: 'Smart Contracts',
    description: 'Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus.',
  },
  {
    title: 'Blockchain Development',
    description: 'Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus.',
  },
  {
    title: 'Exchanges',
    description: 'Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus.',
  },
  {
    title: 'Training',
    description: 'Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus.',
  },
  {
    title: 'Smart Contracts Audit',
    description: 'Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus.',
  },
  {
    title: 'Wallets',
    description: 'Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus.',
  },
]

export const caseStudies: CaseStudy[] = [
  {
    title: 'BiSters Exchange',
    category: 'Cryptocurrency exchange',
    image: '/images/services/case-bisters.jpg',
    href: '#',
  },
  {
    title: 'Crypto Wallet',
    category: 'Cryptocurrency wallet',
    image: '/images/services/case-wallet.jpg',
    href: '#',
  },
  {
    title: 'BiTrust',
    category: 'Identity verification using smart contracts',
    image: '/images/services/case-bitrust.jpg',
    href: '#',
  },
  {
    title: 'Royal Music',
    category: 'Decentralised music platform built on Ethereum.',
    image: '/images/services/case-royal-music.jpg',
    href: '#',
  },
]
