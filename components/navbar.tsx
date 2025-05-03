"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Book, Home, User, Heart, Star, GraduationCap, X, Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Bio", href: "/bio", icon: User },
  { name: "School", href: "/school", icon: GraduationCap },
  { name: "Hobbies", href: "/hobbies", icon: Heart },
  { name: "Aspirations", href: "/aspirations", icon: Star },
  { name: "Docs", href: "/docs", icon: Book },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll events - only change appearance, never hide the navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 z-10">
            <div className="relative w-10 h-10 overflow-hidden rounded-full border-2 border-purple-300">
              <Image src="/images/logo.png" alt="Logo" fill className="object-cover" />
            </div>
            <span className="font-sora font-bold text-xl tracking-wide text-purple-800">
              About<span className="text-purple-500">Me</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href

              return (
                <Link key={item.href} href={item.href}>
                  <div
                    className={cn(
                      "px-4 py-2 flex items-center gap-1.5 font-medium rounded-full transition-all",
                      isActive
                        ? "text-white bg-purple-600 shadow-md shadow-purple-200"
                        : "text-purple-700 hover:bg-purple-100",
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="font-dm-sans">{item.name}</span>
                  </div>
                </Link>
              )
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-purple-600 text-white"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setIsOpen(false)} />}

      {/* Mobile Menu Panel */}
      <div
        className={cn(
          "fixed top-0 right-0 bottom-0 w-[80%] max-w-[300px] bg-white z-50 md:hidden transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="flex justify-between items-center p-4 border-b border-purple-100">
            <div className="flex items-center space-x-2">
              <div className="relative w-10 h-10 overflow-hidden rounded-full border-2 border-purple-300">
                <Image src="/images/logo.png" alt="Logo" fill className="object-cover" />
              </div>
              <span className="font-sora font-bold text-xl tracking-wide text-purple-800">
                About<span className="text-purple-500">Me</span>
              </span>
            </div>
            <button
              className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-600 text-white"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex-1 overflow-auto p-4">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href

                return (
                  <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                    <div
                      className={cn(
                        "flex items-center space-x-3 p-3 rounded-lg transition-all",
                        isActive ? "bg-purple-600 text-white" : "text-purple-700 hover:bg-purple-50",
                      )}
                    >
                      <Icon className="h-5 w-5" />
                      <span className="font-medium">{item.name}</span>
                    </div>
                  </Link>
                )
              })}
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
