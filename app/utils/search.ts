import {
  SEARCH_RESULTS_PER_PAGE,
  searchableEntries,
  type SearchResultEntry,
} from '~/utils/searchContent'

export function normalizeSearchQuery(raw: string): string {
  return raw.trim().toLowerCase().replace(/\s+/g, ' ')
}

export function buildSearchResultsPath(query: string, page = 1): string {
  const params = new URLSearchParams()
  params.set('s', query.trim())
  if (page > 1) params.set('page', String(page))
  return `/search?${params.toString()}`
}

function getQueryTerms(query: string): string[] {
  return normalizeSearchQuery(query).split(' ').filter(Boolean)
}

function getSearchableWords(text: string): string[] {
  return text.toLowerCase().match(/[a-z0-9]+/g) ?? []
}

/** Treat simple singular/plural pairs as equivalent (service ↔ services). */
function getTermVariants(term: string): string[] {
  const variants = new Set<string>([term])

  if (term.endsWith('ies') && term.length > 4) {
    variants.add(`${term.slice(0, -3)}y`)
  }
  if (term.endsWith('es') && term.length > 3) {
    variants.add(term.slice(0, -2))
  }
  if (term.endsWith('s') && term.length > 2) {
    variants.add(term.slice(0, -1))
  } else if (term.length > 1) {
    variants.add(`${term}s`)
  }

  return [...variants]
}

function termMatchesAnyWord(term: string, words: string[]): boolean {
  return getTermVariants(term).some((variant) => words.includes(variant))
}

function queryMatchesInText(normalizedText: string, normalizedQuery: string): boolean {
  if (normalizedText.includes(normalizedQuery)) return true

  const parts = normalizedQuery.split(' ')
  const last = parts[parts.length - 1]
  if (!last) return false

  if (!last.endsWith('s')) {
    const pluralized = [...parts.slice(0, -1), `${last}s`].join(' ')
    if (normalizedText.includes(pluralized)) return true
  }

  if (last.endsWith('s') && last.length > 2) {
    const singularized = [...parts.slice(0, -1), last.slice(0, -1)].join(' ')
    if (normalizedText.includes(singularized)) return true
  }

  return false
}

function scoreSearchEntry(searchableText: string, query: string): number {
  const normalizedQuery = normalizeSearchQuery(query)
  const terms = getQueryTerms(query)
  if (!terms.length) return 0

  const normalizedText = searchableText.toLowerCase()
  const words = getSearchableWords(searchableText)

  // Single glued terms like "ourservices" must match a whole word exactly.
  if (terms.length === 1) {
    const term = terms[0]
    return term && termMatchesAnyWord(term, words) ? 1 : 0
  }

  // Multi-word queries can match phrases ("our service" -> "our services")
  // or any individual word ("our services" -> "services").
  if (queryMatchesInText(normalizedText, normalizedQuery)) {
    return 100 + terms.length
  }

  const matchedTerms = terms.filter((term) => termMatchesAnyWord(term, words)).length
  return matchedTerms > 0 ? matchedTerms : 0
}

export function matchesSearchQuery(text: string, query: string): boolean {
  return scoreSearchEntry(text, query) > 0
}

export function searchEntries(query: string): SearchResultEntry[] {
  const normalizedQuery = normalizeSearchQuery(query)
  if (!normalizedQuery) return []

  return searchableEntries
    .map((entry) => {
      const searchableText = [
        entry.title,
        entry.excerpt,
        entry.keywords,
        entry.author,
        entry.type,
      ].join(' ')

      return { entry, score: scoreSearchEntry(searchableText, normalizedQuery) }
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .map(({ entry }) => entry)
}

export function paginateSearchResults<T>(
  items: T[],
  page: number,
  perPage = SEARCH_RESULTS_PER_PAGE,
): { items: T[], totalPages: number, page: number } {
  const totalPages = Math.max(1, Math.ceil(items.length / perPage))
  const safePage = Math.min(Math.max(1, page), totalPages)
  const start = (safePage - 1) * perPage

  return {
    items: items.slice(start, start + perPage),
    totalPages,
    page: safePage,
  }
}
