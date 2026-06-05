"use client";

import Link from "next/link";
import { useState } from "react";

import Footer from "@/components/sections/footer/default";
import Navbar from "@/components/sections/navbar/default";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FloatingContact } from "@/components/ui/floating-contact";
import { LayoutLines } from "@/components/ui/layout-lines";

// 模拟数据
const categories = [
  { id: "all", name: "全部产品" },
  { id: "pear", name: "梨子系列" },
  { id: "peach", name: "桃子系列" },
  { id: "season", name: "当季新品" },
];

const products = [
  {
    id: 1,
    name: "黄金梨",
    category: "pear",
    description: "果肉细腻，汁多味甜，品质上乘",
    price: "¥15/斤",
    isSeason: true,
    emoji: "🍐",
  },
  {
    id: 2,
    name: "黄桃",
    category: "peach",
    description: "果香浓郁，酸甜适口，营养丰富",
    price: "¥20/斤",
    isSeason: true,
    emoji: "🍑",
  },
  {
    id: 3,
    name: "翠冠梨",
    category: "pear",
    description: "果皮细薄，果肉脆嫩，品质优良",
    price: "¥18/斤",
    isSeason: false,
    emoji: "🍐",
  },
  {
    id: 4,
    name: "水蜜桃",
    category: "peach",
    description: "果形美观，色泽艳丽，香甜多汁",
    price: "¥22/斤",
    isSeason: true,
    emoji: "🍑",
  },
  {
    id: 5,
    name: "水晶梨",
    category: "pear",
    description: "果水晶莹，肉质细腻，香甜可口",
    price: "¥16/斤",
    isSeason: false,
    emoji: "🍐",
  },
  {
    id: 6,
    name: "油桃",
    category: "peach",
    description: "果皮光滑，果肉脆嫩，酸甜适中",
    price: "¥19/斤",
    isSeason: true,
    emoji: "🍑",
  },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts = products.filter((product) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "season") return product.isSeason;
    return product.category === activeCategory;
  });

  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <LayoutLines />
      <Navbar />

      {/* 页面头部 */}
      <section className="py-20 bg-gradient-to-r from-primary/20 to-brand-foreground/20">
        <div className="max-w-container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">产品中心</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            精选优质水果，为您带来大自然的美味馈赠
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

      {/* 产品列表 */}
      <section className="py-10">
        <div className="max-w-container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Link key={product.id} href={`/products/${product.category === 'pear' ? 'pear' : 'peach'}`}>
                <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1 overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-brand-foreground/20 flex items-center justify-center">
                    <div className="text-8xl">{product.emoji}</div>
                  </div>
                  <CardContent className="p-6">
                    {product.isSeason && (
                      <span className="inline-block px-3 py-1 bg-brand-foreground/20 text-brand-foreground text-xs font-medium rounded-full mb-2">
                        当季新品
                      </span>
                    )}
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                    <div className="text-lg font-bold text-primary">{product.price}</div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">暂无相关产品</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </main>
  );
}
