"use client";

import { useState } from "react";
import { Newspaper, BarChart3, Sprout } from "lucide-react";

import Footer from "@/components/sections/footer/default";
import Navbar from "@/components/sections/navbar/default";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FloatingContact } from "@/components/ui/floating-contact";
import { LayoutLines } from "@/components/ui/layout-lines";

// 新闻分类 - 可按需修改
const categories = [
  { id: "all", name: "全部资讯" },
  { id: "company", name: "企业新闻" },
  { id: "industry", name: "行业资讯" },
  { id: "tech", name: "种植科普" },
];

// 新闻列表 - 以下为示例数据，请根据实际情况替换
const newsList = [
  {
    id: 1,
    title: "湖北态禾农业完成关键升级 打造观景平台与露营基地",
    category: "company",
    date: "2026-06-06",
    summary: "2026年，园区完成关键升级，重点打造两大核心项目：观景平台依托山地制高点布局，可全景俯瞰梯田果园；露营基地融入自然生态环境，满足城市客群对\"轻度假、慢生活\"的多元需求。",
  },
  {
    id: 2,
    title: "湖北态禾农业累计投资近4000万元 园区初具规模",
    category: "company",
    date: "2026-05-20",
    summary: "截至2026年，园区项目累计投资近4000万元，园区基础设施与产业体系已初具规模，正处于由\"传统农业园区\"向\"农文旅融合示范区\"转型升级的关键阶段。",
  },
  {
    id: 3,
    title: "湖北态禾农业累计带动3000余户农户增收致富",
    category: "company",
    date: "2026-04-15",
    summary: "公司坚持产业发展与社会责任协同推进，累计带动周边3000余户农户参与产业发展，提供就业岗位300余个，促进农民年均增收约2.5万元，助力乡村振兴与区域经济发展。",
  },
  {
    id: 4,
    title: "园区桃、梨、猕猴桃产品通过绿色食品认证",
    category: "company",
    date: "2025-12-10",
    summary: "园区产品均通过中国绿色食品认证，公司注册品牌商标，品牌与资质体系不断完善。",
  },
  {
    id: 5,
    title: "湖北态禾农业被认定为省级农业产业化重点龙头企业",
    category: "company",
    date: "2021-12-20",
    summary: "公司被认定为省级农业产业化重点龙头企业，在新四板成功挂牌，公司发展稳健，品牌影响力持续提升。",
  },
  {
    id: 6,
    title: "态禾农业园区打造1200亩综合性田园综合体",
    category: "tech",
    date: "2021-06-01",
    summary: "园区依山而建，整体呈现层次分明的山地梯田果园景观。园区总占地约1200亩，主要种植优质果品；配套建设生态水产养殖区，构建\"种养结合、循环发展\"的生态农业体系。",
  },
  {
    id: 7,
    title: "湖北态禾农业年度采摘节盛大开幕",
    category: "company",
    date: "2024-08-15",
    summary: "一年一度的采摘节正式开幕，欢迎各界朋友莅临参观、采摘，体验田园风光。",
  },
  {
    id: 8,
    title: "湖北态禾农业产品获得绿色食品认证",
    category: "company",
    date: "2024-06-20",
    summary: "经过严格审核，公司产品双双获得绿色食品认证，品质再获肯定。",
  },
  {
    id: 9,
    title: "春季果树种植技术培训圆满结束",
    category: "tech",
    date: "2024-04-10",
    summary: "公司邀请农业专家为合作农户开展春季种植技术培训，提高农户种植水平。",
  },
  {
    id: 10,
    title: "2024年水果产业发展趋势分析",
    category: "industry",
    date: "2024-03-25",
    summary: "分析当前水果市场发展趋势，展望未来产业发展方向，为行业发展提供参考。",
  },
  {
    id: 11,
    title: "果树病虫害绿色防控技术要点",
    category: "tech",
    date: "2024-03-01",
    summary: "介绍果树病虫害绿色防控技术，减少农药使用，提高果品质量安全。",
  },
  {
    id: 12,
    title: "湖北态禾农业与某大型商超达成战略合作",
    category: "company",
    date: "2024-02-15",
    summary: "公司与某大型连锁超市签署战略合作协议，建立长期稳定的供应关系。",
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
            了解公司最新动态，关注行业发展趋势
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
                  <div className="flex items-center justify-center h-full">
                    {newsItem.category === "company" && <Newspaper size={56} className="shrink-0 text-primary" />}
                    {newsItem.category === "industry" && <BarChart3 size={56} className="shrink-0 text-primary" />}
                    {newsItem.category === "tech" && <Sprout size={56} className="shrink-0 text-primary" />}
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
