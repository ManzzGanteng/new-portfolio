import ScrollAnimation from "@/components/scroll-animation"
import { CustomButton } from "@/components/custom-button"
import { Card, CardTitle, CardContent } from "@/components/card"
import Link from "next/link"

export default function AspirationsPage() {
  const aspirations = [
    {
      title: "Website Developer",
      description: "A Web Developer is a professional responsible for designing, building, and maintaining websites. They use various technologies and programming languages to create functional, aesthetically pleasing, and user-friendly websites.",
      emoji: "🌐",
    },
    {
      title: "Data Scientist",
      description: "A Data Scientist is a professional who uses scientific methods, algorithms, and technology to analyze and interpret complex data. They work with large datasets to identify patterns, trends, and insights that can help organizations make better decisions.",
      emoji: "📊",
    },
    {
      title: "Cyber Security",
      description: "Cybersecurity is the practice of protecting computer systems, networks, and data from unauthorized access, damage, or attacks. Its goal is to ensure the confidentiality, integrity, and availability of data and systems.",
      emoji: "🛡️",
    },
  ]

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-700 to-purple-500 bg-clip-text text-transparent mb-6">
                My Aspirations & Goals 🚀
              </h1>
              <p className="text-lg text-gray-600 mb-8">The dreams and ambitions that drive me forward</p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aspirations.map((aspiration, index) => (
              <ScrollAnimation key={index} delay={index * 0.1}>
                <Card>
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-4">{aspiration.emoji}</span>
                    <div>
                      <CardTitle>{aspiration.title}</CardTitle>
                      <span
                        className={`text-sm px-3 py-1 rounded-full ${
                          aspiration.timeframe === "Short-term"
                            ? "bg-green-100 text-green-700"
                            : aspiration.timeframe === "Medium-term"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-purple-100 text-purple-700"
                        }`}
                      >
                        {aspiration.timeframe}
                      </span>
                    </div>
                  </div>
                  <CardContent>{aspiration.description}</CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-purple-800">My Vision</h2>
              <p className="text-lg text-gray-600 mb-8">
                I believe in creating a future where technology enhances human creativity and connection rather than
                replacing it. My goal is to contribute to this vision through my work and projects.
              </p>
              <Card className="text-left p-6 bg-white/80 backdrop-blur">
                <CardContent>
                  <p className="italic text-gray-600">
                    "The best way to predict the future is to create it." — Peter Drucker
                  </p>
                </CardContent>
              </Card>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-purple-800">目標を達成するためのステップ</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center mr-4 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-purple-800">継続的な学習</h3>
                      <p className="text-gray-600">毎週新しいスキルやテクノロジーを学ぶ時間を割く</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center mr-4 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-purple-800">Building Projects</h3>
                      <p className="text-gray-600">
                        実際の問題を解決する実践的なプロジェクトを作成して知識を応用します。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center mr-4 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-purple-800">ネットワーキング</h3>
                      <p className="text-gray-600">同じ志を持つ人やメンター候補とつながる</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center mr-4 flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-purple-800">反射</h3>
                      <p className="text-gray-600">定期的に進捗状況をレビューし、必要に応じて戦略を調整する</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white text-9xl">
                🎯
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold mb-8 text-purple-800">Explore More 🔍</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/">
                <CustomButton variant="gradient">Back to Home</CustomButton>
              </Link>
              <Link href="/hobbies">
                <CustomButton variant="outline">Check Out My Hobbies</CustomButton>
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  )
}
