import { redirect } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { Plus } from 'lucide-react'
import { ContentList } from '@/components/console/content-list'

export default async function ContentPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/auth/login')
  }

  // Get user's articles
  const { data: articles } = await supabase
    .from('articles')
    .select(`
      *,
      category:categories(name, slug),
      author:profiles(full_name)
    `)
    .eq('author_id', user.id)
    .order('created_at', { ascending: false })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Content Management</h1>
          <p className="text-muted-foreground mt-1">
            Manage your news, blog posts, events, and research
          </p>
        </div>
        <Link
          href="/console/content/new"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
        >
          <Plus className="w-4 h-4" />
          New Content
        </Link>
      </div>

      <ContentList articles={articles || []} />
    </div>
  )
}
