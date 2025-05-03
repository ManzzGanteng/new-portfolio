"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AutoScrollCarouselProps {
  children: React.ReactNode[]
  speed?: number
  gap?: number
  className?: string
  itemClassName?: string
  autoplay?: boolean
  pauseOnHover?: boolean
}

export default function AutoScrollCarousel({
  children,
  speed = 20,
  gap = 20,
  className,
  itemClassName,
  autoplay = true,
  pauseOnHover = true,
}: AutoScrollCarouselProps) {
  const [width, setWidth] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth)
    }
  }, [children])

  const duration = width / speed

  return (
    <div
      className={cn("overflow-hidden", className)}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        ref={carouselRef}
        className="flex"
        animate={autoplay && !isPaused ? { x: -width } : { x: 0 }}
        transition={
          autoplay && !isPaused
            ? {
                x: { duration, ease: "linear", repeat: Number.POSITIVE_INFINITY, repeatType: "loop" },
              }
            : undefined
        }
      >
        <div className="flex gap-[var(--gap)]" style={{ "--gap": `${gap}px` } as React.CSSProperties}>
          {children.map((child, index) => (
            <div key={index} className={cn("flex-shrink-0", itemClassName)}>
              {child}
            </div>
          ))}
        </div>

        <div className="flex gap-[var(--gap)]" style={{ "--gap": `${gap}px` } as React.CSSProperties}>
          {children.map((child, index) => (
            <div key={`duplicate-${index}`} className={cn("flex-shrink-0", itemClassName)}>
              {child}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
