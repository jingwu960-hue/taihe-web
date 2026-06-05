"use client";

import Link from "next/link";

import Footer from "@/components/sections/footer/default";
import Navbar from "@/components/sections/navbar/default";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Counter } from "@/components/ui/counter";
import { EmblaCarousel } from "@/components/ui/embla-carousel";
import { FloatingContact } from "@/components/ui/floating-contact";
import { LayoutLines } from "@/components/ui/layout-lines";
import { siteConfig } from "@/config/site";

// 模拟数据
const bannerData = [
  {
    title: "源头种植，品质可控",
    description: "湖北态禾农业专注桃树、梨树规模化种植，为您提供新鲜优质的水果",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1200&h=500&fit=crop",
  },
  {
    title: "稳定供货，诚信经营",
    description: "拥有万亩种植基地，全年稳定供应，满足不同客户需求",
    image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=1200&h=500&fit=crop",
  },
  {
    title: "科学种植，绿色健康",
    description: "采用先进种植技术，严格把控品质，让您吃得放心",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&h=500&fit=crop",
  },
];

// 默认占位图
const DEFAULT_PLACEHOLDER = 
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='600' viewBox='0 0 1200 600'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%232E7D32;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23FF9800;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='600' fill='url(%23g)'/%3E%3Ctext x='600' y='300' font-family='Arial' font-size='40' fill='white' text-anchor='middle' dy='.3em'%3E态禾农业%3C/text%3E%3C/svg%3E";

const businessData = [
  { icon: "🌳", title: "桃树种植", description: "优质桃树种苗培育，规模化种植管理" },
  { icon: "🍐", title: "梨树种植", description: "黄金梨、水晶梨等多品种培育" },
  { icon: "📦", title: "水果销售", description: "批发、商超、政企采购多渠道服务" },
];

