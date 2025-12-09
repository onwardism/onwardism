import { AppHeader } from "@/components/app/header"
import { AppFooter } from "@/components/app/footer"
import { ContentFilterBar } from "@/components/shared/content-filter-bar"
import { ContentGrid } from "@/components/shared/content-grid"
import { createClient } from "@/lib/supabase/server"

export default async function BlogPage({
  searchParams,
}: {
  searchParams: { category?: string; sort?: string }
}) {
  const supabase = await createClient()
  
  // Build query
  let query = supabase
    .from('articles')
    .select(`
      *,
      author:profiles(full_name, avatar_url),
      category:categories(name, slug)
    `)
    .eq('content_type', 'blog')
    .eq('status', 'published')

  // Filter by category if provided
  if (searchParams.category && searchParams.category !== 'all') {
    query = query.eq('category.slug', searchParams.category)
  }

  // Sort
  const sortBy = searchParams.sort || 'latest'
  if (sortBy === 'views') {
    query = query.order('views', { ascending: false })
  } else {
    query = query.order('custom_date', { ascending: false })
  }

  const { data: articles } = await query

  // Get categories for filter
  const { data: categories } = await supabase
    .from('categories')
    .select('*')
    .order('name')

  return (
    <div className="min-h-screen flex flex-col">
      <AppHeader />

      <main className="flex-1 container mx-auto px-4 py-16">
        <section className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold">Blog</h1>
          <p className="text-lg text-muted-foreground">
            Insights, tutorials, and stories from the tech world
          </p>
        </section>

        <section className="max-w-6xl mx-auto space-y-8">
          <ContentFilterBar
            categories={categories || []}
            currentCategory={searchParams.category || 'all'}
            currentSort={searchParams.sort || 'latest'}
            basePath="/site/blog"
          />

          <ContentGrid
            articles={articles || []}
            basePath="/site/blog"
            emptyMessage="No blog posts found"
          />
        </section>
      </main>

      <AppFooter />
    </div>
  )
}
