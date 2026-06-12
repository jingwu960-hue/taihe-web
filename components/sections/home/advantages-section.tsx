import { Award, Handshake,ShieldCheck, Truck } from "lucide-react";

import type { AdvantageItem } from "@/types";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  ShieldCheck,
  Truck,
  Award,
  Handshake,
};

interface AdvantagesSectionProps {
  data: AdvantageItem[];
}

/**
 * 合作优势展示组件
 * 展示选择我们的理由
 */
export default function AdvantagesSection({ data }: AdvantagesSectionProps) {
  // 空数据检查
  if (!data || data.length === 0) {
    return null;
  }

  return (
    <section className="py-20">
      <div className="max-w-container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">为什么选择我们</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">专业品质，诚信服务，是您值得信赖的合作伙伴</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((item, index) => {
            const IconComponent = iconMap[item.icon];
            return (
              <div key={index} className="text-center p-6 rounded-lg bg-muted/30">
                {IconComponent && <IconComponent size={48} className="shrink-0 text-primary mx-auto mb-4" />}
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
