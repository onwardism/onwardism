import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { 
  HelpCircle, 
  Search, 
  ChevronDown
} from 'lucide-react'

export default function FAQPage() {
  return (
    <div className="container mx-auto p-8">
      <div className="mb-12 text-center">
        <HelpCircle className="mx-auto h-12 w-12 text-primary mb-4" />
        <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Find answers to common questions
        </p>
      </div>

      <div className="mb-12 max-w-md mx-auto">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search FAQ..."
            className="pl-10"
          />
        </div>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader className="cursor-pointer">
            <CardTitle className="flex items-center justify-between text-lg">
              General Questions
              <ChevronDown className="h-5 w-5" />
            </CardTitle>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader className="cursor-pointer">
            <CardTitle className="flex items-center justify-between text-lg">
              Account & Billing
              <ChevronDown className="h-5 w-5" />
            </CardTitle>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader className="cursor-pointer">
            <CardTitle className="flex items-center justify-between text-lg">
              Technical Support
              <ChevronDown className="h-5 w-5" />
            </CardTitle>
          </CardHeader>
        </Card>
      </div>
    </div>
  )
}