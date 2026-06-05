import Footer from "@/components/sections/footer/default";
import Navbar from "@/components/sections/navbar/default";
import { Card, CardContent } from "@/components/ui/card";
import { FloatingContact } from "@/components/ui/floating-contact";
import { LayoutLines } from "@/components/ui/layout-lines";

// 模拟数据
const timelineData = [
  {
    year: "2009",
    title: "公司成立",
    description: "湖北态禾农业股份有限公司正式成立，开始果树种植事业",
  },
  {
    year: "2015",
    title: "规模扩大",
    description: "种植面积扩大至5000亩，成为当地知名农业企业",
  },
  {
    year: "2019",
    title: "品质升级",
    description: "引入先进种植技术，产品品质再上新台阶",
  },
  {
    year: "2024",
    title: "持续发展",
    description: "业务覆盖全国，建立稳定的销售网络",
  },
];

const certificatesData = [
  { name: "绿色食品认证", icon: "🥇" },
  { name: "无公害农产品认证", icon: "🏆" },
  { name: "ISO9001质量管理认证", icon: "📜" },
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
                湖北态禾农业股份有限公司成立于2009年，是一家专业从事桃树、梨树规模化种植及鲜果销售的现代化农业企业。
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                公司拥有5000亩自主种植基地，配备专业的技术团队和先进的种植设备，从源头把控品质，确保每一颗水果都是新鲜、优质的。
              </p>
              <p className="text-muted-foreground leading-relaxed">
                我们始终坚持&quot;源头种植、品质可控、稳定供货、诚信经营&quot;的企业理念，为客户提供最优质的产品和最满意的服务。
              </p>
            </div>
            <div className="h-80 bg-gradient-to-br from-primary/20 to-brand-foreground/20 rounded-xl flex items-center justify-center">
              <div className="text-8xl">🌾</div>
            </div>
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
                  为消费者提供健康优质的水果
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🌟</div>
                <h3 className="text-lg font-semibold mb-2">企业愿景</h3>
                <p className="text-muted-foreground text-sm">
                  成为国内领先的水果种植企业
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">💚</div>
                <h3 className="text-lg font-semibold mb-2">核心价值</h3>
                <p className="text-muted-foreground text-sm">
                  诚信、品质、创新、共赢
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-lg font-semibold mb-2">经营理念</h3>
                <p className="text-muted-foreground text-sm">
                  源头种植，品质可控
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
          <div className="grid md:grid-cols-3 gap-8">
            {certificatesData.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="text-6xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold">{item.name}</h3>
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
