export type HomeDemo = {
  title: string
  image: string
  href: string
}

export type HomeFeature = {
  title: string
  description: string
}

export type HomeTestimonial = {
  quote: string
  author: string
}

export type HomeFaqItem = {
  question: string
  answer: string
}

export const homeHeroPerks = [
  { title: 'Install\nin minutes', icon: 'install' },
  { title: 'No coding\nrequired', icon: 'code' },
  { title: 'Easy to\ncustomize', icon: 'customize' },
  { title: 'Lifetime\nupdates', icon: 'updates' },
] as const

export const homeDemos: HomeDemo[] = [
  { title: 'ICO', image: '/images/home/ico-small.jpg', href: '/ico' },
  { title: 'Crypto News', image: '/images/home/news-small.jpg', href: '#' },
  { title: 'Shop', image: '/images/home/shop-small.jpg', href: '#' },
  { title: 'Crypto Wallet', image: '/images/home/wallet-small.jpg', href: '#' },
  { title: 'Fintech Company', image: '/images/home/fintech-small.jpg', href: '#' },
  { title: 'More Soon', image: '/images/home/more-small.jpg', href: '#' },
]

export const homeFeatures: HomeFeature[] = [
  {
    title: 'Elementor',
    description: 'Create beautiful sites and pages with Elementor\'s drag-and-drop interface.',
  },
  {
    title: 'One Click Install',
    description: 'With just one click, you can install any demo.',
  },
  {
    title: 'Responsive Ready',
    description: 'DojoChain always looks great in any browser or device.',
  },
  {
    title: 'Lifetime Updates',
    description: 'All users will get free and lifetime updates, even manual updates takes on click.',
  },
  {
    title: 'Unlimited Colors',
    description: 'DojoChain comes with a color picker. Just select your favorite and enjoy the magic.',
  },
  {
    title: 'Google Fonts',
    description: 'The theme comes with a collection of Google fonts.',
  },
]

export const elementorChecklist = [
  'Drag and Drop Editor',
  'No Coding Required',
  '30+ Custom Elements',
  'Visual Effects',
  'Free of Charge',
]

export const wooChecklist = [
  'Set Up Your Store',
  'Flexible and Secure Payments',
  'Manage Orders On the Go',
]

export const customizableChecklist = [
  'Create Your Own Color Palettes',
  'Google Fonts',
  'Different Menu Layouts',
  'Front-End Page Builder',
]

export const homeTestimonials: HomeTestimonial[] = [
  {
    quote:
      '"Nothing is perfect in this life, but this theme is REALLY unique and the support is PERFECT, he understands what you want, explains it to you and helps you as soon as possible."',
    author: 'konitmanager',
  },
  {
    quote:
      '"Amazing support. Alex help me modify what I need on his theme and make it perfect for every owner of car rental. Easy setup and good quality theme, recommend his theme and moreover his support along this short period of time! Many thanks!"',
    author: 'nvr21',
  },
  {
    quote:
      '"Nice theme with great UI design and very easy to work with and has minimal pain points. Only once a time I need to get support. Highly recommended."',
    author: 'heartdust',
  },
]

export const homeFaqItems: HomeFaqItem[] = [
  {
    question: 'What is DojoChain? How does it work?',
    answer:
      'The DojoChain WordPress Theme is focused on building an ICO, Bitcoin or cryptocurrency consulting company website with much faster loading rates and comfortability. DojoChain gives you a website that will load with lightning speed, is easy to use, and will allow you to customize it to your liking.',
  },
  {
    question: 'How easy is it to install the DojoChain theme?',
    answer: 'There is a one-click installation option for our demo, so installation is simple.',
  },
  {
    question: 'Are demo page layouts editable?',
    answer:
      'Our site is built using drag and drop, therefore any section or element can be added, edited, duplicated, or removed.',
  },
  {
    question: 'Can I combine different demos?',
    answer:
      'Definitely. You can install any demo that you want and import other products\' homepage content.',
  },
  {
    question: 'How can I get the customer support?',
    answer:
      'After purchasing the product need you any support you can be share with us with create support ticket here: https://support.fantasythemes.net/ Our support team will contact with you soon.',
  },
]

export const themeForestUrl =
  'https://themeforest.net/item/dojochain-cryptocurrency-consulting-wordpress-theme/33339602?ref=themes-dojo'
