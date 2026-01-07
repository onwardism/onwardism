import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Users,
  Heart,
  Zap
} from 'lucide-react'

export default function CareersPage() {
  return (
    <div className="container mx-auto p-8">
      <div className="mb-12 text-center">
        <Briefcase className="mx-auto h-12 w-12 text-primary mb-4" />
        <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Help us build the future of technical knowledge sharing
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3 mb-12">
        <Card>
          <CardHeader>
            <Users className="h-6 w-6 text-primary mb-2" />
            <CardTitle>Great Team</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Work with talented engineers and creators who are passionate about technology.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Zap className="h-6 w-6 text-primary mb-2" />
            <CardTitle>Innovation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Be part of building cutting-edge solutions for the engineering community.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Heart className="h-6 w-6 text-primary mb-2" />
            <CardTitle>Impact</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Make a meaningful difference in how engineers share and consume knowledge.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Open Positions</h2>
        
        <Card>
          <CardHeader>
            <CardTitle>Software Engineer</CardTitle>
            <CardDescription className="flex items-center gap-4 mt-2">
              <span className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                Remote
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                Full-time
              </span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Join our engineering team to build scalable platform features.
            </p>
            <Button>Apply Now</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Content Manager</CardTitle>
            <CardDescription className="flex items-center gap-4 mt-2">
              <span className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                Remote
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                Full-time
              </span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Help curate and manage high-quality technical content.
            </p>
            <Button>Apply Now</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Community Manager</CardTitle>
            <CardDescription className="flex items-center gap-4 mt-2">
              <span className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                Remote
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                Part-time
              </span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Build and engage our community of engineers and writers.
            </p>
            <Button>Apply Now</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}