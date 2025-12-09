import { redirect, notFound } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { ContentForm } from '@/components/console/content-form'

export default async function EditContentPage({ params }: { params: { id: string } }) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/auth/login')
  }

  // Get article
  const { data: article } = await supabase
    .from('articles')
    .select('*')
    .eq('id', params.id)
    .single()

  if (!article) {
    notFound()
  }

  // Get categories
  const { data: categories } = await supabase
    .from('categories')
    .select('*')
    .order('name')

  return (
    <div className="max-w-4xl">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Edit Content</h1>
        <p className="text-muted-foreground mt-1">
          Update your article
        </p>
      </div>

      <ContentForm categories={categories || []} article={article} />
    </div>
  )
}
