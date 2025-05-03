"use client"

import type React from "react"

import { useRef, useEffect } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { cn } from "@/lib/utils"

interface RevealTextProps {
  children: React.ReactNode
  className?: string
  delay?: number
  once?: boolean
}

export default function RevealText({ children, className, delay = 0, once = true }: RevealTextProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <motion.div
        variants={{
          hidden: { y: "100%" },
          visible: { y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1],
          delay,
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}
