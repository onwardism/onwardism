import Link from "next/link"
import Image from "next/image"
import { Calendar, User, Eye } from "lucide-react"

type Article = {
  id: string
  title: string
  slug: string
  excerpt: string | null
  cover_image: string | null
  custom_date: string | null
  views: number
  author: { full_name: string | null; avatar_url: string | null } | null
  category: { name: string; slug: string } | null
}

export function ContentGrid({
  articles,
  basePath,
  emptyMessage = "No content available yet",
}: {
  articles: Article[]
  basePath: string
  emptyMessage?: string
}) {
  if (articles.length === 0) {
    return (
      <div className="text-center py-12 bg-muted/50 rounded-lg border">
        <p className="text-muted-foreground">{emptyMessage}</p>
        <p className="text-sm text-muted-foreground mt-2">Check back soon for new content</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article) => (
        <Link
          key={article.id}
          href={`${basePath}/${article.slug}`}
          className="group bg-card border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
        >
          {article.cover_image && (
            <div className="relative w-full h-48 bg-muted">
              <Image
                src={article.cover_image}
                alt={article.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}
          <div className="p-6 space-y-3">
            {article.category && (
              <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                {article.category.name}
              </span>
            )}
            <h2 className="text-xl font-semibold group-hover:text-primary transition-colors line-clamp-2">
              {article.title}
            </h2>
            {article.excerpt && (
              <p className="text-sm text-muted-foreground line-clamp-3">
                {article.excerpt}
              </p>
            )}
            <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2">
              {article.author?.full_name && (
                <div className="flex items-center gap-1">
                  <User className="w-3 h-3" />
                  {article.author.full_name}
                </div>
              )}
              {article.custom_date && (
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {new Date(article.custom_date).toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric'
                  })}
                </div>
              )}
              <div className="flex items-center gap-1">
                <Eye className="w-3 h-3" />
                {article.views}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