const productsData = [
  { name: "黄金梨", description: "果肉细腻，汁多味甜，品质上乘", image: "https://images.unsplash.com/photo-1568702846914-96b305d2ujfe?w=400&h=300&fit=crop", href: "/products/pear" },
  { name: "黄桃", description: "果香浓郁，酸甜适口，营养丰富", image: "https://images.unsplash.com/photo-1621262765575-483819752335?w=400&h=300&fit=crop", href: "/products/peach" },
  { name: "翠冠梨", description: "果皮细薄，果肉脆嫩，品质优良", image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9df?w=400&h=300&fit=crop", href: "/products" },
  { name: "水蜜桃", description: "果形美观，色泽艳丽，香甜多汁", image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=300&fit=crop", href: "/products" },
];

const advantagesData = [
  { icon: "✅", title: "品质保证", description: "从种植到采摘层层筛选，严格把控" },
  { icon: "🚚", title: "新鲜直达", description: "采摘后24小时内发货，锁鲜保鲜" },
  { icon: "🏆", title: "专业团队", description: "15年农业种植经验，技术过硬" },
  { icon: "🤝", title: "合作共赢", description: "灵活的合作模式，与您携手共进" },
];

const casesData = [
  { name: "某大型商超", type: "商超合作", description: "连续3年稳定供应，品质获客户高度认可" },
  { name: "某农产品批发商", type: "批发合作", description: "年采购量超500万斤，建立长期合作关系" },
  { name: "某政府机关", type: "政企采购", description: "指定农产品供应商，服务保障到位" },
];

const newsData = [
  { title: "态禾农业2024年采摘节盛大开幕", date: "2024-08-15", summary: "欢迎各界朋友莅临参观、采摘" },
  { title: "我司获得绿色食品认证", date: "2024-06-20", summary: "通过严格审核，产品品质再获肯定" },
  { title: "春季种植培训圆满结束", date: "2024-04-10", summary: "邀请农业专家开展技术培训" },
];

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <LayoutLines />
      <Navbar />

      {/* 首屏Banner轮播图 */}
      <EmblaCarousel banners={bannerData} defaultPlaceholder={DEFAULT_PLACEHOLDER} />

      {/* 实力数据展示 */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-soft-green/20 via-brand-soft-orange/10 to-brand-soft-pink/20"></div>
        <div className="relative max-w-container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 rounded-xl bg-white/70 backdrop-blur-sm hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                <Counter target={parseInt(siteConfig.stats.plantingArea)} suffix="亩" />
              </div>
              <p className="text-muted-foreground font-medium">种植面积</p>
            </div>
            <div className="p-6 rounded-xl bg-white/70 backdrop-blur-sm hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl md:text-5xl font-bold text-brand-foreground mb-2">
                <Counter target={parseInt(siteConfig.stats.annualOutput)} suffix="吨" />
              </div>
              <p className="text-muted-foreground font-medium">年产量</p>
            </div>
            <div className="p-6 rounded-xl bg-white/70 backdrop-blur-sm hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl md:text-5xl font-bold text-brand-accent mb-2">
                <Counter target={parseInt(siteConfig.stats.partnerCount)} suffix="+" />
              </div>
              <p className="text-muted-foreground font-medium">合作伙伴</p>
            </div>
            <div className="p-6 rounded-xl bg-white/70 backdrop-blur-sm hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl md:text-5xl font-bold text-brand-secondary mb-2">
                <Counter target={parseInt(siteConfig.stats.years)} suffix="年" />
              </div>
              <p className="text-muted-foreground font-medium">行业经验</p>
            </div>
          </div>
        </div>
      </section>

      {/* 核心业务展示 */}
      <section className="py-20">
        <div className="max-w-container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">核心业务</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">专业的团队，完善的服务，为您提供一站式解决方案</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {businessData.map((item, index) => (
              <Card key={index} hoverable className="text-center">
                <CardContent className="p-8">
                  <div className="text-6xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 核心产品速览 */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">核心产品</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">精选优质水果，为您带来大自然的美味馈赠</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productsData.map((product, index) => (
              <Link key={index} href={product.href}>
                <Card className="h-full" hoverable>
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-brand-foreground/20 flex items-center justify-center">
                    <div className="text-6xl">🍎</div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                    <p className="text-muted-foreground text-sm">{product.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild>
              <Link href="/products">查看全部产品</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 合作优势 */}
      <section className="py-20">
        <div className="max-w-container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">为什么选择我们</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">专业品质，诚信服务，是您值得信赖的合作伙伴</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantagesData.map((item, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-muted/30">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 合作案例 */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">合作案例</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">我们的客户遍布各地，口碑载道</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {casesData.map((item, index) => (
              <Card key={index} hoverable>
                <CardContent className="p-8">
                  <div className="text-sm text-primary font-medium mb-2">{item.type}</div>
                  <h3 className="text-xl font-semibold mb-3">{item.name}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 新闻资讯 */}
      <section className="py-20">
        <div className="max-w-container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">新闻资讯</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">了解态禾最新动态，关注行业发展</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {newsData.map((item, index) => (
              <Link key={index} href="/news">
                <Card className="h-full" hoverable>
                  <CardContent className="p-8">
                    <div className="text-sm text-muted-foreground mb-3">{item.date}</div>
                    <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.summary}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 底部询盘板块 */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-brand-accent/80 to-brand-foreground"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-brand-soft-pink/20 rounded-full blur-2xl"></div>
        </div>
        <div className="relative max-w-container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">立即咨询，获取专属报价</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
            无论您是批发商、商超还是政企客户，我们都能为您提供满意的解决方案
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" variant="brand" asChild>
              <Link href="/contact">在线留言</Link>
            </Button>
            <Button size="lg" variant="outlineSweet" asChild className="border-white/50 text-white hover:bg-white/20">
              <a href={`tel:${siteConfig.contact.phone}`}>电话咨询</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </main>
  );
}