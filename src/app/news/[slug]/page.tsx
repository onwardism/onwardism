import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar, User, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

interface NewsArticlePageProps {
  params: {
    slug: string
  }
}

export default function NewsArticlePage({ params }: NewsArticlePageProps) {
  return (
    <main className="container mx-auto p-8">
      <div className="mb-6">
        <Link 
          href="/news" 
          className="inline-flex items-center text-primary hover:underline"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to news
        </Link>
      </div>
      
      <article className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">
              News Article: {params.slug}
            </CardTitle>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>Article date</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>Author name</span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p className="text-muted-foreground">
              This news article content will be loaded dynamically based on the slug: <strong>{params.slug}</strong>
            </p>
            <p className="text-muted-foreground">
              Article content, images, and metadata will be displayed here when integrated with a content management system.
            </p>
          </CardContent>
        </Card>
      </article>
    </main>
  )
}