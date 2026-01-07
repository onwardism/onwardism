import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Newspaper, BookOpen, TrendingUp } from 'lucide-react'

export default function HomePage() {
  return (
    <main className="container mx-auto p-4 sm:p-6 md:p-8">
      <div className="mb-8 sm:mb-12 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Latest News & Insights</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
          Stay updated with the latest technology trends and insights
        </p>
      </div>
      
      <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
        {/* Latest News Section */}
        <section>
          <div className="flex items-center gap-2 mb-4 sm:mb-6">
            <Newspaper className="h-5 w-5 sm:h-6 w-6" />
            <h2 className="text-xl sm:text-2xl font-bold">Latest News</h2>
          </div>
          <div className="space-y-4">
            <Card>
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-base sm:text-lg">No news articles yet</CardTitle>
                <CardDescription className="text-sm">
                  News articles will appear here when published
                </CardDescription>
              </CardHeader>
            </Card>
            <div className="text-center">
              <Link 
                href="/news" 
                className="text-sm sm:text-base text-primary hover:underline"
              >
                View all news →
              </Link>
            </div>
          </div>
        </section>

        {/* Latest Blogs Section */}
        <section>
          <div className="flex items-center gap-2 mb-4 sm:mb-6">
            <BookOpen className="h-5 w-5 sm:h-6 w-6" />
            <h2 className="text-xl sm:text-2xl font-bold">Latest Blogs</h2>
          </div>
          <div className="space-y-4">
            <Card>
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-base sm:text-lg">No blog posts yet</CardTitle>
                <CardDescription className="text-sm">
                  Blog posts will appear here when published
                </CardDescription>
              </CardHeader>
            </Card>
            <div className="text-center">
              <Link 
                href="/blogs" 
                className="text-sm sm:text-base text-primary hover:underline"
              >
                View all blogs →
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Topics Section */}
      <section className="mt-8 sm:mt-12">
        <div className="flex items-center gap-2 mb-4 sm:mb-6">
          <TrendingUp className="h-5 w-5 sm:h-6 w-6" />
          <h2 className="text-xl sm:text-2xl font-bold">Explore Topics</h2>
        </div>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <Link href="/topics/cloud">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-base sm:text-lg">Cloud</CardTitle>
                <CardDescription className="text-sm">
                  Cloud computing and infrastructure
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
          <Link href="/topics/data">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-base sm:text-lg">Data</CardTitle>
                <CardDescription className="text-sm">
                  Data science and analytics
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
          <Link href="/topics/security">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-base sm:text-lg">Security</CardTitle>
                <CardDescription className="text-sm">
                  Cybersecurity and privacy
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
          <Link href="/topics/ai">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-base sm:text-lg">AI</CardTitle>
                <CardDescription className="text-sm">
                  Artificial intelligence and ML
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </section>
    </main>
  )
}