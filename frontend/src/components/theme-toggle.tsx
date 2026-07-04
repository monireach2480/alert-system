"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Sun, Moon, Monitor } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="w-8 h-8" aria-label="Toggle theme">
        <Monitor className="w-4 h-4" />
      </Button>
    )
  }

  const icons = {
    light: <Sun className="w-4 h-4" />,
    dark: <Moon className="w-4 h-4" />,
    system: <Monitor className="w-4 h-4" />,
  }

  const next = theme === "light" ? "dark" : theme === "dark" ? "system" : "light"

  return (
    <Button
      variant="ghost"
      size="icon"
      className="w-8 h-8"
      onClick={() => setTheme(next)}
      aria-label="Toggle theme"
      title={`Current: ${theme} — click for ${next}`}
    >
      {icons[theme as keyof typeof icons] ?? <Monitor className="w-4 h-4" />}
    </Button>
  )
}