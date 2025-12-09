import { notFound } from 'next/navigation'
import { AppHeader } from "@/components/app/header"
import { AppFooter } from "@/components/app/footer"
import { createClient } from "@/lib/supabase/server"
import Image from "next/image"
import { Calendar, User, Eye, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { incrementArticleViews } from "@/lib/supabase/actions"

export default async function BlogArticlePage({
  params,
}: {
  params: { slug: string }
}) {
  const supabase = await createClient()
  
  const { data: article } = await supabase
    .from('articles')
    .select(`
      *,
      author:profiles(full_name, avatar_url, bio),
      category:categories(name, slug)
    `)
    .eq('slug', params.slug)
    .eq('content_type', 'blog')
    .eq('status', 'published')
    .single()

  if (!article) {
    notFound()
  }

  // Increment view count
  await incrementArticleViews(article.id)

  return (
    <div className="min-h-screen flex flex-col">
      <AppHeader />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <Link
            href="/site/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Article Header */}
          <article className="space-y-8">
            <header className="space-y-4">
              {article.category && (
                <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                  {article.category.name}
                </span>
              )}
              
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                {article.title}
              </h1>

              {article.excerpt && (
                <p className="text-xl text-muted-foreground">
                  {article.excerpt}
                </p>
              )}

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground pt-4 border-t">
                {article.author?.full_name && (
                  <div className="flex items-center gap-2">
                    {article.author.avatar_url && (
                      <div className="relative w-8 h-8 rounded-full overflow-hidden bg-muted">
                        <Image
                          src={article.author.avatar_url}
                          alt={article.author.full_name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {article.author.full_name}
                    </div>
                  </div>
                )}
                {article.custom_date && (
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(article.custom_date).toLocaleDateString('en-GB', {
                      day: '2-digit',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </div>
                )}
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  {article.views + 1} views
                </div>
              </div>
            </header>

            {/* Cover Image */}
            {article.cover_image && (
              <div className="relative w-full h-[400px] rounded-lg overflow-hidden bg-muted">
                <Image
                  src={article.cover_image}
                  alt={article.title}
                  fill
                  className="object-cover"
                  priority
                />
                {article.image_credits && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs px-4 py-2">
                    {article.image_credits}
                  </div>
                )}
              </div>
            )}

            {/* Article Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="whitespace-pre-wrap">{article.content}</div>
            </div>

            {/* Author Bio */}
            {article.author?.bio && (
              <div className="border-t pt-8 mt-12">
                <h3 className="text-lg font-semibold mb-4">About the Author</h3>
                <div className="flex gap-4">
                  {article.author.avatar_url && (
                    <div className="relative w-16 h-16 rounded-full overflow-hidden bg-muted flex-shrink-0">
                      <Image
                        src={article.author.avatar_url}
                        alt={article.author.full_name || 'Author'}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <p className="font-medium">{article.author.full_name}</p>
                    <p className="text-sm text-muted-foreground mt-1">{article.author.bio}</p>
                  </div>
                </div>
              </div>
            )}
          </article>
        </div>
      </main>

      <AppFooter />
    </div>
  )
}
