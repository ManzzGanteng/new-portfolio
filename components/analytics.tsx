"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { useEffect } from "react"

export function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // This is where you would typically add analytics tracking
    // For example, with Google Analytics or similar
    const url = `${pathname}${searchParams.toString() ? `?${searchParams.toString()}` : ""}`
    console.log(`Page view: ${url}`)
  }, [pathname, searchParams])

  return null
}
