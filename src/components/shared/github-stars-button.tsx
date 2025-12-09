"use client"

import { useState, useEffect } from "react"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface GitHubStarsButtonProps {
  username: string
  repo: string
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg"
  className?: string
}

export function GitHubStarsButton({
  username,
  repo,
  variant = "outline",
  size = "sm",
  className,
}: GitHubStarsButtonProps) {
  const [stars, setStars] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStars = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/${username}/${repo}`
        )
        if (response.ok) {
          const data = await response.json()
          setStars(data.stargazers_count)
        }
      } catch (error) {
        console.error("Failed to fetch GitHub stars:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchStars()
  }, [username, repo])

  const formatStars = (count: number) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`
    }
    return count.toString()
  }

  return (
    <Button
      variant={variant}
      size={size}
      className={cn("gap-2", className)}
      asChild
    >
      <a
        href={`https://github.com/${username}/${repo}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Star className="h-4 w-4" />
        {loading ? (
          <span>Star</span>
        ) : stars !== null ? (
          <span>{formatStars(stars)}</span>
        ) : (
          <span>Star</span>
        )}
      </a>
    </Button>
  )
}
