"use client"
import Image from "next/image"
import { Code, Music, Camera, Coffee, Users, MessageSquare } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"
import FancyButton from "@/components/fancy-button"
import SectionHeader from "@/components/section-header"
import { Card } from "@/components/card"

export default function BioPage() {
  return (
    <div className="min-h-screen">
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6 inline-block px-4 py-1 bg-purple-100 text-purple-700 rounded-full font-medium text-sm">
              About Me 👤
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-quicksand font-bold text-purple-800 leading-tight mb-6">
              Hi, I'm <span className="text-purple-500">Muhammad Azam Naqib</span>
            </h1>

            <p className="text-lg text-purple-700/80 mb-8">
              A passionate creator, student, and dreamer with a love for technology, arts, and making a positive impact.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollAnimation>
              <div className="relative">
                <div className="relative z-10 rounded-2xl overflow-hidden w-4/5 aspect-square mx-auto border-8 border-white shadow-xl">
                  <Image src="/images/logo.png" alt="Profile Photo" fill className="object-cover" />
                </div>
                <div className="absolute top-10 -right-4 bg-purple-100 p-4 rounded-xl shadow-lg w-36 z-20">
                  <div className="text-3xl mb-1">👋</div>
                  <p className="text-purple-800 text-sm font-medium">Nice to meet you!</p>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-purple-500 text-white p-4 rounded-xl shadow-lg w-36 z-20">
                  <div className="text-3xl mb-1">💭</div>
                  <p className="text-white text-sm font-medium">Always learning</p>
                </div>
                <div className="absolute -bottom-10 right-20 bg-white p-3 rounded-xl shadow-lg z-20">
                  <div className="text-3xl">✨</div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="left">
              <SectionHeader title="My Bio" subtitle="A brief introduction about myself" />

              <div className="space-y-6 text-purple-700/80">
                <p>
                  I'm currently a student at MAN Demak, Continuing my studies in the field of Science. I have an interest in programming and enjoy exploring new technologies and creative ways to express myself.
                </p>
                <p>
                  My journey began when I first discovered my interest in programming and technology. Since then, I've been continuously learning and growing in various aspects of my life.
                </p>
                <p>
                  When I'm not studying or working on projects, you can find me enjoying my hobbies, spending time with
                  friends, or exploring new places.
                </p>

                <div className="flex flex-wrap gap-3 pt-4">
                  <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm">
                    Creative Thinking
                  </span>
                  <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm">Problem Solving</span>
                  <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm">Teamwork</span>
                  <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm">Communication</span>
                  <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm">Adaptability</span>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeader emoji="💫" title="What I Love" subtitle="A few things that I'm passionate about" centered />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="h-8 w-8" />,
                title: "Technology",
                description: "Exploring new technologies and building cool projects",
              },
              {
                icon: <Music className="h-8 w-8" />,
                title: "Music",
                description: "Listening to music that inspires me",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Community",
                description: "Being part of communities and learning from others",
              },
              {
                icon: <MessageSquare className="h-8 w-8" />,
                title: "Storytelling",
                description: "Sharing experiences and stories that inspire",
              },
            ].map((item, index) => (
              <ScrollAnimation key={index} delay={index * 0.1}>
                <Card className="h-full flex flex-col items-center text-center p-8">
                  <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4 text-purple-600">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-purple-800 mb-2">{item.title}</h3>
                  <p className="text-purple-700/80">{item.description}</p>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto">
              <span className="text-6xl mb-6 block emoji-float">🌈</span>
              <h2 className="text-3xl md:text-4xl font-quicksand font-bold text-purple-800 mb-4">Want to know more?</h2>
              <p className="text-lg text-purple-700/80 mb-8">
                私の学歴、趣味、将来の夢などをチェックして、私についてもっと知ってください!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <FancyButton href="/school">School Background</FancyButton>
                <FancyButton href="/hobbies" variant="outline">
                  My Hobbies
                </FancyButton>
                <FancyButton href="/aspirations" variant="secondary">
                  Future Goals
                </FancyButton>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  )
}
