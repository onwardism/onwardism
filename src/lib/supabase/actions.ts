'use server'

import { revalidatePath } from 'next/cache'
import { createClient } from './server'

// Auth actions
export async function signUp(email: string, password: string, fullName: string) {
  const supabase = await createClient()
  
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
      },
    },
  })

  if (error) throw error
  return data
}

export async function signIn(email: string, password: string) {
  const supabase = await createClient()
  
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) throw error
  revalidatePath('/', 'layout')
  return data
}

export async function signOut() {
  const supabase = await createClient()
  
  const { error } = await supabase.auth.signOut()
  
  if (error) throw error
  revalidatePath('/', 'layout')
}

// Profile actions
export async function updateProfile(userId: string, updates: {
  full_name?: string
  bio?: string
  avatar_url?: string
}) {
  const supabase = await createClient()
  
  const { data, error } = await supabase
    .from('profiles')
    .update(updates)
    .eq('id', userId)
    .select()
    .single()

  if (error) throw error
  revalidatePath('/console/profile')
  return data
}

export async function updateUserPreferences(userId: string, updates: {
  theme?: 'light' | 'dark' | 'system'
  email_notifications?: boolean
  newsletter_subscribed?: boolean
}) {
  const supabase = await createClient()
  
  const { data, error } = await supabase
    .from('user_preferences')
    .update(updates)
    .eq('user_id', userId)
    .select()
    .single()

  if (error) throw error
  revalidatePath('/console/settings')
  return data
}

// Article actions
export async function createArticle(article: {
  title: string
  slug: string
  excerpt?: string
  content: string
  cover_image?: string
  image_credits?: string
  category_id?: string
  content_type?: 'news' | 'blog' | 'event' | 'research'
  custom_date?: string
  status?: 'draft' | 'published'
}) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) throw new Error('Not authenticated')

  const { data, error } = await supabase
    .from('articles')
    .insert({
      ...article,
      author_id: user.id,
      published_at: article.status === 'published' ? new Date().toISOString() : null,
    })
    .select()
    .single()

  if (error) throw error
  revalidatePath('/console/articles')
  return data
}

export async function updateArticle(articleId: string, updates: {
  title?: string
  slug?: string
  excerpt?: string
  content?: string
  cover_image?: string
  image_credits?: string
  category_id?: string
  content_type?: 'news' | 'blog' | 'event' | 'research'
  custom_date?: string
  status?: 'draft' | 'published' | 'archived'
}) {
  const supabase = await createClient()
  
  const { data, error } = await supabase
    .from('articles')
    .update({
      ...updates,
      published_at: updates.status === 'published' ? new Date().toISOString() : undefined,
    })
    .eq('id', articleId)
    .select()
    .single()

  if (error) throw error
  revalidatePath('/console/articles')
  revalidatePath(`/article/${updates.slug}`)
  return data
}

export async function deleteArticle(articleId: string) {
  const supabase = await createClient()
  
  const { error } = await supabase
    .from('articles')
    .delete()
    .eq('id', articleId)

  if (error) throw error
  revalidatePath('/console/articles')
}

// Comment actions
export async function createComment(articleId: string, content: string, parentId?: string) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) throw new Error('Not authenticated')

  const { data, error } = await supabase
    .from('comments')
    .insert({
      article_id: articleId,
      user_id: user.id,
      content,
      parent_id: parentId,
    })
    .select()
    .single()

  if (error) throw error
  revalidatePath(`/article/[slug]`)
  return data
}

export async function deleteComment(commentId: string) {
  const supabase = await createClient()
  
  const { error } = await supabase
    .from('comments')
    .delete()
    .eq('id', commentId)

  if (error) throw error
  revalidatePath(`/article/[slug]`)
}

// Bookmark actions
export async function toggleBookmark(articleId: string) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) throw new Error('Not authenticated')

  // Check if bookmark exists
  const { data: existing } = await supabase
    .from('bookmarks')
    .select('id')
    .eq('user_id', user.id)
    .eq('article_id', articleId)
    .single()

  if (existing) {
    // Remove bookmark
    const { error } = await supabase
      .from('bookmarks')
      .delete()
      .eq('id', existing.id)
    
    if (error) throw error
  } else {
    // Add bookmark
    const { error } = await supabase
      .from('bookmarks')
      .insert({
        user_id: user.id,
        article_id: articleId,
      })
    
    if (error) throw error
  }

  revalidatePath('/console/bookmarks')
  revalidatePath(`/article/[slug]`)
}

// Increment article views
export async function incrementArticleViews(articleId: string) {
  const supabase = await createClient()
  
  const { error } = await supabase.rpc('increment_article_views', {
    article_uuid: articleId,
  })

  if (error) throw error
}
