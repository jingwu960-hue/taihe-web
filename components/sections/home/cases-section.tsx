"use client";

import { Card, CardContent } from "@/components/ui/card";
import type { CaseItem } from "@/types";

interface CasesSectionProps {
  data: CaseItem[];
}

/**
 * 合作案例展示组件
 * 展示公司的成功合作案例
 */
export default function CasesSection({ data }: CasesSectionProps) {
  if (!data || data.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">合作案例</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">我们的客户遍布各地，口碑载道</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {data.map((item, index) => (
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
  );
}
