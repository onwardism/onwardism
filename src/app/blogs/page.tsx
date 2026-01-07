import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { BookOpen } from 'lucide-react'

export default function BlogsPage() {
  return (
    <main className="container mx-auto p-8">
      <div className="flex items-center gap-2 mb-8">
        <BookOpen className="h-6 w-6" />
        <h1 className="text-3xl font-bold">All Blogs</h1>
      </div>
      
      <div className="text-center py-12">
        <BookOpen className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
        <h2 className="text-2xl font-semibold mb-2">No blog posts yet</h2>
        <p className="text-muted-foreground">
          Blog posts will appear here when they are published.
        </p>
      </div>
    </main>
  )
}