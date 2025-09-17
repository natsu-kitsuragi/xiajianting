"use client"

import Link from "next/link"
import Image from "next/image"
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"

export default function Home() {
  const [isDark, setIsDark] = useState(true)
  const [activeSection, setActiveSection] = useState("")
  const [showWeChatModal, setShowWeChatModal] = useState(false)
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" },
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  const { basePath } = useRouter()

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col gap-4">
          {["intro", "work", "thoughts", "connect"].map((section) => (
            <button
              key={section}
              onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })}
              className={`w-2 h-8 rounded-full transition-all duration-500 ${
                activeSection === section ? "bg-foreground" : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
              aria-label={`Navigate to ${section}`}
            />
          ))}
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
        <header
          id="intro"
          ref={(el) => (sectionsRef.current[0] = el)}
          className="min-h-screen flex items-center opacity-0"
        >
          <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full">
            <div className="lg:col-span-3 space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-2">
                <div className="text-sm text-muted-foreground font-mono tracking-wider">PROFILE   / 2025</div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight">
                  夏健庭
                  <br />
                  <span className="text-muted-foreground text-xl sm:text-6xl">XIA JIANTING</span>
                </h1>
              </div>

              <div className="space-y-6 max-w-md">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  致力于为企业与个人提供<span className="text-foreground">法律合规</span>
                  、运营销售和
                  <span className="text-foreground">资本运作</span>的
                  <span className="text-foreground">全栈商业服务</span>。
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2 font-normal">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Available for work
                  </div>
                  <div>{"中国 · 广东"}</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col justify-end space-y-6 sm:space-y-8 mt-8 lg:mt-0">
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">目前担任</div>
                <div className="space-y-2">
                  <div className="text-foreground">Startup Co-Founder</div>
                  <div className="text-muted-foreground">微信：natsu_go </div>
                  <div className="text-xs text-muted-foreground">2025 — 至今 </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">专注于</div>
                <div className="flex flex-wrap gap-2">
                  {["公司法", "资本市场运作", "品牌营销实践", "AI赋能应用", "Vibe Working"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>

        <section
          id="work"
          ref={(el) => (sectionsRef.current[1] = el)}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-light">工作经历</h2>
              <div className="text-sm text-muted-foreground font-mono">2021 — 2025</div>
            </div>

            <div className="space-y-8 sm:space-y-12">
              {[
                {
                  year: "2023-2025",
                  role: "投资经理",
                  company: "中财金控投资有限公司",
                  description: (
                    <>
                      深度参与某基础大模型项目 <strong>30 亿天使轮融资</strong>， 覆盖项目尽调、估值、交易与交割全流程，
                      熟悉<strong>一级市场业务要点</strong>
                    </>
                  ),
                  tech: ["项目获取", "行业分析", "尽职调查", "交易谈判", "投后管理"],
                },
                {
                  year: "2022",
                  role: "股权承做",
                  company: "国投证券股份有限公司·上海投资银行二部（TMT组）",
                  description: (
                    <>
                      深度参与多家硬科技企业IPO<strong>招股书及答反馈事项写作</strong>
                      ，协助完成第五节（业务与技术）等部分调研与撰写，支持公司信息披露达标监管要求
                    </>
                  ),
                  tech: ["招股书写作", "法律研究", "访谈核查"],
                },
                {
                  year: "2021",
                  role: "境内外IPO及发债法律服务",
                  company: "北京市金杜（广州）律师事务所",
                  description:
                    "参与新能源、医疗器械、生物资产、城投建设等行业公司IPO与发债项目，并参与法律意见书及合规备忘录撰写",
                  tech: ["法律意见书写作", "合规备忘录写作", "尽职调查"],
                },
                {
                  year: "2021-至今",
                  role: "Co-Founder",
                  company: "资本市场尽职调查Web SaaS——底稿易ddDuck",
                  description:
                    "作为创始人发布并开源产品。截至目前, 底稿易用户已过2万，用户群体覆盖三中一华、红圈所等资本市场头部中介机构",
                  tech: ["创始人"],
                },
              ].map((job, index) => (
                <div
                  key={index}
                  className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-border transition-colors duration-500"
                >
                  <div className="lg:col-span-2 text-lg">
                    <div className="text-muted-foreground group-hover:text-foreground transition-colors duration-500 font-normal text-lg">
                      {job.year}
                    </div>
                  </div>

                  <div className="lg:col-span-7 items-stretch mx-0 px-0 space-y-2">
                    <div>
                      <h3 className="text-lg font-medium sm:text-2xl">{job.role}</h3>
                      <div className="text-muted-foreground flex-col italic leading-flex my-1 mb-1">{job.company}</div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed max-w-lg mx-0 px-0 py-0 my-0 text-sm">
                      {job.description}
                    </p>
                  </div>

                  <div className="lg:col-span-3 flex flex-wrap gap-2 lg:justify-end mt-2 lg:mt-0">
                    {job.tech.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center justify-center text-xs text-muted-foreground border border-muted-foreground/50 rounded-full px-2 h-5 leading-none font-normal whitespace-nowrap"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="thoughts"
          ref={(el) => (sectionsRef.current[2] = el)}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <h2 className="text-3xl sm:text-4xl font-light">近期动态</h2>

            <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
              {[
                {
                  title: "消费观察 | 眼下AI玩具只剩下两种可能",
                  excerpt: "AI玩具与AIGC潮玩，是被资本市场和商业化同时验证过的道路（页面部署中）",
                  date: "9月 2025",
                  readTime: "文章",
                  href: "/article/ai-toys-future-202509",
                },
                {
                  title: "Vibe Coding之后，我们离Vibe Working还有多远？",
                  excerpt: "氛围化工作的未来范式——Agent is all you need...（页面部署中）",
                  date: "7月 2025年",
                  readTime: "文章",
                  href: "/article/vibe-working-202507",
                },
                {
                  title: "出席首届清华大学临床医学创新转化大赛启动仪式",
                  excerpt:
                    "作为受邀项目组对毛细血管再充盈时间（CRT，Capillary Refill Time）的临床意义及商业化前景作专题分享",
                  date: "8月 2024年",
                  readTime: "事件",
                  href: "/article/tsinghua-crt-roadshow-202408",
                },
                {
                  title: "资本市场尽职调查Web SaaS——底稿易ddDuck发布",
                  excerpt:
                    "底稿易ddDuck为开源项目ddease的Web SaaS商业化产品。截至目前，已帮助数千名用户解放上万Dirty Work工时",
                  date: "5月 2024年",
                  readTime: "项目",
                  href: "https://ddduck.com",
                },
                {
                  title: "出席法治日报2023-2024法律服务创新产品论坛",
                  excerpt: "底稿易ddease作为代表案例荣膺首届法律服务创新产品名单",
                  date: "1月 2024年",
                  readTime: "事件",
                  href: "https://mp.weixin.qq.com/s/2JHcM0LaWLHpp3l5tiQuUQ",
                },
                {
                  title: "资本市场尽职调查本地部署软件——底稿易ddease开源",
                  excerpt: "作为联合创始人宣布开源后，于当年收获2w用户，并于小红书等社交媒体收获超1万点赞与收藏",
                  date: "7月 2022年",
                  readTime: "项目",
                  href: "https://mp.weixin.qq.com/s/-D_bbT3JFjESFC-oe54uDQ",
                },
              ].map((post, index) => (
                <Link
                  key={index}
                  href={post.href}
                  target={post.href.startsWith("http") ? "_blank" : "_self"}
                  rel={post.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="h-full"
                >
                  <article className="group p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg cursor-pointer h-full flex flex-col">
                    <div className="space-y-4 flex-1">
                      <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
                        <span>{post.date}</span>
                        <span>{post.readTime}</span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                        {post.title}
                      </h3>

                      <p className="text-muted-foreground leading-relaxed text-sm flex-1">{post.excerpt}</p>

                      <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300 mt-auto">
                        <span>Read more</span>
                        <svg
                          className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="connect" ref={(el) => (sectionsRef.current[3] = el)} className="py-20 sm:py-32 opacity-0">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light">获取联系</h2>

              <div className="space-y-6">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  始终对新的机会、合作，以及关于AI和商业的交流充满兴趣
                </p>

                <div className="space-y-4">
                  <Link
                    href="mailto:info@xiajianting.com"
                    className="group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300"
                  >
                    <span className="text-base sm:text-lg">邮箱：info@xiajianting.com</span>
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>

                  <button
                    onClick={() => setShowWeChatModal(true)}
                    className="group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300 bg-transparent border-none p-0 cursor-pointer"
                  >
                    <span className="text-base sm:text-lg">微信：natsu_go</span>
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="text-sm text-muted-foreground font-mono"> </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    name: "LinkedIn",
                    handle: "@XIA JIANTING",
                    url: "https://www.linkedin.com/in/xia-jianting-722090272",
                  },
                  {
                    name: "飞书",
                    handle: "@夏健庭",
                    url: "https://www.feishu.cn/invitation/page/add_contact/?token=a42q9cfc-4d20-4015-a0ca-5e289ae90179&unique_id=NHwX6tl7z5bfrsIF-ygypg==",
                  },
                  { name: "SEE:Frontier", handle: "@SEE_natsu", url: "https://mp.weixin.qq.com/s/cSG3sswX3ASgJBY3KbRjIg" },
                  { name: "GitHub", handle: "@natsu-kitsuragi", url: "https://github.com/natsu-kitsuragi" },
                ].map((social) => (
                  <Link
                    key={social.name}
                    href={social.url}
                    target={social.url.startsWith("http") ? "_blank" : "_self"}
                    rel={social.url.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
                  >
                    <div className="space-y-2">
                      <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                        {social.name}
                      </div>
                      <div className="text-sm text-muted-foreground">{social.handle}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="py-12 sm:py-16 border-t border-border">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">© 2025 XIA JIANTING. All rights reserved.</div>
              <div className="text-xs text-muted-foreground">Built by Vibe Coding</div>
            </div>

            <div className="flex items-center gap-4">
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
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>

              <button
                onClick={() => setShowWeChatModal(true)}
                className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300"
              >
                <svg
                  className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </footer>
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>

      <Dialog open={showWeChatModal} onOpenChange={setShowWeChatModal}>
        <DialogContent className="max-w-sm rounded-2xl p-6">
          <div className="flex flex-col items-center space-y-4">
            <Image
              src={`${basePath}/wechat-qrcode.jpg`}
              alt="WeChat QR Code"
              width={320}
              height={320}
              className="w-full max-w-[320px] h-auto rounded-lg"
              priority
            />
            <p className="text-sm text-muted-foreground text-center">长按/扫码添加微信</p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
