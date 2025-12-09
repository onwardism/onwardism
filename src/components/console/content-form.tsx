'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createArticle, updateArticle } from '@/lib/supabase/actions'
import { uploadArticleImage } from '@/lib/supabase/storage'
import { ArrowLeft, Save, Eye, Upload, X, Image as ImageIcon } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { RichTextEditor } from './rich-text-editor'

type Category = {
  id: string
  name: string
  slug: string
}

type Article = {
  id: string
  title: string
  slug: string
  excerpt: string | null
  content: string
  cover_image: string | null
  image_credits: string | null
  category_id: string | null
  content_type: 'news' | 'blog' | 'event' | 'research'
  custom_date: string | null
  status: 'draft' | 'published' | 'archived'
}

export function ContentForm({
  categories,
  article,
}: {
  categories: Category[]
  article?: Article
}) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  // Get current IST date
  function getISTDate() {
    const now = new Date()
    // Convert to IST (UTC+5:30)
    const istOffset = 5.5 * 60 * 60 * 1000
    const istTime = new Date(now.getTime() + istOffset)
    return istTime.toISOString().slice(0, 10)
  }

  const [formData, setFormData] = useState({
    title: article?.title || '',
    slug: article?.slug || '',
    excerpt: article?.excerpt || '',
    content: article?.content || '',
    cover_image: article?.cover_image || '',
    image_credits: article?.image_credits || '',
    category_id: article?.category_id || '',
    content_type: article?.content_type || 'news',
    custom_date: article?.custom_date ? new Date(article.custom_date).toISOString().slice(0, 10) : getISTDate(),
    status: article?.status || 'draft',
  })

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return

    // Validate file type
    if (!file.type.startsWith('image/')) {
      setError('Please select an image file')
      return
    }

    // Validate file size (max 25MB)
    if (file.size > 25 * 1024 * 1024) {
      setError('Image size must be less than 25MB')
      return
    }

    setUploading(true)
    setError(null)

    try {
      const url = await uploadArticleImage(file)
      setFormData({ ...formData, cover_image: url })
    } catch (err: any) {
      setError(err.message || 'Failed to upload image')
    } finally {
      setUploading(false)
    }
  }

  function removeCoverImage() {
    setFormData({ ...formData, cover_image: '' })
  }

  function generateSlug(title: string) {
    // Create minimal slug: remove common words, keep only meaningful words
    const commonWords = ['the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'from', 'as', 'is', 'was', 'are', 'be', 'been', 'being']
    
    return title
      .toLowerCase()
      .split(/\s+/) // Split by spaces
      .filter(word => word.length > 0) // Remove empty strings
      .filter(word => !commonWords.includes(word)) // Remove common words
      .map(word => word.replace(/[^a-z0-9]/g, '')) // Remove special chars from each word
      .filter(word => word.length > 0) // Remove empty results
      .slice(0, 5) // Take max 5 words
      .join('-')
  }

  function handleTitleChange(title: string) {
    setFormData({
      ...formData,
      title,
      slug: article ? formData.slug : generateSlug(title),
    })
  }

  async function handleSubmit(status: 'draft' | 'published') {
    setLoading(true)
    setError(null)

    try {
      const data = { ...formData, status }

      if (article) {
        await updateArticle(article.id, data)
      } else {
        await createArticle(data)
      }

      router.push('/console/content')
      router.refresh()
    } catch (err: any) {
      setError(err.message || 'Failed to save article')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      {/* Action Buttons at Top */}
      <div className="flex items-center justify-between bg-card border rounded-lg p-4">
        <Link
          href="/console/content"
          className="inline-flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-muted transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => handleSubmit('draft')}
            disabled={loading}
            className="inline-flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-muted transition-colors disabled:opacity-50"
          >
            <Save className="w-4 h-4" />
            Save as Draft
          </button>
          <button
            type="button"
            onClick={() => handleSubmit('published')}
            disabled={loading}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
          >
            <Eye className="w-4 h-4" />
            {loading ? 'Publishing...' : 'Publish'}
          </button>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
          <p className="text-red-800 dark:text-red-200 text-sm">{error}</p>
        </div>
      )}

      <div className="bg-card border rounded-lg p-6 space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-2">
            Title *
          </label>
          <input
            id="title"
            type="text"
            required
            value={formData.title}
            onChange={(e) => handleTitleChange(e.target.value)}
            className="w-full px-4 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Enter article title"
          />
        </div>

        <div>
          <label htmlFor="slug" className="block text-sm font-medium mb-2">
            Slug *
          </label>
          <div className="flex gap-2">
            <input
              id="slug"
              type="text"
              required
              value={formData.slug}
              onChange={(e) => setFormData({ ...formData, slug: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '-').replace(/-+/g, '-') })}
              className="flex-1 px-4 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="minimal-slug"
            />
            <button
              type="button"
              onClick={() => setFormData({ ...formData, slug: generateSlug(formData.title) })}
              className="px-4 py-2 border rounded-lg hover:bg-muted transition-colors text-sm"
              title="Regenerate slug from title"
            >
              ↻
            </button>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            Minimal URL-friendly slug (common words removed)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label htmlFor="content_type" className="block text-sm font-medium mb-2">
              Content Type *
            </label>
            <select
              id="content_type"
              required
              value={formData.content_type}
              onChange={(e) => setFormData({ ...formData, content_type: e.target.value as any })}
              className="w-full px-4 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="news">News</option>
              <option value="blog">Blog</option>
              <option value="event">Event</option>
              <option value="research">Research</option>
            </select>
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium mb-2">
              Category *
            </label>
            <select
              id="category"
              required
              value={formData.category_id}
              onChange={(e) => setFormData({ ...formData, category_id: e.target.value })}
              className="w-full px-4 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Select a category</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="custom_date" className="block text-sm font-medium mb-2">
              Publish Date *
            </label>
            <input
              id="custom_date"
              type="date"
              required
              value={formData.custom_date}
              onChange={(e) => setFormData({ ...formData, custom_date: e.target.value })}
              className="w-full px-4 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        <div>
          <label htmlFor="excerpt" className="block text-sm font-medium mb-2">
            Excerpt
          </label>
          <textarea
            id="excerpt"
            value={formData.excerpt}
            onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
            rows={3}
            className="w-full px-4 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            placeholder="Brief summary of the article"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Cover Image
          </label>
          
          {formData.cover_image ? (
            <div className="space-y-3">
              <div className="relative w-full h-48 border rounded-lg overflow-hidden bg-muted">
                <Image
                  src={formData.cover_image}
                  alt="Cover preview"
                  fill
                  className="object-cover"
                />
                <button
                  type="button"
                  onClick={removeCoverImage}
                  className="absolute top-2 right-2 p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  title="Remove image"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <input
                type="url"
                value={formData.cover_image}
                onChange={(e) => setFormData({ ...formData, cover_image: e.target.value })}
                className="w-full px-4 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                placeholder="Or paste image URL"
              />
              <input
                type="text"
                value={formData.image_credits}
                onChange={(e) => setFormData({ ...formData, image_credits: e.target.value })}
                className="w-full px-4 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                placeholder="Image credits (e.g., Photo by John Doe / Unsplash)"
              />
            </div>
          ) : (
            <div className="space-y-3">
              <div className="border-2 border-dashed rounded-lg p-8 text-center hover:border-primary transition-colors">
                <input
                  type="file"
                  id="image-upload"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={uploading}
                  className="hidden"
                />
                <label
                  htmlFor="image-upload"
                  className="cursor-pointer flex flex-col items-center gap-2"
                >
                  {uploading ? (
                    <>
                      <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                      <p className="text-sm text-muted-foreground">Uploading...</p>
                    </>
                  ) : (
                    <>
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Upload className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Click to upload image</p>
                        <p className="text-xs text-muted-foreground mt-1">PNG, JPG, GIF up to 25MB</p>
                      </div>
                    </>
                  )}
                </label>
              </div>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">Or</span>
                </div>
              </div>
              <input
                type="url"
                value={formData.cover_image}
                onChange={(e) => setFormData({ ...formData, cover_image: e.target.value })}
                className="w-full px-4 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Paste image URL"
              />
            </div>
          )}
        </div>

        <div>
          <label htmlFor="content" className="block text-sm font-medium mb-2">
            Content *
          </label>
          <RichTextEditor
            value={formData.content}
            onChange={(value) => setFormData({ ...formData, content: value })}
          />
        </div>
      </div>
    </div>
  )
}
