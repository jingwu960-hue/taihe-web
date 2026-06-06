import Image from "next/image";
import Footer from "@/components/sections/footer/default";
import Navbar from "@/components/sections/navbar/default";
import { Card, CardContent } from "@/components/ui/card";
import { FloatingContact } from "@/components/ui/floating-contact";
import { LayoutLines } from "@/components/ui/layout-lines";

// 模拟数据
const timelineData = [
  {
    year: "2018",
    title: "公司成立",
    description: "湖北态禾农业股份有限公司正式成立，位于湖北省孝感市大悟县城关镇中心村，法定代表人胡东明",
  },
  {
    year: "2020",
    title: "新四板挂牌",
    description: "12月在新四板成功挂牌，企业发展迈入新阶段",
  },
  {
    year: "2021",
    title: "省级龙头企业",
    description: "被认定为省级农业产业化重点龙头企业",
  },
  {
    year: "2026",
    title: "农文旅全面升级",
    description: "完成关键升级，打造观景平台和露营基地两大核心项目，向农文旅融合示范区转型升级",
  },
];

const certificatesData = [
  { name: "新四板挂牌", icon: "🏦" },
  { name: "省级农业产业化重点龙头企业", icon: "🏆" },
  { name: "绿色食品认证", icon: "🥇" },
  { name: "态禾秋实品牌商标", icon: "®" },
];

