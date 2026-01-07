import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Building2, 
  Users, 
  Target, 
  Heart
} from 'lucide-react'

export default function CompanyPage() {
  return (
    <div className="container mx-auto p-8">
      <div className="mb-12 text-center">
        <Building2 className="mx-auto h-12 w-12 text-primary mb-4" />
        <h1 className="text-4xl font-bold mb-4">About Onwardism</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A unified media platform for engineers and technology teams
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 mb-12">
        <Card>
          <CardHeader>
            <Target className="h-6 w-6 text-primary mb-2" />
            <CardTitle>Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              To create a platform where engineers and technology teams can share knowledge and insights with clarity and credibility.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Heart className="h-6 w-6 text-primary mb-2" />
            <CardTitle>Our Values</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Quality content, technical excellence, and fostering a community of continuous learning and innovation.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <Users className="h-6 w-6 text-primary mb-2" />
            <CardTitle>For Engineers</CardTitle>
            <CardDescription>
              Individual writers and contributors
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <Building2 className="h-6 w-6 text-primary mb-2" />
            <CardTitle>For Teams</CardTitle>
            <CardDescription>
              Organizations and technology teams
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <Target className="h-6 w-6 text-primary mb-2" />
            <CardTitle>Focus Areas</CardTitle>
            <CardDescription>
              Cloud, Data, Security, and AI
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  )
}