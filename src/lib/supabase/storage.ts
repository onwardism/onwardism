import { createClient } from './client'

export async function uploadArticleImage(file: File): Promise<string> {
  const supabase = createClient()
  
  // Generate unique filename
  const fileExt = file.name.split('.').pop()
  const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`
  const filePath = `articles/${fileName}`

  // Upload file
  const { data, error } = await supabase.storage
    .from('article-images')
    .upload(filePath, file, {
      cacheControl: '3600',
      upsert: false
    })

  if (error) {
    throw error
  }

  // Get public URL
  const { data: { publicUrl } } = supabase.storage
    .from('article-images')
    .getPublicUrl(filePath)

  return publicUrl
}

export async function deleteArticleImage(url: string): Promise<void> {
  const supabase = createClient()
  
  // Extract file path from URL
  const urlParts = url.split('/article-images/')
  if (urlParts.length < 2) return

  const filePath = urlParts[1]

  const { error } = await supabase.storage
    .from('article-images')
    .remove([filePath])

  if (error) {
    console.error('Error deleting image:', error)
  }
}
