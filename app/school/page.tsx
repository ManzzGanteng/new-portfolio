"use client"

import { motion } from "framer-motion"
import ScrollAnimation from "@/components/scroll-animation"
import FancyButton from "@/components/fancy-button"
import SectionHeader from "@/components/section-header"
import { Card, CardContent, CardTitle } from "@/components/card"

export default function SchoolPage() {
  const education = [
    {
      period: "2024 - Present",
      school: "Online Learning",
      degree: "-",
      description: "Continuously expanding my knowledge through online courses and certifications.",
      achievements: ["Web Development", "Bot Developer"],
      emoji: "💻",
    },
    {
      period: "2024 - Present",
      school: "Self Taught Website Development",
      degree: "-",
      description: "I always learn independently to develop websites using the programming languages java script, html, css.",
      achievements: ["-"],
      emoji: "🏫",
    },
  ]

  const skills = [
    { name: "Communication", level: 93 },
    { name: "Problem Solving", level: 98 },
    { name: "Teamwork", level: 94 },
    { name: "Critical Thinking", level: 97 },
    { name: "Creativity", level: 95 },
    { name: "Time Management", level: 91 },
  ]

  return (
    <div className="min-h-screen">
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6 inline-block px-4 py-1 bg-purple-100 text-purple-700 rounded-full font-medium text-sm">
              Education 🎓
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-quicksand font-bold text-purple-800 leading-tight mb-6">
              My <span className="text-purple-500">Educational</span> Journey
            </h1>

            <p className="text-lg text-purple-700/80 mb-8">
              Exploring my academic background, achievements, and the skills I've developed along the way.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <SectionHeader
            emoji="🏫"
            title="Education Timeline"
            subtitle="My academic background and qualifications"
            centered
          />

          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-purple-200 transform md:translate-x-[-0.5px]"></div>

            {education.map((item, index) => (
              <ScrollAnimation key={index} delay={index * 0.2}>
                <div
                  className={`mb-16 relative grid grid-cols-1 md:grid-cols-2 gap-8 ${index % 2 === 0 ? "" : "md:flex-row-reverse"}`}
                >
                  <div className={`relative ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    <div className="absolute left-4 md:left-auto md:right-0 top-0 w-4 h-4 rounded-full bg-purple-500 border-4 border-white -ml-[11px] md:ml-0 md:-mr-[11px] z-10"></div>
                    <div className="pl-12 md:pl-0">
                      <span className="inline-block px-4 py-1 bg-purple-500 text-white rounded-full text-sm font-medium mb-2">
                        {item.period}
                      </span>
                      <h3 className="text-2xl font-bold text-purple-800 mb-1">{item.school}</h3>
                      <p className="text-purple-600 font-medium">{item.degree}</p>
                    </div>
                  </div>

                  <Card className={`ml-12 md:ml-0 ${index % 2 === 0 ? "" : "md:row-start-1"}`}>
                    <div className="text-4xl mb-4">{item.emoji}</div>
                    <CardContent>
                      <p className="mb-4 text-purple-700/80">{item.description}</p>
                      <div className="space-y-2">
                        <p className="font-bold text-purple-800">Achievements:</p>
                        <ul className="list-disc list-inside">
                          {item.achievements.map((achievement, i) => (
                            <li key={i} className="text-purple-700/80">
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollAnimation>
              <SectionHeader
                emoji="🧠"
                title="Skills & Competencies"
                subtitle="What I've learned and developed through my education"
              />

              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium text-purple-800">{skill.name}</span>
                      <span className="text-purple-600">{skill.level}%</span>
                    </div>
                    <div className="w-full h-3 bg-purple-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-purple-500 to-violet-500 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="left">
              <Card className="p-8">
                <CardTitle>Learning Philosophy</CardTitle>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-purple-700/80">
                      I believe in continuous learning and the power of education to transform lives. My approach to
                      learning is based on curiosity, persistence, and practical application of knowledge.
                    </p>
                    <p className="text-purple-700/80">
                      Throughout my educational journey, I've focused on not just acquiring information, but developing
                      critical thinking skills and the ability to solve complex problems.
                    </p>
                    <p className="text-purple-700/80">
                      I value collaborative learning environments where diverse perspectives can contribute to a deeper
                      understanding of subjects and more creative solutions to challenges.
                    </p>

                    <div className="pt-4 flex items-center justify-center">
                      <div className="text-5xl emoji-float">🌱</div>
                      <p className="ml-4 italic text-purple-600 font-medium">
                        "Education is not the filling of a pot but the lighting of a fire."
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto">
              <span className="text-6xl mb-6 block emoji-float">📚</span>
              <h2 className="text-3xl md:text-4xl font-quicksand font-bold text-purple-800 mb-4">
                Continue exploring my journey
              </h2>
              <p className="text-lg text-purple-700/80 mb-8">
                Learn more about my hobbies, aspirations, and personal interests
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <FancyButton href="/hobbies">My Hobbies</FancyButton>
                <FancyButton href="/aspirations" variant="outline">
                  My Aspirations
                </FancyButton>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  )
}
