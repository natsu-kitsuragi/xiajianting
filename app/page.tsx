"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { ArrowDown, ArrowUpRight } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"

const layers = [
  {
    depth: "-120 m",
    eyebrow: "CAPITAL / 资本",
    title: "先看见价值，\n再设计抵达它的路径。",
    copy: "PE/VC经历让我习惯从产业、团队、交易结构与退出路径同时看一家公司。一级从业期间累计投资约5亿元，并深度参与某基础大模型项目30亿元天使轮融资。",
    note: "投资判断 · 产业研究 · 交易设计 · 投后协同",
    align: "left",
  },
  {
    depth: "-360 m",
    eyebrow: "LAW & DEAL / 法律与交易",
    title: "规则不是刹车，\n是复杂交易的承重结构。",
    copy: "在红圈所与券商投行工作，参与境内外IPO、发债及硬科技项目申报。能在商业目标、监管语言与合同边界之间切换，把风险翻译成可以推进的动作。",
    note: "公司治理 · 合规判断 · IPO · 合同与风控",
    align: "right",
  },
  {
    depth: "-640 m",
    eyebrow: "OPERATIONS / 产业经营",
    title: "真正的经营，\n发生在信息不完整的深水区。",
    copy: "目前进入传统制造企业的经营现场：推动系统性行业战略研究，统筹资本路径与公司治理，参与江浙客户开发，并用AI搭建重点项目驾驶舱与法务风控体系。",
    note: "行业战略 · 商业开发 · 资本运作 · AI经营系统",
    align: "left",
  },
  {
    depth: "-880 m",
    eyebrow: "BUILD / 产品",
    title: "如果方法有效，\n就把它做成可复用的产品。",
    copy: "联合创立资本市场尽职调查工具“底稿易 ddDuck”，从0到1完成产品孵化并积累2万+专业用户。相比只给建议，我更喜欢亲手把方法变成系统。",
    note: "0→1 · AI产品 · 开源 · 20K+专业用户",
    align: "right",
  },
  {
    depth: "-1080 m",
    eyebrow: "SOURCE / 连接",
    title: "资源不是名单，\n是让陌生协作真正发生。",
    copy: "持续把投资时期积累的半导体、机器人与先进产业网络带入制造业场景，推动触客、打样与需求验证；同时对接高校产学研项目，让技术、资金与产业能力形成闭环。",
    note: "产业网络 · 技术对接 · 打样验证 · 产学研",
    align: "left",
  },
]

const posts = [
  {
    date: "2025.11",
    title: "传统企业资本市场忽悠手册",
    description: "资本市场练习时长两年半成果总结",
    href: "https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MDg4MzcyNw==&action=getalbum&album_id=4239458105827704833&from_itemidx=1&from_msgid=2247484050&subscene=0",
  },
  {
    date: "2025.09",
    title: "AIGC潮玩是一级市场下个Labubu代餐吗？",
    description: "AI玩具与AIGC潮玩的资本市场及商业化判断",
    href: "https://mp.weixin.qq.com/s/k-YLTvL_UKM_apbjTG1aKw",
  },
  {
    date: "2024.08",
    title: "清华大学临床医学创新转化大赛",
    description: "围绕CRT临床意义及商业化前景作专题分享",
    href: "/article/tsinghua-crt-roadshow-202408",
  },
  {
    date: "2024.05",
    title: "底稿易 ddDuck 发布",
    description: "将开源尽调工具推进为面向专业用户的Web产品",
    href: "https://ddduck.com",
  },
  {
    date: "2024.01",
    title: "法律服务创新产品论坛",
    description: "底稿易入选首届法律服务创新产品名单",
    href: "https://mp.weixin.qq.com/s/2JHcM0LaWLHpp3l5tiQuUQ",
  },
  {
    date: "2022.07",
    title: "底稿易 ddease 开源",
    description: "资本市场尽职调查本地部署工具",
    href: "https://mp.weixin.qq.com/s/-D_bbT3JFjESFC-oe54uDQ",
  },
]

