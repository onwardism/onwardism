import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { 
  Library, 
  Download, 
  ExternalLink, 
  FileText, 
  Video, 
  Code, 
  BookOpen
} from 'lucide-react'

export default function ResourcesPage() {
  return (
    <div className="container mx-auto p-8">
      <div className="mb-12 text-center">
        <Library className="mx-auto h-12 w-12 text-primary mb-4" />
        <h1 className="text-4xl font-bold mb-4">Resources</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Tools, guides, and materials to help you succeed
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <BookOpen className="h-6 w-6 text-primary mb-2" />
            <CardTitle>Documentation</CardTitle>
            <CardDescription>
              Complete guides and references
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <Code className="h-6 w-6 text-primary mb-2" />
            <CardTitle>Tools</CardTitle>
            <CardDescription>
              Development tools and utilities
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <Video className="h-6 w-6 text-primary mb-2" />
            <CardTitle>Learning</CardTitle>
            <CardDescription>
              Educational content and tutorials
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  )
}