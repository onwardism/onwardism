import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { User, MapPin, Calendar, Link as LinkIcon, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

interface AuthorPageProps {
  params: {
    username: string
  }
}

export default function AuthorPage({ params }: AuthorPageProps) {
  return (
    <main className="container mx-auto p-8">
      <div className="mb-6">
        <Link 
          href="/" 
          className="inline-flex items-center text-primary hover:underline"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to home
        </Link>
      </div>
      
      <div className="max-w-4xl mx-auto">
        {/* Author Profile */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center">
                <User className="h-10 w-10 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <CardTitle className="text-2xl mb-2">@{params.username}</CardTitle>
                <CardDescription className="text-base mb-4">
                  Author profile and bio will be displayed here when available.
                </CardDescription>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>Location</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>Joined date</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <LinkIcon className="h-4 w-4" />
                    <span>Website</span>
                  </div>
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Author's Content */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Articles */}
          <Card>
            <CardHeader>
              <CardTitle>Articles</CardTitle>
              <CardDescription>
                News articles by this author
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <p className="text-muted-foreground">No articles yet</p>
              </div>
            </CardContent>
          </Card>

          {/* Blog Posts */}
          <Card>
            <CardHeader>
              <CardTitle>Blog Posts</CardTitle>
              <CardDescription>
                Blog posts by this author
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <p className="text-muted-foreground">No blog posts yet</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}