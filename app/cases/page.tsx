"use client";

import { useState } from "react";
import { Store, Package, Building2 } from "lucide-react";

import Footer from "@/components/sections/footer/default";
import Navbar from "@/components/sections/navbar/default";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FloatingContact } from "@/components/ui/floating-contact";
import { LayoutLines } from "@/components/ui/layout-lines";

// 模拟数据
const categories = [
  { id: "all", name: "全部案例" },
  { id: "wholesale", name: "水果批发商" },
  { id: "supermarket", name: "商超合作" },
  { id: "government", name: "政企采购" },
];

const caseStudies = [
  {
    id: 1,
    title: "某大型连锁超市合作",
    type: "supermarket",
    customer: "某大型连锁超市",
    description: "与我司建立稳定供应关系已有5年，每年采购量超200万斤",
    result: "成为该超市核心水果供应商，合作持续增长",
  },
  {
    id: 2,
    title: "某农产品批发市场合作",
    type: "wholesale",
    customer: "某农产品批发市场",
    description: "年采购量超300万斤，是我们的重要合作伙伴",
    result: "市场占有率稳步提升，客户满意度高",
  },
  {
    id: 3,
    title: "某政府机关采购",
    type: "government",
    customer: "某政府机关",
    description: "连续3年成为其定点采购单位，每年采购量约50万斤",
    result: "获得一致好评，建立了良好的政企合作关系",
  },
  {
    id: 4,
    title: "某电商平台合作",
    type: "wholesale",
    customer: "某电商平台",
    description: "线上销量逐年增长，产品好评率98%以上",
    result: "成为平台头部供应商，销量翻倍增长",
  },
  {
    id: 5,
    title: "某食品加工企业合作",
    type: "wholesale",
    customer: "某食品加工企业",
    description: "每年稳定供应原料水果100万斤以上",
    result: "建立长期战略合作，共同开发新产品",
  },
  {
    id: 6,
    title: "某学校食堂采购",
    type: "government",
    customer: "某学校食堂",
    description: "为全校师生提供新鲜水果，保障食品安全",
    result: "获得学校和家长的高度认可",
  },
];

export default function Cases() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredCases = caseStudies.filter((c) => {
    if (activeCategory === "all") return true;
    return c.type === activeCategory;
  });

  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <LayoutLines />
      <Navbar />

      {/* 页面头部 */}
      <section className="py-20 bg-gradient-to-r from-primary/20 to-brand-foreground/20">
        <div className="max-w-container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">合作案例</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            看看我们的合作伙伴如何评价湖北态禾农业股份有限公司
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

      {/* 案例列表 */}
      <section className="py-10">
        <div className="max-w-container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCases.map((caseItem) => (
              <Card key={caseItem.id} className="h-full hover:shadow-lg transition-all hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="h-40 bg-gradient-to-br from-primary/20 to-brand-foreground/20 rounded-lg mb-4 flex items-center justify-center">
                    <div className="flex items-center justify-center h-full">
                      {caseItem.type === "supermarket" && <Store size={56} className="shrink-0 text-primary" />}
                      {caseItem.type === "wholesale" && <Package size={56} className="shrink-0 text-primary" />}
                      {caseItem.type === "government" && <Building2 size={56} className="shrink-0 text-primary" />}
                    </div>
                  </div>
                  <div className="text-sm text-primary font-medium mb-2">
                    {caseItem.type === "supermarket" && "商超合作"}
                    {caseItem.type === "wholesale" && "批发合作"}
                    {caseItem.type === "government" && "政企采购"}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{caseItem.title}</h3>
                  <p className="text-muted-foreground mb-4">{caseItem.description}</p>
                  <div className="pt-4 border-t border-border">
                    <h4 className="font-medium mb-2">合作成果</h4>
                    <p className="text-sm text-muted-foreground">{caseItem.result}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          {filteredCases.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">暂无相关案例</p>
            </div>
          )}
        </div>
      </section>

      {/* 联系我们 */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">想要成为我们的合作伙伴？</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              湖北态禾农业股份有限公司期待与您建立长期稳定的合作关系，共同发展，共创未来
            </p>
          <Button size="lg" asChild>
            <a href="/cooperation">了解合作模式</a>
          </Button>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </main>
  );
}
