"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function ArticlePage() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
        <header className="py-8 sm:py-12 border-b border-border/50">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              <svg
                className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              <span className="text-sm font-mono">返回首页</span>
            </Link>

            <button
              onClick={toggleTheme}
              className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <svg
                  className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          </div>
        </header>

        <article className="py-12 sm:py-16">
          <div className="space-y-8 sm:space-y-12">
            {/* Article meta */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-sm text-muted-foreground font-mono">
                <span>2024年8月</span>
                <span>•</span>
                <span>{"事件"}</span>
                <span>•</span>
                <span>2分钟阅读</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-tight">
                首届清华大学临床医学创新转化大赛启动仪式举行
              </h1>
            </div>

            {/* Article content */}
            <div className="prose prose-lg max-w-none">
              <div className="space-y-6 text-foreground leading-relaxed">
                <p className="text-lg">
                  7月20日下午，由北京市科学技术委员会、中关村科技园区管理委员会主办，北京清华长庚医院、清华大学精准医学研究院、清华大学智慧医疗研究院、北京科技成果转化服务中心共同承办的中关村"火花"活动暨首届清华大学临床医学创新转化大赛启动仪式举行。
                </p>

                <div className="my-8 space-y-4">
                  <div className="relative w-full h-64 sm:h-80 lg:h-96 bg-muted rounded-lg overflow-hidden">
                    <Image
                      src="/Tsinghua/1.jpg"
                      alt="清华大学临床医学创新转化大赛启动仪式现场"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-sm text-muted-foreground text-center italic">
                    [董家鸿致辞]
                  </div>
                </div>

                <p>
                  活动开始，清华大学临床医学院院长、清华大学精准医学研究院院长、清华大学智慧医疗研究院院长、北京清华长庚医院院长董家鸿院士借助数字人技术发表了线上致辞。董家鸿表示，北京清华长庚医院自建院以来高度重视临床医疗实践，聚焦尚未满足的社会健康需求和尚未解决的医学科技问题，倡导临床驱动型、多学科融通式的医学研究范式，产生了一系列具有高度应用价值的科技创新成果。董家鸿希望，通过中关村"火花"活动搭建与产业界、投资界面对面交流的渠道。
                </p>

 <div className="my-8 space-y-4">
                  <div className="relative w-full h-64 sm:h-80 lg:h-96 bg-muted rounded-lg overflow-hidden">
                    <Image
 src="/Tsinghua/2.jpg"
                      alt="现场展示"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-sm text-muted-foreground text-center italic">
                    [项目现场]
                  </div>
                </div>


                <p>
                  北京清华长庚医院一直以来高度重视数字化、智能化技术在远程医疗、分级诊疗、家庭医疗、智慧医疗领域的研发与应用。本次应用的数字人技术是医院的储备技术成果之一，未来将在智慧医疗领域拥有广阔的应用前景。
                </p>

                <p>
                  北京清华长庚医院副院长、清华大学临床医学创新转化大赛组委会执行主席张萍宣布了首届清华大学临床医学创新转化大赛启动。张萍表示，希望通过本次大赛，一是可以搭建面向产业界的成果展示舞台，打通成果转化最后一公里；二是可以汇聚优势资源，构建清华临床医学的成果转化生态体系，加速医学创新成果转化。
                </p>

                <p>
                  清华大学临床医学创新转化大赛面向清华大学及清华大学附属医院的全体师生学者，征集临床医学领域的创新技术或产品，组织评审并提供成果转化相关服务和资源对接，相关赛程将在本年度下半年的7月至11月陆续开展。
                </p>

                <p>
                  {"路演环节，\"高度仿生型人工心肺系统研究\"\"智能化精准外科手术机器人\"\"毛细血管再充盈时间（CRT）测量仪\"等12个项目先后进行了路演，另有29项科技成果通过展板、大屏幕滚动播放等形式进行了展示。"}
                </p>

                <div className="my-8 space-y-4">
                  <div className="relative w-full h-64 sm:h-80 lg:h-96 bg-muted rounded-lg overflow-hidden">
                    <Image
 src="/Tsinghua/3.jpg"
                      alt="项目路演现场展示"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-sm text-muted-foreground text-center italic">
                    [夏健庭就CRT的临床意义及商业化前景作路演分享]
                  </div>
                </div>

                <p>
                  本次活动邀请了20余家投资机构、医疗健康企业与转化服务机构的50余人参加，参会嘉宾与路演项目组进行了交流和互动。
                </p>
              </div>
            </div>

            {/* Article footer */}
            <div className="pt-8 sm:pt-12 border-t border-border/50">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground font-mono">转载自</div>
                  <div className="text-foreground">清华大学新闻网</div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground">分享文章</span>
                  <div className="flex items-center gap-2">
                    {["微信", "微博", "LinkedIn"].map((platform) => (
                      <button
                        key={platform}
                        className="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                      >
                        {platform}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        <section className="py-12 sm:py-16 border-t border-border/50">
          <div className="space-y-8">
            <h2 className="text-2xl sm:text-3xl font-light">相关文章</h2>

            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  title: "Vibe Coding之后，我们离Vibe Working还有多远？",
                  excerpt: "氛围化工作的未来范式——Agent is all you need...",
                  date: "7月 2025年",
                },
                {
                  title: "消费观察 | 眼下AI玩具只剩下两种可能",
                  excerpt: "AI玩具与AIGC潮玩，是被资本市场和商业化同时验证过的道路",
                  date: "9月 2025",
                },
              ].map((article, index) => (
                <Link
                  key={index}
                  href="/article"
                  className="group p-6 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg"
                >
                  <div className="space-y-3">
                    <div className="text-xs text-muted-foreground font-mono">{article.date}</div>

                    <h3 className="text-lg font-medium group-hover:text-muted-foreground transition-colors duration-300">
                      {article.title}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed">{article.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <footer className="py-12 sm:py-16 border-t border-border">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">© 2025 XIA JIANTING. All rights reserved.</div>
              <div className="text-xs text-muted-foreground">Built by Vibe Coding</div>
            </div>

            <Link
              href="/"
              className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              <span className="text-sm">返回首页</span>
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </footer>
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  )
}
