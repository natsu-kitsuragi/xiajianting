"use client"

import Link from "next/link"
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
                <span>2025年9月</span>
                <span>•</span>
                <span>文章</span>
                <span>•</span>
                <span>5分钟阅读</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-tight">文章标题</h1>

              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl">
                这里是文章的简介或摘要，用来概括文章的主要内容和观点。
              </p>
            </div>

            {/* Article content */}
            <div className="prose prose-lg max-w-none">
              <div className="space-y-6 text-foreground leading-relaxed">
                <p className="text-lg">
                  这里是文章的正文内容。您可以在这里添加您的文章内容，包括段落、标题、列表等各种元素。
                </p>

                <h2 className="text-2xl sm:text-3xl font-light mt-12 mb-6">章节标题</h2>

                <p>
                  这里是章节内容。您可以继续添加更多的段落和内容。文章页面保持了与主页一致的设计风格，
                  包括字体、颜色、间距和整体布局。
                </p>

                <blockquote className="border-l-4 border-muted-foreground/30 pl-6 my-8 text-muted-foreground italic">
                  这里是引用内容的示例。您可以用来突出重要的观点或引用其他来源的内容。
                </blockquote>

                <h3 className="text-xl sm:text-2xl font-light mt-10 mb-4">子标题</h3>

                <p>继续添加更多内容。这个页面的设计确保了良好的阅读体验， 同时保持了与主页的视觉一致性。</p>

                <ul className="space-y-2 my-6">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2.5 flex-shrink-0"></span>
                    <span>列表项目一</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2.5 flex-shrink-0"></span>
                    <span>列表项目二</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2.5 flex-shrink-0"></span>
                    <span>列表项目三</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Article footer */}
            <div className="pt-8 sm:pt-12 border-t border-border/50">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground font-mono">作者</div>
                  <div className="text-foreground">夏健庭 XIA JIANTING</div>
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
