import Link from "next/link";

import Footer from "@/components/sections/footer/default";
import Navbar from "@/components/sections/navbar/default";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FloatingContact } from "@/components/ui/floating-contact";
import { LayoutLines } from "@/components/ui/layout-lines";

// 模拟数据
const pearSpecs = [
  { label: "产品名称", value: "黄金梨" },
  { label: "上市时间", value: "每年8-9月" },
  { label: "年产量", value: "200万斤" },
  { label: "产地", value: "湖北态禾农业种植基地" },
  { label: "储存条件", value: "常温5-7天，冷藏15-20天" },
];

const pearFeatures = [
  { title: "果肉细腻", description: "口感细滑，无石细胞" },
  { title: "汁多味甜", description: "含糖量高，甘甜可口" },
  { title: "营养丰富", description: "富含多种维生素和矿物质" },
  { title: "绿色种植", description: "严格按绿色食品标准种植" },
];

export default function PearProduct() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <LayoutLines />
      <Navbar />

      {/* 面包屑 */}
      <section className="py-6 border-b border-border">
        <div className="max-w-container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">首页</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-primary">产品中心</Link>
            <span>/</span>
            <span className="text-foreground">黄金梨</span>
          </div>
        </div>
      </section>

      {/* 产品详情 */}
      <section className="py-16">
        <div className="max-w-container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* 产品图片 */}
            <div className="h-96 bg-gradient-to-br from-primary/20 to-brand-foreground/20 rounded-xl flex items-center justify-center">
              <div className="text-9xl">🍐</div>
            </div>

            {/* 产品信息 */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">黄金梨</h1>
              <div className="text-2xl font-bold text-primary mb-6">¥15/斤</div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                黄金梨是态禾农业的核心产品之一，种植于生态环境优美的湖北基地。我们严格按照绿色食品标准进行种植管理，确保每一颗梨都品质优良。
              </p>

              {/* 产品规格 */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">产品规格</h3>
                <div className="grid grid-cols-2 gap-4">
                  {pearSpecs.map((spec, index) => (
                    <div key={index} className="flex">
                      <span className="text-muted-foreground w-24">{spec.label}：</span>
                      <span>{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 咨询按钮 */}
              <div className="flex gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">立即咨询</Link>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/products">返回产品列表</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 产品特点 */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">产品特点</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {pearFeatures.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">
                    {index === 0 && "✨"}
                    {index === 1 && "💧"}
                    {index === 2 && "💪"}
                    {index === 3 && "🌿"}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 产地优势 */}
      <section className="py-16">
        <div className="max-w-container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">产地优势</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                态禾农业黄金梨种植基地位于湖北省，这里气候温和，四季分明，光照充足，雨量充沛，为黄金梨的生长提供了得天独厚的自然条件。
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                基地土壤肥沃，透气性好，富含多种矿物质，有利于黄金梨的生长和糖分积累。我们采用科学的种植技术，精准施肥，合理灌溉，确保黄金梨的品质和产量。
              </p>
              <p className="text-muted-foreground leading-relaxed">
                在采摘和储存环节，我们也严格把控每一个环节，确保每一颗送到客户手中的黄金梨都是新鲜、优质的。
              </p>
            </div>
            <div className="h-64 bg-gradient-to-br from-primary/20 to-brand-foreground/20 rounded-xl flex items-center justify-center">
              <div className="text-7xl">🌾</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </main>
  );
}
