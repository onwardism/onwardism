import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { getCurrentUser } from '@/lib/supabase/queries'
import Link from 'next/link'
import { FileText, Eye, TrendingUp, Clock } from 'lucide-react'

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/auth/login')
  }

  const profile = await getCurrentUser()

  // Get user's article stats
  const { data: articles } = await supabase
    .from('articles')
    .select('id, status, views, created_at')
    .eq('author_id', user.id)

  const totalArticles = articles?.length || 0
  const publishedArticles = articles?.filter(a => a.status === 'published').length || 0
  const draftArticles = articles?.filter(a => a.status === 'draft').length || 0
  const totalViews = articles?.reduce((sum, a) => sum + a.views, 0) || 0

  // Get recent articles
  const { data: recentArticles } = await supabase
    .from('articles')
    .select(`
      id,
      title,
      slug,
      status,
      views,
      created_at,
      category:categories(name, slug)
    `)
    .eq('author_id', user.id)
    .order('created_at', { ascending: false })
    .limit(5)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Welcome back, {profile?.full_name || 'User'}!
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-card border rounded-lg p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-muted-foreground">Total Articles</h3>
            <FileText className="w-5 h-5 text-muted-foreground" />
          </div>
          <p className="text-3xl font-bold">{totalArticles}</p>
        </div>

        <div className="bg-card border rounded-lg p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-muted-foreground">Published</h3>
            <TrendingUp className="w-5 h-5 text-green-600" />
          </div>
          <p className="text-3xl font-bold text-green-600">{publishedArticles}</p>
        </div>

        <div className="bg-card border rounded-lg p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-muted-foreground">Drafts</h3>
            <Clock className="w-5 h-5 text-yellow-600" />
          </div>
          <p className="text-3xl font-bold text-yellow-600">{draftArticles}</p>
        </div>

        <div className="bg-card border rounded-lg p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-muted-foreground">Total Views</h3>
            <Eye className="w-5 h-5 text-blue-600" />
          </div>
          <p className="text-3xl font-bold text-blue-600">{totalViews}</p>
        </div>
      </div>

      {/* Profile Info */}
      <div className="bg-card border rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Role</p>
            <p className="font-medium capitalize">{profile?.role || 'user'}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Email</p>
            <p className="font-medium">{profile?.email}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Status</p>
            <p className="font-medium text-green-600">Active</p>
          </div>
        </div>
      </div>

      {/* Recent Articles */}
      <div className="bg-card border rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Recent Articles</h2>
          <Link
            href="/console/content"
            className="text-sm text-primary hover:underline"
          >
            View all
          </Link>
        </div>

        {recentArticles && recentArticles.length > 0 ? (
          <div className="space-y-3">
            {recentArticles.map((article) => (
              <Link
                key={article.id}
                href={`/console/content/edit/${article.id}`}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex-1">
                  <h3 className="font-medium">{article.title}</h3>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-xs text-muted-foreground">
                      {article.category?.name || 'Uncategorized'}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {new Date(article.created_at).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Eye className="w-4 h-4" />
                    {article.views}
                  </div>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      article.status === 'published'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                    }`}
                  >
                    {article.status}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-muted-foreground">
            <p>No articles yet. Start creating content!</p>
            <Link
              href="/console/content/new"
              className="inline-block mt-4 text-primary hover:underline"
            >
              Create your first article
            </Link>
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className="bg-muted/50 border rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            href="/console/content/new"
            className="p-4 bg-card border rounded-lg hover:bg-muted/50 transition-colors"
          >
            <FileText className="w-6 h-6 mb-2 text-primary" />
            <h3 className="font-medium mb-1">Create Article</h3>
            <p className="text-sm text-muted-foreground">Write a new article</p>
          </Link>
          <Link
            href="/console/content"
            className="p-4 bg-card border rounded-lg hover:bg-muted/50 transition-colors"
          >
            <TrendingUp className="w-6 h-6 mb-2 text-primary" />
            <h3 className="font-medium mb-1">Manage Content</h3>
            <p className="text-sm text-muted-foreground">View and edit articles</p>
          </Link>
          <Link
            href="/console/settings"
            className="p-4 bg-card border rounded-lg hover:bg-muted/50 transition-colors"
          >
            <FileText className="w-6 h-6 mb-2 text-primary" />
            <h3 className="font-medium mb-1">Settings</h3>
            <p className="text-sm text-muted-foreground">Update your profile</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
