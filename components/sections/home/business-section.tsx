"use client";

import { Card, CardContent } from "@/components/ui/card";
import type { BusinessItem } from "@/types";

interface BusinessSectionProps {
  data: BusinessItem[];
}

/**
 * 核心业务展示组件
 * 展示公司的主要业务范围
 */
export default function BusinessSection({ data }: BusinessSectionProps) {
  if (!data || data.length === 0) {
    return null;
  }

  return (
    <section className="py-20">
      <div className="max-w-container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">核心业务</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">专业的团队，完善的服务，为您提供一站式解决方案</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {data.map((item, index) => (
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
  );
}
