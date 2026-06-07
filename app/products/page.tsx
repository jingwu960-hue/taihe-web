"use client";

import Image from "next/image";
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
    name: "苏翠一号梨",
    slug: "sucui-yihao-li",
    category: "pear",
    description: "果肉细腻，汁多味甜，品质上乘",
    price: "价格与销售详谈",
    isSeason: true,
    image: "/images/products/product-1.jpg",
  },
  {
    id: 2,
    name: "新玉梨",
    slug: "xinyu-li",
    category: "pear",
    description: "果皮细薄，果肉脆嫩，品质优良",
    price: "价格与销售详谈",
    isSeason: true,
    image: "/images/products/product-3.jpg",
  },
  {
    id: 3,
    name: "其它品种梨",
    slug: "qita-li",
    category: "pear",
    description: "多种优质梨品种，满足不同口味需求",
    price: "价格与销售详谈",
    isSeason: false,
    image: "/images/products/product-1.jpg",
  },
  {
    id: 4,
    name: "金冠黄桃",
    slug: "jinguan-huangtao",
    category: "peach",
    description: "果香浓郁，酸甜适口，营养丰富",
    price: "价格与销售详谈",
    isSeason: true,
    image: "/images/products/product-2.jpg",
  },
  {
    id: 5,
    name: "胭脂红桃",
    slug: "yanzhi-hongtao",
    category: "peach",
    description: "果形美观，色泽艳丽，香甜多汁",
    price: "价格与销售详谈",
    isSeason: true,
    image: "/images/products/product-4.jpg",
  },
  {
    id: 6,
    name: "红九三桃",
    slug: "hongjiusan-tao",
    category: "peach",
    description: "果形美观，色泽艳丽，香甜多汁",
    price: "价格与销售详谈",
    isSeason: true,
    image: "/images/products/product-4.jpg",
  },
  {
    id: 7,
    name: "其它品种桃",
    slug: "qita-tao",
    category: "peach",
    description: "多种优质桃品种，满足不同口味需求",
    price: "价格与销售详谈",
    isSeason: false,
    image: "/images/products/product-2.jpg",
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
      <section className="from-primary/20 to-brand-foreground/20 bg-gradient-to-r py-20">
        <div className="max-w-container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">产品中心</h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            精选优质水果，为您带来大自然的美味馈赠
          </p>
        </div>
      </section>

      {/* 分类筛选 */}
      <section className="py-10">
        <div className="max-w-container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={
                  activeCategory === category.id ? "default" : "secondary"
                }
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
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <Link key={product.id} href={`/products/${product.slug}`}>
                <Card className="h-full overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div className="relative aspect-[5/3] overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
                    {product.isSeason && (
                      <div className="absolute left-4 top-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium shadow-md">
                        当季新品
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <h3 className="mb-3 text-xl font-bold tracking-tight">
                      {product.name}
                    </h3>
                    <div className="mb-3 flex items-center gap-2">
                      <span className="text-primary text-lg font-bold">
                        {product.price}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {product.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          {filteredProducts.length === 0 && (
            <div className="py-20 text-center">
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
