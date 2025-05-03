import { cn } from "@/lib/utils"
import ScrollAnimation from "./scroll-animation"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  emoji?: string
  className?: string
  subtitleClassName?: string
  centered?: boolean
}

export default function SectionHeader({
  title,
  subtitle,
  emoji,
  className,
  subtitleClassName,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div className={cn(centered && "text-center", "mb-10", className)}>
      <ScrollAnimation>
        <h2 className="text-3xl md:text-4xl font-sora font-bold text-purple-800">
          {emoji && <span className="mr-2">{emoji}</span>}
          {title}
        </h2>
      </ScrollAnimation>

      {subtitle && (
        <ScrollAnimation delay={0.2}>
          <p className={cn("mt-3 text-lg text-purple-600/80 font-dm-sans", subtitleClassName)}>{subtitle}</p>
        </ScrollAnimation>
      )}
    </div>
  )
}
