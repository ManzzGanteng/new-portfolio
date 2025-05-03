"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  href?: string
  strength?: number
}

export default function MagneticButton({ children, className, onClick, href, strength = 40 }: MagneticButtonProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const ref = useRef<HTMLDivElement>(null)

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current.getBoundingClientRect()

    const x = (clientX - (left + width / 2)) / strength
    const y = (clientY - (top + height / 2)) / strength

    setPosition({ x, y })
  }

  const reset = () => {
    setPosition({ x: 0, y: 0 })
  }

  const ButtonTag = href ? "a" : "button"
  const buttonProps = href ? { href } : { onClick }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 350, damping: 15, mass: 0.1 }}
      className={cn("inline-block", className)}
    >
      <ButtonTag
        {...buttonProps}
        className="relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white/5 border border-white/10 px-6 py-3 font-syne font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black"
      >
        {children}
      </ButtonTag>
    </motion.div>
  )
}