export default function Home() {
  const [depth, setDepth] = useState(0)
  const [showWeChatModal, setShowWeChatModal] = useState(false)

  useEffect(() => {
    const updateDepth = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0
      setDepth(Math.min(1200, Math.max(0, Math.round(progress * 1200))))
    }

    updateDepth()
    window.addEventListener("scroll", updateDepth, { passive: true })
    window.addEventListener("resize", updateDepth)
    return () => {
      window.removeEventListener("scroll", updateDepth)
      window.removeEventListener("resize", updateDepth)
    }
  }, [])

  const goTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

  return (
    <div className="depth-site">
      <div className="depth-instrument" aria-hidden="true">
        <span className="instrument-label">DEPTH</span>
        <strong>{String(depth).padStart(4, "0")}</strong>
        <span>M</span>
        <i style={{ height: `${Math.max(3, depth / 12)}%` }} />
      </div>

      <header className="quiet-nav">
        <button onClick={() => goTo("surface")} className="wordmark">XIA JIANTING</button>
        <div className="coordinates">浙江 · 广东 / AVAILABLE ACROSS BOTH</div>
        <nav>
          <button onClick={() => goTo("descent")}>经历</button>
          <button onClick={() => goTo("logbook")}>文章</button>
          <button onClick={() => goTo("contact")}>联系</button>
        </nav>
      </header>

      <main>
        <section id="surface" className="surface">
          <div className="surface-coordinates">30.2741° N · 120.1551° E<br />22.3193° N · 114.1694° E</div>

          <div className="sonar-mark" aria-hidden="true">
            <span />
            <span />
            <span />
            <i />
          </div>

          <div className="surface-copy">
            <p className="kicker">产业经营 × 资本运作 × 法律合规</p>
            <h1>夏健庭</h1>
            <p className="manifesto">致力于为企业与个人提供产业经营、资本运作和法律合规的全栈商业服务。</p>
          </div>

          <button className="dive-cue" onClick={() => goTo("descent")}>
            <span>向下，进入经历的深水区</span>
            <ArrowDown size={16} strokeWidth={1.5} />
          </button>
        </section>

        <section id="descent" className="descent">
          <div className="waterline" aria-hidden="true"><span>SEA LEVEL / 0 M</span></div>

          <div className="descent-intro">
            <p>我不把经历理解为几段并列的履历。</p>
            <h2>它更像一次持续下潜：<br />从价值判断，到交易结构，<br />再到真实经营。</h2>
          </div>

          {layers.map((layer, index) => (
            <article className={`depth-layer ${layer.align}`} key={layer.depth}>
              <div className="depth-ghost" aria-hidden="true">{layer.depth}</div>
              <div className="layer-marker" aria-hidden="true"><span>{String(index + 1).padStart(2, "0")}</span></div>
              <div className="layer-copy">
                <div className="layer-meta">
                  <span>{layer.depth}</span>
                  <span>{layer.eyebrow}</span>
                </div>
                <h3>{layer.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h3>
                <p>{layer.copy}</p>
                <small>{layer.note}</small>
              </div>
            </article>
          ))}

          <div className="seabed-note">
            <span>-1200 m / BOTTOM</span>
            <p>走到足够深的地方，<br />复杂问题才会显出结构。</p>
          </div>
        </section>

        <section id="logbook" className="logbook">
          <div className="logbook-head">
            <span>FIELD NOTES / 航行日志</span>
            <h2>思考留下的<br />几枚坐标。</h2>
            <p>关于资本、AI、法律服务与产业经营的阶段性记录。</p>
          </div>

          <div className="post-list">
            {posts.map((post, index) => (
              <Link
                key={post.title}
                href={post.href}
                target={post.href.startsWith("http") ? "_blank" : "_self"}
                rel={post.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="post-row"
              >
                <span className="post-index">{String(index + 1).padStart(2, "0")}</span>
                <time>{post.date}</time>
                <span className="post-copy">
                  <strong>{post.title}</strong>
                  <small>{post.description}</small>
                </span>
                <ArrowUpRight size={20} strokeWidth={1.3} />
              </Link>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-zone">
          <div className="contact-ripple" aria-hidden="true"><span /><span /><span /></div>
          <div className="contact-copy">
            <span>SIGNAL FOUND / -1200 M</span>
            <h2>如果你也在处理一个<br />值得深入的问题。</h2>
            <p>我们可以聊聊机会、合作，以及那些还没有标准答案的复杂命题。</p>
          </div>

          <div className="contact-links">
            <Link href="mailto:info@xiajianting.com"><span>EMAIL</span><strong>info@xiajianting.com</strong></Link>
            <button onClick={() => setShowWeChatModal(true)}><span>WECHAT</span><strong>natsu_go</strong></button>
            <Link href="https://github.com/natsu-kitsuragi" target="_blank"><span>GITHUB</span><strong>@natsu-kitsuragi</strong></Link>
            <Link href="https://www.linkedin.com/in/xia-jianting-722090272" target="_blank"><span>LINKEDIN</span><strong>@XIA JIANTING</strong></Link>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 XIA JIANTING</span>
        <span>FROM THE SURFACE TO THE STRUCTURE</span>
        <button onClick={() => goTo("surface")}>返回水面 ↑</button>
      </footer>

      <Dialog open={showWeChatModal} onOpenChange={setShowWeChatModal}>
        <DialogContent className="qr-dialog">
          <Image src="/wechat-qrcode.jpg" alt="微信二维码" width={320} height={320} priority />
          <p>微信 / natsu_go</p>
        </DialogContent>
      </Dialog>
    </div>
  )
}
