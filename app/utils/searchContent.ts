export type SearchRecentPost = {
  title: string
  image: string
  author: string
  date: string
  href: string
}

export type SearchCategory = {
  label: string
  href: string
}

export type SearchResultEntry = {
  title: string
  type: 'page' | 'post'
  readTime: string
  excerpt: string
  href: string
  author: string
  date: string
  comments: number
  keywords: string
}

export const SEARCH_RESULTS_PER_PAGE = 4

export const searchableEntries: SearchResultEntry[] = [
  {
    title: 'Our Services',
    type: 'page',
    readTime: '1 Min Read',
    excerpt:
      'What we offer. Our Services Smart Contracts Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus. Blockchain Development Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus. Exchanges Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus. Training Aliquam erat volutpat. Nam dui mi, tincidunt quis,',
    href: '/our-services',
    author: 'DojoChain',
    date: 'July 5, 2021',
    comments: 0,
    keywords: 'our services smart contracts blockchain development exchanges training wallets audit',
  },
  {
    title: 'Fintech Company',
    type: 'page',
    readTime: '2 Mins Read',
    excerpt:
      'Blockchain Technologies, FinTech and Digital Currencies Investments Our company specializes in Cryptocurrency, FinTech and Blockchain software development services, Initial Coin Offering (ICO) and Digital Currencies Investments Start Discovering Contact Us 45M Transactions 45700 DojoChain Wallets 240+ Online Experts 20+ Years of Experience What makes us stand out. Why DojoChain Technical Expertise in Cryptocurrencies and Blockchain',
    href: '#',
    author: 'DojoChain',
    date: 'June 15, 2021',
    comments: 0,
    keywords: 'fintech company blockchain cryptocurrency investments services',
  },
  {
    title: 'Landing Shop',
    type: 'page',
    readTime: '1 Min Read',
    excerpt:
      'GEFORCE RTX 3090 The GeForce RTX™ 3090 is a big ferocious GPU (BFGPU) with TITAN class performance. It’s powered by Ampere—NVIDIA’s 2nd gen RTX architecture—doubling down on ray tracing and AI performance with enhanced Ray Tracing (RT) Cores, Tensor Cores, and new streaming multiprocessors. Shop Now Explore Start mining for yourself and enjoy the fruits',
    href: '#',
    author: 'DojoChain',
    date: 'July 1, 2021',
    comments: 0,
    keywords: 'landing shop geforce rtx mining shop services',
  },
  {
    title: 'Crypto Blog',
    type: 'page',
    readTime: '2 Mins Read',
    excerpt:
      'Crypto News Blockchain and cryptocurrencies related news. Cryptocurrency Technology 2 Mins Read Russian Scientists Arrested for Crypto Mining at Nuclear Lab By agurghis On April 12, 2016 0 Cryptocurrency Technology 2 Mins Read Everything you need to know about bitcoin By agurghis On April 13, 2016 0 Cryptocurrency Technology 2 Mins Read Sweden Settles Debt',
    href: '#',
    author: 'DojoChain',
    date: 'June 29, 2021',
    comments: 0,
    keywords: 'crypto blog news blockchain cryptocurrency services',
  },
  {
    title: 'ICO',
    type: 'page',
    readTime: '3 Mins Read',
    excerpt:
      'Time left to ICO Days Hours Minutes Seconds Music Platform Based on Blockchain The worlds first decentralised music platform built on Ethereum Try Demo Token Distribution Music Revolution is here Streaming platforms such as Spotify, Deezer , and Apple Music take up to 80% of artist’s revenue, and while larger artists can accept it, small',
    href: '/ico',
    author: 'DojoChain',
    date: 'May 31, 2021',
    comments: 0,
    keywords: 'ico landing music platform blockchain ethereum token services',
  },
]

export const searchRecentPosts: SearchRecentPost[] = [
  {
    title: 'Maxwell Eyes Bitcoin Smart Contracts After Blockstream',
    image: '/images/search/post-1.jpg',
    author: 'DojoChain',
    date: 'May 28, 2018',
    href: '#',
  },
  {
    title: 'Binance Resumes Services as System Upgrade Completes',
    image: '/images/search/post-2.jpg',
    author: 'DojoChain',
    date: 'May 28, 2018',
    href: '#',
  },
  {
    title: 'Korean Exchange Bithumb Is Accepting New Users Again',
    image: '/images/search/post-3.jpg',
    author: 'DojoChain',
    date: 'May 28, 2018',
    href: '#',
  },
]

export const searchCategories: SearchCategory[] = [
  { label: 'Bitcoin', href: '#' },
  { label: 'Blockchain', href: '#' },
  { label: 'Cryptocurrency', href: '#' },
  { label: 'Currency Market', href: '#' },
  { label: 'DojoChain', href: '#' },
  { label: 'Security', href: '#' },
  { label: 'Technology', href: '#' },
]
