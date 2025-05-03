import type React from "react"
import { forwardRef } from "react"
import { cn } from "@/lib/utils"
import { Button as ShadcnButton } from "@/components/ui/button"
import { cva, type VariantProps } from "class-variance-authority"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-purple-600 text-white hover:bg-purple-700",
        outline: "border border-purple-600 text-purple-600 hover:bg-purple-50",
        ghost: "hover:bg-purple-50 text-purple-600",
        link: "text-purple-600 underline-offset-4 hover:underline",
        gradient: "bg-gradient-to-r from-purple-600 to-purple-400 text-white hover:opacity-90",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-8 px-4 py-1 text-sm",
        lg: "h-12 px-8 py-3 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const CustomButton = forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, ...props }, ref) => {
  return <ShadcnButton className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
})

CustomButton.displayName = "CustomButton"

export { CustomButton, buttonVariants }
