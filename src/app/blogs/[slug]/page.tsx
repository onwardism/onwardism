import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar, User, ArrowLeft, Clock } from 'lucide-react'
import Link from 'next/link'

interface BlogArticlePageProps {
  params: {
    slug: string
  }
}

export default function BlogArticlePage({ params }: BlogArticlePageProps) {
  return (
    <main className="container mx-auto p-8">
      <div className="mb-6">
        <Link 
          href="/blogs" 
          className="inline-flex items-center text-primary hover:underline"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to blogs
        </Link>
      </div>
      
      <article className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">
              Blog Post: {params.slug}
            </CardTitle>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>Publication date</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>Author name</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>5 min read</span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p className="text-muted-foreground">
              This blog post content will be loaded dynamically based on the slug: <strong>{params.slug}</strong>
            </p>
            <p className="text-muted-foreground">
              Blog content, images, tags, and author information will be displayed here when integrated with a content management system.
            </p>
          </CardContent>
        </Card>
      </article>
    </main>
  )
}