"use client";

import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import type { NewsItem } from "@/types";

interface NewsSectionProps {
  data: NewsItem[];
}

/**
 * 新闻资讯展示组件
 * 展示公司最新动态和新闻
 */
export default function NewsSection({ data }: NewsSectionProps) {
  if (!data || data.length === 0) {
    return null;
  }

  return (
    <section className="py-20">
      <div className="max-w-container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">新闻资讯</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">了解态禾最新动态，关注行业发展</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {data.map((item, index) => (
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
  );
}