export default function About() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <LayoutLines />
      <Navbar />

      {/* 页面头部 */}
      <section className="py-20 bg-gradient-to-r from-primary/20 to-brand-foreground/20">
        <div className="max-w-container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">关于我们</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            了解态禾农业的发展历程、企业理念和核心优势
          </p>
        </div>
      </section>

      {/* 企业简介 */}
      <section className="py-20">
        <div className="max-w-container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">企业简介</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                湖北态禾农业股份有限公司成立于2018年1月，位于湖北省孝感市大悟县城关镇中心村，法定代表人胡东明。
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                公司深耕现代生态农业，以农文旅深度融合为核心发展路径，致力于将态禾园打造成为集生态种植、休闲观光、乡村度假、农旅体验于一体的综合性田园综合体，探索农业产业价值跃升的实践路径。
              </p>
              <p className="text-muted-foreground leading-relaxed">
                截至2026年，项目累计投资近4000万元，园区基础设施与产业体系已初具规模。当前，态禾园正处于由&quot;传统农业园区&quot;向&quot;农文旅融合示范区&quot;转型升级的关键阶段。
              </p>
            </div>
            <div className="relative h-80 rounded-xl overflow-hidden">
              <Image
                src="/images/about/all.jpg"
                alt="态禾园全景"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 园区概况 */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">园区概况</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <div className="text-5xl mb-4">🌳</div>
                <h3 className="text-xl font-semibold mb-3">园区规模</h3>
                <p className="text-muted-foreground mb-4">园区总占地约1200亩，其中精品水果种植面积852.3亩，主要种植红桃、黄桃、苏翠1号梨、新玉蜜梨、樱桃等优质果品。</p>
                <p className="text-muted-foreground">配套建设生态水产养殖区100亩，投放鲤鱼、草鱼、鲫鱼、武昌鱼、胖头鱼等，逐步构建起&quot;种养结合、循环发展&quot;的生态农业体系。</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <div className="text-5xl mb-4">🏞️</div>
                <h3 className="text-xl font-semibold mb-3">景观特色</h3>
                <p className="text-muted-foreground mb-4">态禾园依山而建、顺势铺展，整体呈现层次分明的山地梯田果园景观。</p>
                <p className="text-muted-foreground">从空中俯瞰，果树连⽚成景、道路纵横成⽹、⽔系自然点缀，规模化、标准化与景观化融合发展的现代农业格局已基本形成。</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 农文旅融合发展 */}
      <section className="py-20">
        <div className="max-w-container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">农文旅融合发展</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="text-5xl mb-4">🍇</div>
                <h3 className="text-lg font-semibold mb-3">水果采摘</h3>
                <p className="text-muted-foreground text-sm">
                  让游客亲手采摘新鲜水果，体验农耕乐趣
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="text-5xl mb-4">🎣</div>
                <h3 className="text-lg font-semibold mb-3">休闲垂钓</h3>
                <p className="text-muted-foreground text-sm">
                  在生态养殖区享受静谧的垂钓时光
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="text-5xl mb-4">🚶</div>
                <h3 className="text-lg font-semibold mb-3">农业观光</h3>
                <p className="text-muted-foreground text-sm">
                  欣赏梯田果园美景，感受现代农业魅力
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="text-5xl mb-4">🔭</div>
                <h3 className="text-xl font-semibold mb-3">观景平台</h3>
                <p className="text-muted-foreground">依托山体制高点布局，视野开阔，可全景俯瞰梯田果园，成为园区标志性景观与核心打卡地。</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="text-5xl mb-4">⛺</div>
                <h3 className="text-xl font-semibold mb-3">露营基地</h3>
                <p className="text-muted-foreground">融入自然生态环境，打造沉浸式户外休闲空间，满足城市客群对&quot;轻度假、慢生活&quot;的多元需求。</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 企业文化 */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">企业文化</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-lg font-semibold mb-2">企业使命</h3>
                <p className="text-muted-foreground text-sm">
                  打造农文旅融合示范区，推动乡村振兴
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🌟</div>
                <h3 className="text-lg font-semibold mb-2">企业愿景</h3>
                <p className="text-muted-foreground text-sm">
                  成为区域性乡村度假目的地
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">💚</div>
                <h3 className="text-lg font-semibold mb-2">核心价值</h3>
                <p className="text-muted-foreground text-sm">
                  生态、融合、创新、共享
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-lg font-semibold mb-2">经营理念</h3>
                <p className="text-muted-foreground text-sm">
                  种养结合，循环发展
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 发展历程 */}
      <section className="py-20">
        <div className="max-w-container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">发展历程</h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border hidden md:block"></div>
            <div className="space-y-12">
              {timelineData.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <Card>
                      <CardContent className="p-6">
                        <div className="text-primary font-bold mb-2">{item.year}</div>
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="hidden md:flex w-10 h-10 rounded-full bg-primary text-white items-center justify-center font-bold z-10">
                    {index + 1}
                  </div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 企业资质 */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">企业资质</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              我们的努力得到了认可，这些荣誉是对我们品质的最好证明
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {certificatesData.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 社会效益 */}
      <section className="py-20">
        <div className="max-w-container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">社会效益</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="text-5xl mb-4">👥</div>
                <h3 className="text-xl font-bold mb-2">3000+</h3>
                <h4 className="text-lg font-semibold mb-2">带动农户</h4>
                <p className="text-muted-foreground text-sm">
                  累计带动周边3000余户农户参与产业发展
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="text-5xl mb-4">💼</div>
                <h3 className="text-xl font-bold mb-2">300+</h3>
                <h4 className="text-lg font-semibold mb-2">就业岗位</h4>
                <p className="text-muted-foreground text-sm">
                  提供就业岗位300余个
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="text-5xl mb-4">💰</div>
                <h3 className="text-xl font-bold mb-2">2.5万</h3>
                <h4 className="text-lg font-semibold mb-2">农民增收</h4>
                <p className="text-muted-foreground text-sm">
                  促进农民年均增收约2.5万元
                </p>
              </CardContent>
            </Card>
          </div>
          <Card className="mt-8">
            <CardContent className="p-8 text-center">
              <p className="text-muted-foreground">
                公司坚持产业发展与社会责任协同推进，在助力乡村振兴与区域经济发展中发挥了积极示范作用。
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 发展战略 */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">发展战略</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              态禾园田园综合体项目按照&quot;三步走&quot;战略稳步推进
            </p>
          </div>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-24 h-24 bg-primary text-white rounded-xl flex items-center justify-center text-2xl font-bold">
                    第一阶段
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">2018—2025</h3>
                    <p className="text-muted-foreground">打造高标准水果种植基地与生态观光园（已基本完成）</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-24 h-24 bg-primary text-white rounded-xl flex items-center justify-center text-2xl font-bold">
                    第二阶段
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">2026—2030</h3>
                    <p className="text-muted-foreground">全面升级农文旅配套，建设区域性乡村度假目的地（重点推进阶段）</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-24 h-24 bg-primary text-white rounded-xl flex items-center justify-center text-2xl font-bold">
                    第三阶段
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">2031—2035</h3>
                    <p className="text-muted-foreground">拓展生态康养产业，构建农业、旅游、养老融合发展的综合服务体系（规划阶段）</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </main>
  );
}
