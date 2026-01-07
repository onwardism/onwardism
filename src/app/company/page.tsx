import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Building2, 
  Users, 
  Target, 
  Heart
} from 'lucide-react'

export default function CompanyPage() {
  return (
    <div className="container mx-auto p-4 sm:p-6 md:p-8">
      <div className="mb-8 sm:mb-12 text-center">
        <Building2 className="mx-auto h-8 w-8 sm:h-10 w-10 md:h-12 w-12 text-primary mb-4" />
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">About Onwardism</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          A unified media platform for engineers and technology teams
        </p>
      </div>

      <div className="grid gap-6 sm:gap-8 md:grid-cols-2 mb-8 sm:mb-12">
        <Card>
          <CardHeader className="p-4 sm:p-6">
            <Target className="h-5 w-5 sm:h-6 w-6 text-primary mb-2" />
            <CardTitle className="text-base sm:text-lg">Our Mission</CardTitle>
          </CardHeader>
          <CardContent className="p-4 sm:p-6 pt-0">
            <p className="text-sm sm:text-base text-muted-foreground">
              To create a platform where engineers and technology teams can share knowledge and insights with clarity and credibility.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="p-4 sm:p-6">
            <Heart className="h-5 w-5 sm:h-6 w-6 text-primary mb-2" />
            <CardTitle className="text-base sm:text-lg">Our Values</CardTitle>
          </CardHeader>
          <CardContent className="p-4 sm:p-6 pt-0">
            <p className="text-sm sm:text-base text-muted-foreground">
              Quality content, technical excellence, and fostering a community of continuous learning and innovation.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="p-4 sm:p-6">
            <Users className="h-5 w-5 sm:h-6 w-6 text-primary mb-2" />
            <CardTitle className="text-base sm:text-lg">For Engineers</CardTitle>
            <CardDescription className="text-sm">
              Individual writers and contributors
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader className="p-4 sm:p-6">
            <Building2 className="h-5 w-5 sm:h-6 w-6 text-primary mb-2" />
            <CardTitle className="text-base sm:text-lg">For Teams</CardTitle>
            <CardDescription className="text-sm">
              Organizations and technology teams
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader className="p-4 sm:p-6">
            <Target className="h-5 w-5 sm:h-6 w-6 text-primary mb-2" />
            <CardTitle className="text-base sm:text-lg">Focus Areas</CardTitle>
            <CardDescription className="text-sm">
              Cloud, Data, Security, and AI
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  )
}