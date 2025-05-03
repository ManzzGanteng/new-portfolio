"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface AutoTypeProps {
  texts: string[]
  typingSpeed?: number
  deletingSpeed?: number
  delayBetween?: number
  className?: string
  showCursor?: boolean
}

export default function AutoType({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetween = 1500,
  className,
  showCursor = true,
}: AutoTypeProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (isTyping) {
      if (displayText === texts[currentIndex]) {
        // Finished typing current text, wait before deleting
        timeout = setTimeout(() => {
          setIsTyping(false)
        }, delayBetween)
      } else {
        // Still typing
        timeout = setTimeout(
          () => {
            setDisplayText(texts[currentIndex].substring(0, displayText.length + 1))
          },
          typingSpeed + Math.random() * 50,
        ) // Add slight randomness for more natural typing
      }
    } else {
      if (displayText === "") {
        // Finished deleting, move to next text
        setCurrentIndex((currentIndex + 1) % texts.length)
        setIsTyping(true)
      } else {
        // Still deleting
        timeout = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1))
        }, deletingSpeed)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayText, currentIndex, isTyping, texts, typingSpeed, deletingSpeed, delayBetween])

  return <span className={cn(showCursor && "auto-type-cursor", className)}>{displayText}</span>
}
