import Image from "next/image";

import Footer from "@/components/sections/footer/default";
import Navbar from "@/components/sections/navbar/default";
import { Card, CardContent } from "@/components/ui/card";
import { FloatingContact } from "@/components/ui/floating-contact";
import { LayoutLines } from "@/components/ui/layout-lines";

// 园区概况数据
const baseInfo = [
  { title: "总占地面积", value: "[XX亩]", icon: "🌾" },
  { title: "精品水果种植", value: "[XX亩]", icon: "🍎" },
  { title: "水产养殖区", value: "[XX亩]", icon: "🐟" },
  { title: "累计投资", value: "[XX万]", icon: "💰" },
];

// 农文旅项目数据
const agroTourismProjects = [
  {
    title: "水果采摘",
    description: "提供多种水果的采摘体验，让游客感受丰收的喜悦",
    icon: "🍇"
  },
  {
    title: "休闲垂钓",
    description: "生态水产养殖区，投放多种鱼类，享受垂钓乐趣",
    icon: "🎣"
  },
  {
    title: "农业观光",
    description: "层次分明的山地梯田果园景观，果树连片成景、道路纵横成网、水系自然点缀",
    icon: "👀"
  },
  {
    title: "农旅体验",
    description: "多层次、可参与的体验体系，让游客深度体验农业生产和乡村生活",
    icon: "🚜"
  },
];

// 核心项目数据
const coreProjects = [
  {
    title: "观景平台",
    description: "依托山地制高点布局，视野开阔，可全景俯瞰梯田果园，成为园区标志性景观与核心打卡地",
    icon: "🏞️",
    color: "from-blue-500 to-blue-700"
  },
  {
    title: "露营基地",
    description: "融入自然生态环境，打造沉浸式户外休闲空间，满足城市客群对“轻度假、慢生活”的多元需求",
    icon: "⛺",
    color: "from-green-500 to-green-700"
  },
];

// 荣誉资质数据
const certificates = [
  { name: "新四板挂牌", icon: "🏦", year: "2020" },
  { name: "省级农业产业化重点龙头企业", icon: "🏆", year: "2021" },
  { name: "绿色食品认证", icon: "🥇", year: "认证中" },
  { name: "[公司品牌商标]", icon: "®", year: "已注册" },
];

// 发展战略数据
const developmentStrategy = [
  {
    stage: "第一阶段",
    period: "2018—2025",
    title: "高标准水果种植基地与生态观光园",
    description: "已基本完成，奠定农业产业基础",
    status: "completed",
    icon: "✅"
  },
  {
    stage: "第二阶段",
    period: "2026—2030",
    title: "全面升级农文旅配套，建设区域性乡村度假目的地",
    description: "重点推进阶段，打造农文旅融合示范区",
    status: "current",
    icon: "🚀"
  },
  {
    stage: "第三阶段",
    period: "2031—2035",
    title: "拓展生态康养产业，构建农业、旅游、养老融合发展的综合服务体系",
    description: "规划阶段，探索产业价值跃升",
    status: "planned",
    icon: "📋"
  },
];

