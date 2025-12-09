import { createClient } from './server'

// Article queries
export async function getPublishedArticles() {
  const supabase = await createClient()
  
  const { data, error } = await supabase
    .from('articles')
    .select(`
      *,
      author:profiles(id, full_name, avatar_url),
      category:categories(id, name, slug),
      article_tags(tag:tags(id, name, slug))
    `)
    .eq('status', 'published')
    .order('published_at', { ascending: false })

  if (error) throw error
  return data
}

export async function getArticleBySlug(slug: string) {
  const supabase = await createClient()
  
  const { data, error } = await supabase
    .from('articles')
    .select(`
      *,
      author:profiles(id, full_name, avatar_url, bio),
      category:categories(id, name, slug),
      article_tags(tag:tags(id, name, slug))
    `)
    .eq('slug', slug)
    .single()

  if (error) throw error
  return data
}

export async function getFeaturedArticles() {
  const supabase = await createClient()
  
  const { data, error } = await supabase
    .from('articles')
    .select(`
      *,
      author:profiles(id, full_name, avatar_url),
      category:categories(id, name, slug)
    `)
    .eq('status', 'published')
    .eq('featured', true)
    .order('published_at', { ascending: false })
    .limit(5)

  if (error) throw error
  return data
}

export async function getArticlesByCategory(categorySlug: string) {
  const supabase = await createClient()
  
  const { data, error } = await supabase
    .from('articles')
    .select(`
      *,
      author:profiles(id, full_name, avatar_url),
      category:categories(id, name, slug)
    `)
    .eq('status', 'published')
    .eq('category.slug', categorySlug)
    .order('published_at', { ascending: false })

  if (error) throw error
  return data
}

// Category queries
export async function getCategories() {
  const supabase = await createClient()
  
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .order('name')

  if (error) throw error
  return data
}

// User profile queries
export async function getCurrentUser() {
  const supabase = await createClient()
  
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) return null

  const { data, error } = await supabase
    .from('profiles')
    .select('*, user_preferences(*)')
    .eq('id', user.id)
    .single()

  if (error) throw error
  return data
}

// Comment queries
export async function getArticleComments(articleId: string) {
  const supabase = await createClient()
  
  const { data, error } = await supabase
    .from('comments')
    .select(`
      *,
      user:profiles(id, full_name, avatar_url)
    `)
    .eq('article_id', articleId)
    .is('parent_id', null)
    .order('created_at', { ascending: false })

  if (error) throw error
  return data
}

// Bookmark queries
export async function getUserBookmarks(userId: string) {
  const supabase = await createClient()
  
  const { data, error } = await supabase
    .from('bookmarks')
    .select(`
      *,
      article:articles(
        *,
        author:profiles(id, full_name, avatar_url),
        category:categories(id, name, slug)
      )
    `)
    .eq('user_id', userId)
    .order('created_at', { ascending: false })

  if (error) throw error
  return data
}

export async function isArticleBookmarked(userId: string, articleId: string) {
  const supabase = await createClient()
  
  const { data, error } = await supabase
    .from('bookmarks')
    .select('id')
    .eq('user_id', userId)
    .eq('article_id', articleId)
    .single()

  return !!data && !error
}
