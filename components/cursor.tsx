"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useMousePosition } from "./mouse-position-provider"

interface CursorProps {
  size?: number
  color?: string
  mixBlendMode?: string
}

export default function Cursor({
  size = 40,
  color = "rgba(255, 255, 255, 0.5)",
  mixBlendMode = "difference",
}: CursorProps) {
  const mousePosition = useMousePosition()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)

    // Set visible after a short delay to avoid initial animation
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 500)

    return () => {
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)
      clearTimeout(timer)
    }
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-50 rounded-full mix-blend-difference"
          style={{
            height: size,
            width: size,
            backgroundColor: color,
            mixBlendMode,
            x: mousePosition.x - size / 2,
            y: mousePosition.y - size / 2,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 28,
          }}
        />
      )}
    </AnimatePresence>
  )
}
