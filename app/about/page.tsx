"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import RevealText from "@/components/reveal-text"
import ParallaxText from "@/components/parallax-text"
import MagneticButton from "@/components/magnetic-button"
import Cursor from "@/components/cursor"

export default function AboutPage() {
  return (
    <div className="relative">
      <Cursor />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-4 inline-block px-4 py-1 border border-white/20 rounded-full text-sm font-medium backdrop-blur-sm"
            >
              About MPLS
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-syne font-bold mb-8 tracking-tight">
              <RevealText>Mass Production</RevealText>
              <RevealText delay={0.1}>Learning System</RevealText>
            </h1>

            <RevealText delay={0.3} className="mb-8">
              <p className="text-white/70 text-lg">
                MPLS is a revolutionary approach to education that combines advanced technology with innovative teaching
                methodologies to create an immersive and effective learning experience.
              </p>
            </RevealText>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <RevealText>
                <h2 className="text-3xl font-syne font-bold mb-6">Our Vision</h2>
              </RevealText>
              <RevealText delay={0.1} className="mb-6">
                <p className="text-white/70">
                  To revolutionize education by creating a learning system that adapts to individual needs, making
                  high-quality education accessible to everyone, everywhere.
                </p>
              </RevealText>
              <div className="relative h-80 overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                <Image src="/images/logo.png" alt="MPLS Vision" fill className="object-cover" />
              </div>
            </div>

            <div>
              <RevealText>
                <h2 className="text-3xl font-syne font-bold mb-6">Our Mission</h2>
              </RevealText>
              <RevealText delay={0.1} className="mb-6">
                <p className="text-white/70">
                  To develop and implement innovative learning technologies that personalize education, enhance
                  engagement, and improve learning outcomes for students of all backgrounds and abilities.
                </p>
              </RevealText>
              <div className="space-y-4">
                {[
                  "パーソナライズされた学習パス",
                  "没入型教育体験",
                  "データドリブンな洞察",
                  "協働学習環境",
                  "継続的な改善",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                    <p className="text-white/80">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="py-16 bg-black border-y border-white/10 overflow-hidden">
        <div className="flex whitespace-nowrap">
          <ParallaxText speed={-0.5}>
            <div className="flex space-x-4 py-4 text-4xl md:text-6xl font-syne font-bold text-white/10">
              <span>INNOVATION</span>
              <span>•</span>
              <span>TECHNOLOGY</span>
              <span>•</span>
              <span>EDUCATION</span>
              <span>•</span>
              <span>FUTURE</span>
              <span>•</span>
            </div>
          </ParallaxText>
          <ParallaxText speed={-0.5}>
            <div className="flex space-x-4 py-4 text-4xl md:text-6xl font-syne font-bold text-white/10">
              <span>INNOVATION</span>
              <span>•</span>
              <span>TECHNOLOGY</span>
              <span>•</span>
              <span>EDUCATION</span>
              <span>•</span>
              <span>FUTURE</span>
              <span>•</span>
            </div>
          </ParallaxText>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <RevealText>
              <h2 className="text-3xl md:text-5xl font-syne font-bold mb-6">Our Team</h2>
            </RevealText>
            <RevealText delay={0.2}>
              <p className="text-white/70">just fill in the important things in mpls.</p>
            </RevealText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sugiono",
                role: "Legendaris Ewe",
                bio: "Kake Tukang Nanem bibit🗿.",
              },
              {
                name: "Sarah Violid",
                role: "Tobrut Indo",
                bio: "Beuh Tt nya besar 🔥.",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-8 border border-white/10 rounded-2xl backdrop-blur-sm transition-all duration-300 group-hover:border-white/20">
                  <div className="w-20 h-20 rounded-full bg-white/10 mx-auto mb-6 overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center text-2xl">
                      {member.name.charAt(0)}
                    </div>
                  </div>
                  <h3 className="text-xl font-syne font-bold mb-1 text-center">{member.name}</h3>
                  <p className="text-white/50 text-sm mb-4 text-center">{member.role}</p>
                  <p className="text-white/70 text-center">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <RevealText>
              <h2 className="text-3xl md:text-5xl font-syne font-bold mb-6">Join the MPLS Community</h2>
            </RevealText>
            <RevealText delay={0.2}>
              <p className="text-white/70 mb-10">
                Be part of the educational revolution and help shape the future of learning.
              </p>
            </RevealText>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-4"
            >
              <MagneticButton href="/contact">Contact Us</MagneticButton>
              <MagneticButton href="/projects">View Our Projects</MagneticButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-6 md:mb-0">
              <div className="relative w-8 h-8 overflow-hidden rounded-full border border-white/20">
                <Image src="/images/logo.png" alt="MPLS Logo" fill className="object-cover" />
              </div>
              <span className="font-syne font-bold text-lg">MPLS</span>
            </div>

            <div className="flex space-x-6 mb-6 md:mb-0">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Education", href: "/education" },
                { name: "Projects", href: "/projects" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="text-sm text-white/40">© {new Date().getFullYear()} Vaneyya Is Here. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
