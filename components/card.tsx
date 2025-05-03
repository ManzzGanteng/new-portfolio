"use client"

import type React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface CardProps {
  children: React.ReactNode
  className?: string
  hoverEffect?: boolean
}

export function Card({ children, className, hoverEffect = true }: CardProps) {
  return (
    <motion.div
      whileHover={
        hoverEffect
          ? {
              y: -5,
              boxShadow: "0 20px 25px -5px rgba(124, 58, 237, 0.1), 0 10px 10px -5px rgba(124, 58, 237, 0.04)",
              transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
            }
          : {}
      }
      className={cn("rounded-2xl bg-white p-6 shadow-lg border border-purple-100 transition-all", className)}
    >
      {children}
    </motion.div>
  )
}

export function CardTitle({ children, className }: { children: React.ReactNode; className?: string }) {
  return <h3 className={cn("text-xl font-bold mb-2 text-purple-800 font-sora", className)}>{children}</h3>
}

export function CardContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("text-gray-600 font-dm-sans", className)}>{children}</div>
}

export function CardFooter({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("mt-4 pt-4 border-t border-purple-100", className)}>{children}</div>
}
