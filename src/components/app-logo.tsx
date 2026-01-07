"use client"

import { useTheme } from "next-themes"
import Image from "next/image"
import { useState, useEffect } from "react"

export function AppLogo() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Return a placeholder during SSR
    return (
      <div className="h-6 w-6 bg-muted rounded animate-pulse" />
    )
  }

  return (
    <Image
      src={theme === "dark" ? "/icons/icon-light.png" : "/icons/icon-dark.png"}
      alt="Onwardism"
      width={24}
      height={24}
      className="h-6 w-6"
    />
  )
}