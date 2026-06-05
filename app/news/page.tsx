"use client";

import { useState } from "react";

import Footer from "@/components/sections/footer/default";
import Navbar from "@/components/sections/navbar/default";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FloatingContact } from "@/components/ui/floating-contact";
import { LayoutLines } from "@/components/ui/layout-lines";

// 模拟数据
const categories = [
  { id: "all", name: "全部资讯" },
  { id: "company", name: "企业新闻" },
  { id: "industry", name: "行业资讯" },
  { id: "tech", name: "种植科普" },
];

const newsList = [
  {
    id: 1,
    title: "态禾农业2024年采摘节盛大开幕",
    category: "company",
    date: "2024-08-15",
    summary: "态禾农业一年一度的采摘节正式开幕，欢迎各界朋友莅临参观、采摘，体验田园风光。",
  },
  {
    id: 2,
    title: "我司获得绿色食品认证",
    category: "company",
    date: "2024-06-20",
    summary: "经过严格审核，我司黄金梨和黄桃产品双双获得绿色食品认证，品质再获肯定。",
  },
  {
    id: 3,
    title: "春季果树种植技术培训圆满结束",
    category: "tech",
    date: "2024-04-10",
    summary: "我司邀请农业专家为合作农户开展春季种植技术培训，提高农户种植水平。",
  },
  {
    id: 4,
    title: "2024年水果产业发展趋势分析",
    category: "industry",
    date: "2024-03-25",
    summary: "分析当前水果市场发展趋势，展望未来产业发展方向，为行业发展提供参考。",
  },
  {
    id: 5,
    title: "果树病虫害绿色防控技术要点",
    category: "tech",
    date: "2024-03-01",
    summary: "介绍果树病虫害绿色防控技术，减少农药使用，提高果品质量安全。",
  },
  {
    id: 6,
    title: "我司与某大型商超达成战略合作",
    category: "company",
    date: "2024-02-15",
    summary: "我司与某大型连锁超市签署战略合作协议，建立长期稳定的供应关系。",
  },
];

export default function News() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredNews = newsList.filter((n) => {
    if (activeCategory === "all") return true;
    return n.category === activeCategory;
  });

  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <LayoutLines />
      <Navbar />

      {/* 页面头部 */}
      <section className="py-20 bg-gradient-to-r from-primary/20 to-brand-foreground/20">
        <div className="max-w-container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">新闻资讯</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            了解态禾农业最新动态，关注行业发展趋势
          </p>
        </div>
      </section>

      {/* 分类筛选 */}
      <section className="py-10">
        <div className="max-w-container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "secondary"}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* 新闻列表 */}
      <section className="py-10">
        <div className="max-w-container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((newsItem) => (
              <Card key={newsItem.id} className="h-full hover:shadow-lg transition-all hover:-translate-y-1 overflow-hidden">
                <div className="h-40 bg-gradient-to-br from-primary/20 to-brand-foreground/20 flex items-center justify-center">
                  <div className="text-5xl">
                    {newsItem.category === "company" && "📰"}
                    {newsItem.category === "industry" && "📊"}
                    {newsItem.category === "tech" && "🌱"}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-primary font-medium">
                      {newsItem.category === "company" && "企业新闻"}
                      {newsItem.category === "industry" && "行业资讯"}
                      {newsItem.category === "tech" && "种植科普"}
                    </span>
                    <span className="text-sm text-muted-foreground">{newsItem.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 line-clamp-2">{newsItem.title}</h3>
                  <p className="text-muted-foreground text-sm line-clamp-3">{newsItem.summary}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          {filteredNews.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">暂无相关资讯</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </main>
  );
}
