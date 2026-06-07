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

  const getCategoryIcon = (index: number) => {
    const icons = ["📰", "📊", "🌱"];
    return icons[index % icons.length];
  };

  return (
    <section className="py-20">
      <div className="max-w-container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">新闻资讯</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">了解公司最新动态，关注行业发展</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <Link key={index} href="/news">
              <Card className="h-full overflow-hidden transition-shadow duration-200 hover:shadow-lg hover-news-card active:scale-[0.98]">
                <div className="h-40 bg-gradient-to-br from-primary/20 to-brand-foreground/20 flex items-center justify-center">
                  <div className="text-5xl">
                    {getCategoryIcon(index)}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-muted-foreground mb-3">{item.date}</div>
                  <h3 className="text-lg font-semibold mb-3 line-clamp-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm line-clamp-3">{item.summary}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
