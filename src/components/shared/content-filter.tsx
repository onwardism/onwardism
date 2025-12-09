"use client"

import { Button } from "@/components/ui/button"
import { ArrowUpDown } from "lucide-react"

interface ContentFilterProps {
  categories?: string[]
  showSortBy?: boolean
}

export function ContentFilter({ categories, showSortBy = true }: ContentFilterProps) {
  return (
    <div className="flex items-center justify-between gap-4 flex-wrap">
      {categories && categories.length > 0 && (
        <div className="flex gap-2 flex-wrap">
          <Button variant="outline" size="sm">
            All
          </Button>
          {categories.map((category) => (
            <Button key={category} variant="ghost" size="sm">
              {category}
            </Button>
          ))}
        </div>
      )}
      {showSortBy && (
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Sort by:</span>
          <Button variant="outline" size="sm">
            <ArrowUpDown className="mr-2 h-4 w-4" />
            Most Viewed
          </Button>
        </div>
      )}
    </div>
  )
}
