"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface FancyButtonProps {
  children: ReactNode
  onClick?: () => void
  className?: string
  href?: string
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
  icon?: ReactNode
  iconPosition?: "left" | "right"
  disabled?: boolean
}

export default function FancyButton({
  children,
  onClick,
  className,
  href,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "left",
  disabled = false,
}: FancyButtonProps) {
  const variantClasses = {
    primary: "bg-gradient-to-r from-purple-500 to-violet-500 text-white shadow-md shadow-purple-200 font-dm-sans",
    secondary: "bg-purple-100 text-purple-700 hover:bg-purple-200 font-dm-sans",
    outline: "bg-transparent text-purple-700 border-2 border-purple-300 hover:border-purple-500 font-dm-sans",
  }

  const sizeClasses = {
    sm: "text-xs py-2 px-4",
    md: "text-sm py-3 px-6",
    lg: "text-base py-4 px-8",
  }

  const buttonContent = (
    <motion.div
      whileHover={disabled ? {} : { scale: 1.03 }}
      whileTap={disabled ? {} : { scale: 0.97 }}
      className={cn(
        "flex items-center justify-center font-medium rounded-full transition-all",
        "elegant-hover",
        variantClasses[variant],
        sizeClasses[size],
        disabled && "opacity-60 cursor-not-allowed",
        className,
      )}
    >
      {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
    </motion.div>
  )

  if (href && !disabled) {
    return <a href={href}>{buttonContent}</a>
  }

  return (
    <button onClick={onClick} disabled={disabled}>
      {buttonContent}
    </button>
  )
}
