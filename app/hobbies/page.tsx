"use client"

import Image from "next/image"
import ScrollAnimation from "@/components/scroll-animation"
import SectionHeader from "@/components/section-header"
import { Card, CardContent, CardTitle } from "@/components/card"

export default function HobbiesPage() {
  const hobbies = [
    {
      title: "Sport",
      description: "I like sports because it can refresh the body and make the body healthy.",
      emoji: "🏅",
      color: "from-purple-500 to-violet-500",
    },
    {
      title: "Reading",
      description: "Expanding my knowledge and imagination through books of various genres.",
      emoji: "📚",
      color: "from-violet-500 to-fuchsia-500",
    },
    {
      title: "Listening To Music",
      description: "I like listening to music in my free time, because it can calm my mind and make me relax.",
      emoji: "🎵",
      color: "from-fuchsia-500 to-purple-500",
    },
  ]

  return (
    <div className="min-h-screen">
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6 inline-block px-4 py-1 bg-purple-100 text-purple-700 rounded-full font-medium text-sm">
              Hobbies & Interests ❤️
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-quicksand font-bold text-purple-800 leading-tight mb-6">
              Things I <span className="text-purple-500">Love</span> to Do
            </h1>
            
            <p className="text-lg text-purple-700/80 mb-8">
              Exploring my passions and the activities that bring joy and balance to my life.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <SectionHeader
            emoji="❤️"
            title="My Hobbies"
            subtitle="Activities I enjoy during my free time"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hobbies.map((hobby, index) => (
              <ScrollAnimation key={index} delay={index * 0.1}>
                <Card className="overflow-hidden h-full">
                  <div className={`h-32 bg-gradient-to-r ${hobby.color} flex items-center justify-center text-white text-5xl`}>
                    <span className="emoji-float" style={{ animationDelay: `${index * 0.5}s` }}>
                      {hobby.emoji}
                    </span>
                  </div>
                  <div className="p-6">
                    <CardTitle>{hobby.title}</CardTitle>
                    <CardContent>{hobby.description}</CardContent>
                  </div>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollAnimation>
              <div className="relative">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <div className="rounded-2xl overflow-hidden h-48 shadow-lg">
                      <Image
                        src="/images/logo.png"
                        alt="Hobby Image 1"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="rounded-2xl overflow-hidden h-32 shadow-lg">
                      <Image
                        src="/images/logo.png"
                        alt="Hobby Image 2"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="space-y-6 mt-10">
                    <div className="rounded-2xl overflow-hidden h-32 shadow-lg">
                      <Image
                        src="/images/logo.png"
                        alt="Hobby Image 3"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="rounded-2xl overflow-hidden h-48 shadow-lg">
                      <Image
                        src="/images/logo.png"
                        alt="Hobby Image 4"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-full shadow-xl flex items-center justify-center z-10 text-4xl emoji-float">
                  🎨
                </div>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation direction="left">
              <SectionHeader
                title="Why Hobbies Matter"
                subtitle="The importance of following your passions"
              />
              
              <div className="space-y-6 text-purple-700/80">
                <p>
                  Hobbies are more than just ways to pass time—they're essential for personal growth, stress relief, and discovering new parts of yourself. They help me maintain balance and find joy outside of work and studies.
                </p>
                <p>
                  Through my hobbies, I've developed new skills, met amazing people with similar interests, and found creative outlets for self-expression. They've been instrumental in shaping who I am today.
                </p>
                <p>
                  I believe that making time for activities you love is vital for mental well-being and personal fulfillment. My hobbies have taught me patience, perseverance, and the value of pursuing passions.
                </p>
                
                <blockquote className="border-l-4 border-purple-500 pl-4 italic mt-8">
                  "Find something you love and let it kill you." - Charles Bukowski
                </blockquote>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimation>
            <div></div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  )
}