import Link from "next/link";

import Footer from "@/components/sections/footer/default";
import Navbar from "@/components/sections/navbar/default";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FloatingContact } from "@/components/ui/floating-contact";
import { LayoutLines } from "@/components/ui/layout-lines";

// 模拟数据
const peachSpecs = [
  { label: "产品名称", value: "黄桃" },
  { label: "上市时间", value: "每年6-7月" },
  { label: "年产量", value: "150万斤" },
  { label: "产地", value: "湖北态禾农业种植基地" },
  { label: "储存条件", value: "常温3-5天，冷藏7-10天" },
];

const peachFeatures = [
  { title: "果肉饱满", description: "肉质紧实，口感醇厚" },
  { title: "果香浓郁", description: "香气扑鼻，回味悠长" },
  { title: "营养丰富", description: "富含维生素C和胡萝卜素" },
  { title: "酸甜适口", description: "糖度适中，口感丰富" },
];

export default function PeachProduct() {
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
            <span className="text-foreground">黄桃</span>
          </div>
        </div>
      </section>

      {/* 产品详情 */}
      <section className="py-16">
        <div className="max-w-container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* 产品图片 */}
            <div className="h-96 bg-gradient-to-br from-primary/20 to-brand-foreground/20 rounded-xl flex items-center justify-center">
              <div className="text-9xl">🍑</div>
            </div>

            {/* 产品信息 */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">黄桃</h1>
              <div className="text-2xl font-bold text-primary mb-6">¥20/斤</div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                态禾农业黄桃产自生态环境优越的湖北基地，我们选用优质品种，科学种植，严格管理，确保每一颗黄桃都品质优良，口感出众。
              </p>

              {/* 产品规格 */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">产品规格</h3>
                <div className="grid grid-cols-2 gap-4">
                  {peachSpecs.map((spec, index) => (
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
            {peachFeatures.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">
                    {index === 0 && "✨"}
                    {index === 1 && "🌿"}
                    {index === 2 && "💪"}
                    {index === 3 && "😋"}
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
            <div className="h-64 bg-gradient-to-br from-primary/20 to-brand-foreground/20 rounded-xl flex items-center justify-center order-2 md:order-1">
              <div className="text-7xl">🌾</div>
            </div>
            <div className="order-1 md:order-2">
              <p className="text-muted-foreground mb-4 leading-relaxed">
                湖北地区独特的地理和气候条件，为黄桃的生长提供了理想的环境。充足的光照、适宜的温度和肥沃的土壤，让我们的黄桃品质卓越。
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                我们的黄桃种植基地远离工业污染，采用标准化种植管理，严格控制化肥和农药的使用，确保产品的安全性和品质。
              </p>
              <p className="text-muted-foreground leading-relaxed">
                每一颗黄桃都在树上充分成熟后才采摘，确保糖分充足，口感最佳。我们拥有完善的冷链储存和运输体系，确保新鲜直达。
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </main>
  );
}
