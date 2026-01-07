import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Info, Users, Target, Heart } from 'lucide-react'

export default function AboutPage() {
  return (
    <main className="container mx-auto p-8">
      <div className="flex items-center gap-2 mb-8">
        <Info className="h-6 w-6" />
        <h1 className="text-3xl font-bold">About Us</h1>
      </div>
      
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Mission */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Our mission statement and company purpose will be displayed here.
            </p>
          </CardContent>
        </Card>

        {/* Team */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Our Team
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Information about our team and contributors will be displayed here.
            </p>
          </CardContent>
        </Card>

        {/* Values */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5" />
              Our Values
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Our core values and principles will be displayed here.
            </p>
          </CardContent>
        </Card>

        {/* Contact */}
        <Card>
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
            <CardDescription>
              Contact information and ways to reach us
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Contact details and communication channels will be displayed here.
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}