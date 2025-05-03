import ScrollAnimation from "@/components/scroll-animation"
import { CustomButton } from "@/components/custom-button"
import { Card, CardTitle, CardContent } from "@/components/card"
import Link from "next/link"

export default function EducationPage() {
  const educationData = [
    {
      school: "Online Learning",
      degree: "-",
      year: "2025 - Present",
      description:
        "Continuously learning through platforms like Coursera, Udemy, and freeCodeCamp to stay updated with the latest technologies.",
      emoji: "💻",
    },
  ]

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-700 to-purple-500 bg-clip-text text-transparent mb-6">
                My Education Journey 🎓
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                The places and experiences that have shaped my knowledge and skills
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-200 rounded-full"></div>

              {educationData.map((item, index) => (
                <ScrollAnimation key={index} delay={index * 0.2}>
                  <div className="relative mb-12">
                    <div className="absolute left-1/2 transform -translate-x-1/2 -top-2 w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center text-xl z-10">
                      {item.emoji}
                    </div>
                    <Card
                      className={`ml-0 md:ml-${index % 2 === 0 ? "12" : "0"} md:mr-${index % 2 === 0 ? "0" : "12"} relative`}
                    >
                      <div className="flex flex-col md:flex-row justify-between mb-2">
                        <CardTitle>{item.school}</CardTitle>
                        <span className="text-purple-600 font-medium">{item.year}</span>
                      </div>
                      <h4 className="text-lg font-medium text-gray-700 mb-2">{item.degree}</h4>
                      <CardContent>{item.description}</CardContent>
                    </Card>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-purple-800">Skills Acquired 🚀</h2>
              <p className="text-lg text-gray-600 mb-8">
                Throughout my education, I've developed a diverse set of skills
              </p>

              <div className="flex flex-wrap justify-center gap-2">
                {[
                  "JavaScript",
                  "React",
                  "Node.js",
                  "Yapping",
                  "Membual",
                  "Pawn",
                  "Java",
                  "Html",
                  "Css", 
                  "MySQL"
                  "Next Js",
                ].map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white rounded-full text-purple-700 shadow-sm border border-purple-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold mb-8 text-purple-800">Continue Exploring 🔍</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/hobbies">
                <CustomButton variant="gradient">Check Out My Hobbies →</CustomButton>
              </Link>
              <Link href="/about">
                <CustomButton variant="outline">Back to About Me</CustomButton>
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  )
}