export default function Orchard() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <LayoutLines />
      <Navbar />

      {/* 页面头部 */}
      <section className="py-20 bg-gradient-to-r from-primary/20 to-brand-foreground/20">
        <div className="max-w-container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">[园区名称]</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            集生态种植、休闲观光、乡村度假、农旅体验于一体的综合性田园综合体
          </p>
        </div>
      </section>

      {/* 园区概况 */}
      <section className="py-20">
        <div className="max-w-container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 rounded-xl overflow-hidden">
              <Image
                src="/images/about/all.jpg"
                alt="园区全景"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">园区概况</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                [园区名称]依山而建、顺势铺展，整体呈现层次分明的山地梯田果园景观。从空中俯瞰，果树连片成景、道路纵横成网、水系自然点缀，规模化、标准化与景观化融合发展的现代农业格局已基本形成。
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                园区总占地约[XX亩]，其中精品水果种植面积[XX亩]，主要种植[主要品种]等优质果品；配套建设生态水产养殖区[XX亩]，投放[主要品种]等，逐步构建起"种养结合、循环发展"的生态农业体系。
              </p>
              <div className="grid grid-cols-2 gap-4">
                {baseInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg">
                    <div className="text-3xl">{info.icon}</div>
                    <div>
                      <div className="text-xl font-bold text-primary">{info.value}</div>
                      <div className="text-sm text-muted-foreground">{info.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 农文旅融合发展 */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">农文旅融合发展</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              在夯实农业产业基础的同时，公司持续延伸农业价值链条，构建“可观赏、可参与、可体验、可消费”的农文旅一体化运营体系
            </p>
          </div>
          
          {/* 体验项目 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {agroTourismProjects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-5xl mb-4">{project.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* 核心升级项目 */}
          <h3 className="text-2xl font-bold mb-6 text-center">2026年重点升级项目</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {coreProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className={`bg-gradient-to-br ${project.color} p-6 text-white`}>
                  <div className="text-5xl mb-2">{project.icon}</div>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 园区景观 */}
      <section className="py-20">
        <div className="max-w-container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">园区景观</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              从春天花开到秋天果实累累，见证四季变换之美
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "春季花开", emoji: "🌸", desc: "桃花、梨花竞相绽放，美不胜收" },
              { title: "夏季生长", emoji: "🌳", desc: "果树茂盛生长，绿意盎然" },
              { title: "秋季收获", emoji: "🍎", desc: "硕果累累，丰收的喜悦" },
            ].map((item, index) => (
              <div key={index} className="relative h-64 rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-brand-foreground/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl">{item.emoji}</div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 to-transparent">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 荣誉资质 */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">荣誉资质</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              公司发展稳健，品牌与资质体系不断完善
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificates.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-5xl mb-3">{item.icon}</div>
                  <h3 className="text-lg font-semibold mb-1">{item.name}</h3>
                  <p className="text-primary text-sm">{item.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 社会效益 */}
      <section className="py-20">
        <div className="max-w-container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">社会效益</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                公司坚持产业发展与社会责任协同推进，在助力乡村振兴与区域经济发展中发挥了积极示范作用。
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg">
                  <div className="text-4xl">👥</div>
                  <div>
                    <div className="text-2xl font-bold text-primary">3000余户</div>
                    <div className="text-sm text-muted-foreground">带动周边农户参与产业发展</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg">
                  <div className="text-4xl">💼</div>
                  <div>
                    <div className="text-2xl font-bold text-primary">300余个</div>
                    <div className="text-sm text-muted-foreground">提供就业岗位</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg">
                  <div className="text-4xl">💰</div>
                  <div>
                    <div className="text-2xl font-bold text-primary">约2.5万元</div>
                    <div className="text-sm text-muted-foreground">促进农民年均增收</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-80 rounded-xl overflow-hidden">
              <Image
                src="/images/about/all.jpg"
                alt="乡村振兴示范"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 发展战略 */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">发展战略</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              [项目名称]按照“三步走”战略稳步推进
            </p>
          </div>
          <div className="space-y-6">
            {developmentStrategy.map((item, index) => (
              <Card 
                key={index} 
                className={`overflow-hidden transition-all ${
                  item.status === 'current' ? 'border-primary shadow-lg' : 
                  item.status === 'completed' ? 'border-green-500' : 'border-purple-500'
                }`}
              >
                <div className={`p-1 ${
                  item.status === 'current' ? 'bg-primary' : 
                  item.status === 'completed' ? 'bg-green-500' : 'bg-gradient-to-r from-purple-500 to-indigo-600'
                }`}>
                  <div className="px-6 py-3 flex items-center justify-between">
                    <div>
                      <span className="text-white font-semibold text-lg">{item.stage}</span>
                      <span className="text-white/80 ml-3 text-sm">{item.period}</span>
                    </div>
                    <span className="text-3xl">{item.icon}</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </main>
  );
}
