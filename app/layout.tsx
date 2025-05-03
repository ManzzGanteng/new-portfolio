import type React from "react"
import { Sora, DM_Sans } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
})

export const metadata = {
  title: "Portfolio",
  description: "Personal portfolio website that showcases skills and experience",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${sora.variable} ${dmSans.variable} font-sans bg-white`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <div className="purple-gradient-bg"></div>
          <Navbar />
          <main className="relative pt-20 min-h-screen">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
