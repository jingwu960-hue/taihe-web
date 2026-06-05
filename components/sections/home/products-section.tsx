"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { ProductItem } from "@/types";

interface ProductsSectionProps {
  data: ProductItem[];
}

/**
 * 核心产品展示组件
 * 展示公司的主要产品
 */
export default function ProductsSection({ data }: ProductsSectionProps) {
  if (!data || data.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">核心产品</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">精选优质水果，为您带来大自然的美味馈赠</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((product, index) => (
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
  );
}
