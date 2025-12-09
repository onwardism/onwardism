'use client'

import { useRouter, useSearchParams } from "next/navigation"

type Category = {
  id: string
  name: string
  slug: string
}

export function ContentFilterBar({
  categories,
  currentCategory,
  currentSort,
  basePath,
}: {
  categories: Category[]
  currentCategory: string
  currentSort: string
  basePath: string
}) {
  const router = useRouter()
  const searchParams = useSearchParams()

  function handleCategoryChange(category: string) {
    const params = new URLSearchParams(searchParams.toString())
    if (category === 'all') {
      params.delete('category')
    } else {
      params.set('category', category)
    }
    router.push(`${basePath}?${params.toString()}`)
  }

  function handleSortChange(sort: string) {
    const params = new URLSearchParams(searchParams.toString())
    params.set('sort', sort)
    router.push(`${basePath}?${params.toString()}`)
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between bg-card border rounded-lg p-4">
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => handleCategoryChange('all')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            currentCategory === 'all'
              ? 'bg-primary text-primary-foreground'
              : 'bg-muted hover:bg-muted/80'
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleCategoryChange(cat.slug)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              currentCategory === cat.slug
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted hover:bg-muted/80'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">Sort by:</span>
        <select
          value={currentSort}
          onChange={(e) => handleSortChange(e.target.value)}
          className="px-3 py-2 border rounded-lg bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="latest">Latest</option>
          <option value="views">Most Views</option>
        </select>
      </div>
    </div>
  )
}
