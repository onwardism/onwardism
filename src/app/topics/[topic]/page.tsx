import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Cloud, Database, Shield, Brain, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

interface TopicPageProps {
  params: {
    topic: string
  }
}

const topicIcons = {
  cloud: Cloud,
  data: Database,
  security: Shield,
  ai: Brain,
}

const topicTitles = {
  cloud: 'Cloud Computing',
  data: 'Data Science',
  security: 'Cybersecurity',
  ai: 'Artificial Intelligence',
}

const topicDescriptions = {
  cloud: 'Cloud computing, infrastructure, and platform services',
  data: 'Data science, analytics, and big data technologies',
  security: 'Cybersecurity, privacy, and information protection',
  ai: 'Artificial intelligence, machine learning, and automation',
}

export default function TopicPage({ params }: TopicPageProps) {
  const topic = params.topic as keyof typeof topicIcons
  const Icon = topicIcons[topic] || Cloud
  const title = topicTitles[topic] || params.topic
  const description = topicDescriptions[topic] || `Content related to ${params.topic}`

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
      
      <div className="flex items-center gap-3 mb-8">
        <Icon className="h-8 w-8" />
        <div>
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
      
      <div className="text-center py-12">
        <Icon className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
        <h2 className="text-2xl font-semibold mb-2">No content yet</h2>
        <p className="text-muted-foreground">
          Articles and posts related to {title.toLowerCase()} will appear here when published.
        </p>
      </div>
    </main>
  )
}