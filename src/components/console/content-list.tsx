'use client'

import Link from 'next/link'
import { Edit, Trash2, Eye } from 'lucide-react'
import { deleteArticle } from '@/lib/supabase/actions'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

type Article = {
  id: string
  title: string
  slug: string
  content_type: 'news' | 'blog' | 'event' | 'research'
  status: 'draft' | 'published' | 'archived'
  category: { name: string; slug: string } | null
  author: { full_name: string | null } | null
  created_at: string
  views: number
}

export function ContentList({ articles }: { articles: Article[] }) {
  const router = useRouter()
  const [deleting, setDeleting] = useState<string | null>(null)

  async function handleDelete(id: string, title: string) {
    if (!confirm(`Are you sure you want to delete "${title}"?`)) return

    setDeleting(id)
    try {
      await deleteArticle(id)
      router.refresh()
    } catch (error) {
      alert('Failed to delete article')
    } finally {
      setDeleting(null)
    }
  }

  if (articles.length === 0) {
    return (
      <div className="text-center py-12 bg-muted/50 rounded-lg border">
        <p className="text-muted-foreground">No content yet. Create your first article!</p>
      </div>
    )
  }

  return (
    <div className="bg-card border rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-muted/50 border-b">
            <tr>
              <th className="text-left px-4 py-3 text-sm font-medium">Title</th>
              <th className="text-left px-4 py-3 text-sm font-medium">Type</th>
              <th className="text-left px-4 py-3 text-sm font-medium">Category</th>
              <th className="text-left px-4 py-3 text-sm font-medium">Status</th>
              <th className="text-left px-4 py-3 text-sm font-medium">Views</th>
              <th className="text-left px-4 py-3 text-sm font-medium">Date</th>
              <th className="text-right px-4 py-3 text-sm font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {articles.map((article) => (
              <tr key={article.id} className="hover:bg-muted/30">
                <td className="px-4 py-3">
                  <div className="font-medium">{article.title}</div>
                  <div className="text-sm text-muted-foreground">/{article.slug}</div>
                </td>
                <td className="px-4 py-3">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400 capitalize">
                    {article.content_type}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    {article.category?.name || 'Uncategorized'}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      article.status === 'published'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                        : article.status === 'draft'
                        ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                        : 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400'
                    }`}
                  >
                    {article.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm">{article.views}</td>
                <td className="px-4 py-3 text-sm text-muted-foreground">
                  {new Date(article.created_at).toLocaleDateString('en-GB', { 
                    day: '2-digit', 
                    month: '2-digit', 
                    year: 'numeric' 
                  })}
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center justify-end gap-2">
                    {article.status === 'published' && (
                      <Link
                        href={`/site/${article.category?.slug}/${article.slug}`}
                        className="p-2 hover:bg-muted rounded-lg transition-colors"
                        title="View"
                      >
                        <Eye className="w-4 h-4" />
                      </Link>
                    )}
                    <Link
                      href={`/console/content/edit/${article.id}`}
                      className="p-2 hover:bg-muted rounded-lg transition-colors"
                      title="Edit"
                    >
                      <Edit className="w-4 h-4" />
                    </Link>
                    <button
                      onClick={() => handleDelete(article.id, article.title)}
                      disabled={deleting === article.id}
                      className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 rounded-lg transition-colors disabled:opacity-50"
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
