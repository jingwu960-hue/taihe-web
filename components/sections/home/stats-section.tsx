"use client";

import { Counter } from "@/components/ui/counter";
import { siteConfig } from "@/config/site";

/**
 * 实力数据展示组件
 * 展示种植面积、年产量、合作伙伴数量和行业经验等核心数据
 */
export default function StatsSection() {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-soft-green/20 via-brand-soft-orange/10 to-brand-soft-pink/20"></div>
      <div className="relative max-w-container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { count: siteConfig.stats.plantingArea, suffix: "亩", color: "text-primary" },
            { count: siteConfig.stats.annualOutput, suffix: "吨", color: "text-brand-foreground" },
            { count: siteConfig.stats.partnerCount, suffix: "+", color: "text-brand-accent" },
            { count: siteConfig.stats.years, suffix: "年", color: "text-brand-secondary" },
          ].map((item, index) => (
            <div key={index} className="p-6 rounded-xl bg-white/70 backdrop-blur-sm hover-card-base hover-stats-card active:scale-[0.98] transition-transform duration-200">
              <div className={`text-4xl md:text-5xl font-bold ${item.color} mb-2`}>
                <Counter target={parseInt(item.count)} suffix={item.suffix} />
              </div>
              <p className="text-muted-foreground font-medium">
                {index === 0 ? "基地面积" : 
                 index === 1 ? "年产量" : 
                 index === 2 ? "合作伙伴" : "行业经验"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
