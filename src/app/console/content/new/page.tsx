import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { ContentForm } from '@/components/console/content-form'

export default async function NewContentPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/auth/login')
  }

  // Get categories
  const { data: categories } = await supabase
    .from('categories')
    .select('*')
    .order('name')

  return (
    <div className="max-w-4xl">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Create New Content</h1>
        <p className="text-muted-foreground mt-1">
          Write and publish your article
        </p>
      </div>

      <ContentForm categories={categories || []} />
    </div>
  )
}
