import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Filter, FileText } from "lucide-react"

export default function ConsoleResearchPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Research</h1>
          <p className="text-muted-foreground">Manage your research papers and publications</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Research
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Research Papers</CardTitle>
          <CardDescription>All published and draft research papers</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-12">
            <FileText className="w-12 h-12 text-muted-foreground mb-4" />
            <p className="text-muted-foreground">No research papers yet</p>
            <Button className="mt-4">
              <Plus className="mr-2 h-4 w-4" />
              Create your first research paper
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
