"use client"

import { Heart, ArrowRight, BookOpen, Rocket, Gift } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import FancyButton from "@/components/fancy-button"
import ScrollAnimation from "@/components/scroll-animation"
import { Card, CardTitle, CardContent, CardFooter } from "@/components/card"
import SectionHeader from "@/components/section-header"
import AutoType from "@/components/auto-type"
import AutoScrollCarousel from "@/components/auto-scroll-carousel"
import AutoThemeToggle from "@/components/auto-theme-toggle"
import { useRef } from "react"

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -100])

  // Testimonials for auto-scrolling carousel
  const testimonials = [
    {
      name: "Web Developer",
      role: "Pemula bang🗿",
      text: "I am a web developer who is currently learning and developing skills in building web applications and information systems, with a focus on front-end and back-end development, and striving to improve my abilities in the latest technologies.",
      avatar: "/images/logo.png",
    },
    {
      name: "Whatsapp Bot Developer",
      role: "Hehe🗿",
      text: "I am a WhatsApp bot developer who is currently learning and developing new features to create more beneficial and efficient WhatsApp bots.",
      avatar: "/images/logo.png",
    },
  ]

  return (
    <div className="min-h-screen" ref={containerRef}>
      <div className="fixed top-4 right-4 z-40">
        <AutoThemeToggle />
      </div>

      <section className="py-24 md:py-32 overflow-hidden relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <ScrollAnimation>
              <div className="space-y-6">
                <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full font-medium text-sm">
                  Welcome To My Portfolio👋
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-sora font-bold text-purple-800 leading-tight">
                  I'm <span className="text-purple-500">Muhammad Azam Naqib</span>, <br />
                  <AutoType
                    texts={["a Developer"]}
                    className="text-purple-500"
                  />
                </h1>
                <p className="text-lg text-purple-700/80 font-dm-sans">
                  Hello!, My Name is Muhammad Azam Naqib, But You Can Call Me Naqib😎. I Come From Demak City, Central Java, Indonesia. I Am One Of The Self-Taught JavaScript Learners, I'm Interested In JavaScript Because It Doesn't Look Too Complex And I Think JavaScript Is Not Too Difficult If There Is A Will To Learn. My Message For You Guys Keep The Spirit Up!
                </p>
                <div className="flex flex-wrap gap-4">
                  <FancyButton href="/docs" icon={<BookOpen className="w-4 h-4" />} size="lg">
                    Documentation
                  </FancyButton>
                  <FancyButton
                    href="/bio"
                    variant="outline"
                    icon={<ArrowRight className="w-4 h-4" />}
                    iconPosition="right"
                    size="lg"
                  >
                    About Me
                  </FancyButton>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="left" delay={0.3}>
              <div className="relative">
                <motion.div
                  animate={{
                    rotate: [0, 5, 0, -5, 0],
                    scale: [1, 1.02, 1, 1.02, 1],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "mirror",
                  }}
                  className="p-6 bg-white rounded-2xl shadow-xl border border-purple-100 overflow-hidden"
                >
                  <div className="relative aspect-video rounded-lg overflow-hidden mb-6">
                    <Image src="/images/logo.png" alt="Hero Image" fill className="object-cover" />
                  </div>
                  <h2 className="text-xl font-bold text-purple-800 mb-2 font-sora">My Portfolio Journey</h2>
                  <p className="text-purple-700/80 font-dm-sans">Documenting all my processes</p>
                  <div className="mt-6 flex items-center gap-2 text-purple-500">
                    <Heart className="w-4 h-4 fill-purple-500" />
                    <span className="text-sm font-dm-sans">🗿</span>
                  </div>
                </motion.div>

                <div className="absolute -top-6 -right-6 text-6xl emoji-float z-10">✨</div>
                <div className="absolute -bottom-4 -left-4 text-6xl emoji-float z-10" style={{ animationDelay: "2s" }}>
                  🚀
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            emoji="📚"
            title="Documentation"
            subtitle="Explore the different sections of my portfolio"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ScrollAnimation delay={0.1}>
              <Card>
                <div className="text-4xl mb-4">👤</div>
                <CardTitle>Bio</CardTitle>
                <CardContent>
                  <p className="mb-4 font-dm-sans">私の経歴、私が誰なのか、私の能力は何かなど、私のことをもっとよく知ってください.</p>
                </CardContent>
                <CardFooter>
                  <FancyButton
                    href="/bio"
                    variant="outline"
                    size="sm"
                    icon={<ArrowRight className="h-3 w-3" />}
                    iconPosition="right"
                  >
                    View Bio
                  </FancyButton>
                </CardFooter>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
              <Card>
                <div className="text-4xl mb-4">🎓</div>
                <CardTitle>School</CardTitle>
                <CardContent>
                  <p className="mb-4 font-dm-sans">
                    私の教育の旅、成果、学習経験をご覧ください.
                  </p>
                </CardContent>
                <CardFooter>
                  <FancyButton
                    href="/school"
                    variant="outline"
                    size="sm"
                    icon={<ArrowRight className="h-3 w-3" />}
                    iconPosition="right"
                  >
                    School Info
                  </FancyButton>
                </CardFooter>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={0.3}>
              <Card>
                <div className="text-4xl mb-4">🚀</div>
                <CardTitle>Hobbies</CardTitle>
                <CardContent>
                  <p className="mb-4 font-dm-sans">
                    自由時間があるときにやっている趣味.
                  </p>
                </CardContent>
                <CardFooter>
                  <FancyButton
                    href="/hobbies"
                    variant="outline"
                    size="sm"
                    icon={<ArrowRight className="h-3 w-3" />}
                    iconPosition="right"
                  >
                    My Hobbies
                  </FancyButton>
                </CardFooter>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={0.4}>
              <Card>
                <div className="text-4xl mb-4">✨</div>
                <CardTitle>Aspirations</CardTitle>
                <CardContent>
                  <p className="mb-4 font-dm-sans">
                    自分の目標、夢、将来達成したいことを知ります.
                  </p>
                </CardContent>
                <CardFooter>
                  <FancyButton
                    href="/aspirations"
                    variant="outline"
                    size="sm"
                    icon={<ArrowRight className="h-3 w-3" />}
                    iconPosition="right"
                  >
                    My Dreams
                  </FancyButton>
                </CardFooter>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={0.5}>
              <Card>
                <div className="text-4xl mb-4">📄</div>
                <CardTitle>Documentation</CardTitle>
                <CardContent>
                  <p className="mb-4 font-dm-sans">
                    プロジェクト、プロセス、技術情報に関する詳細なドキュメント.
                  </p>
                </CardContent>
                <CardFooter>
                  <FancyButton
                    href="/docs"
                    variant="outline"
                    size="sm"
                    icon={<ArrowRight className="h-3 w-3" />}
                    iconPosition="right"
                  >
                    View Docs
                  </FancyButton>
                </CardFooter>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={0.6}>
              <Card>
                <div className="text-4xl mb-4">📱</div>
                <CardTitle>Contact</CardTitle>
                <CardContent>
                  <p className="mb-4 font-dm-sans">Get in touch with me for collaborations or just to say hello!</p>
                </CardContent>
                <CardFooter>
                  <FancyButton
                    href="/contact"
                    variant="outline"
                    size="sm"
                    icon={<ArrowRight className="h-3 w-3" />}
                    iconPosition="right"
                  >
                    Contact Me
                  </FancyButton>
                </CardFooter>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader emoji="🌟" title="Featured Highlights" subtitle="Quick access to key parts of my portfolio" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollAnimation>
              <div className="bg-gradient-to-br from-purple-500 to-violet-500 p-8 rounded-2xl text-white relative overflow-hidden shadow-lg">
                <div className="absolute -right-5 -top-5 text-7xl opacity-20">🎓</div>
                <h3 className="text-2xl font-bold mb-2 font-sora">教育之旅</h3>
                <p className="mb-6 text-white/80 font-dm-sans">
                  From early education to current studies and certifications
                </p>
                <FancyButton href="/school" variant="secondary" icon={<Rocket className="w-4 h-4" />}>
                  Explore Journey
                </FancyButton>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
              <div className="bg-gradient-to-br from-violet-500 to-fuchsia-500 p-8 rounded-2xl text-white relative overflow-hidden shadow-lg">
                <div className="absolute -right-5 -top-5 text-7xl opacity-20">❤️</div>
                <h3 className="text-2xl font-bold mb-2 font-sora">私の情熱</h3>
                <p className="mb-6 text-white/80 font-dm-sans">私を形作る趣味や興味</p>
                <FancyButton href="/hobbies" variant="secondary" icon={<Heart className="w-4 h-4" />}>
                  Discover Hobbies
                </FancyButton>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.4}>
              <div className="bg-gradient-to-br from-fuchsia-500 to-pink-500 p-8 rounded-2xl text-white relative overflow-hidden shadow-lg">
                <div className="absolute -right-5 -top-5 text-7xl opacity-20">✨</div>
                <h3 className="text-2xl font-bold mb-2 font-sora">今後の目標</h3>
                <p className="mb-6 text-white/80 font-dm-sans">これからの私の抱負と夢</p>
                <FancyButton href="/aspirations" variant="secondary" icon={<Gift className="w-4 h-4" />}>
                  See Aspirations
                </FancyButton>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="py-20 bg-purple-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <SectionHeader emoji="💬" title="My Ability" subtitle="Mwehehe🗿" centered />

          <div className="mt-10">
            <AutoScrollCarousel speed={15} gap={24} itemClassName="w-[350px]">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="h-full">
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden relative">
                        <Image
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-purple-800 font-sora">{testimonial.name}</h4>
                        <p className="text-sm text-purple-600 font-dm-sans">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-purple-700/80 italic font-dm-sans">"{testimonial.text}"</p>
                  </div>
                </Card>
              ))}
            </AutoScrollCarousel>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto">
              <span className="text-6xl mb-6 block emoji-float">📝</span>
              <h2 className="text-3xl md:text-4xl font-sora font-bold text-purple-800 mb-4">もっと探検する準備はできましたか?</h2>
              <p className="text-lg text-purple-700/80 mb-8 font-dm-sans">
                私のポートフォリオのさまざまなセクションをチェックして、私自身、私の旅、私の興味についてもっと知ってください.
              </p>
              <FancyButton href="/docs" size="lg" icon={<BookOpen className="w-5 h-5" />}>
                Start Browsing
              </FancyButton>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <footer className="py-10 border-t border-purple-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="relative w-8 h-8 overflow-hidden rounded-full border-2 border-purple-300 mr-2">
                <Image src="/images/logo.png" alt="Logo" fill className="object-cover" />
              </div>
              <span className="font-sora font-bold text-lg text-purple-800">
                About<span className="text-purple-500">Me</span>
              </span>
            </div>

            <div className="flex space-x-6 mb-4 md:mb-0">
              {[
                { name: "Home", href: "/" },
                { name: "Bio", href: "/bio" },
                { name: "School", href: "/school" },
                { name: "Hobbies", href: "/hobbies" },
                { name: "Aspirations", href: "/aspirations" },
                { name: "Docs", href: "/docs" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-purple-600 hover:text-purple-800 transition-colors font-dm-sans"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="text-sm text-purple-500 font-dm-sans">
              © {new Date().getFullYear()} Manz Portfolio. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
