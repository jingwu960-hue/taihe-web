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
          <div className="p-6 rounded-xl bg-white/70 backdrop-blur-sm hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
              <Counter target={parseInt(siteConfig.stats.plantingArea)} suffix="亩" />
            </div>
            <p className="text-muted-foreground font-medium">种植面积</p>
          </div>
          <div className="p-6 rounded-xl bg-white/70 backdrop-blur-sm hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
            <div className="text-4xl md:text-5xl font-bold text-brand-foreground mb-2">
              <Counter target={parseInt(siteConfig.stats.annualOutput)} suffix="吨" />
            </div>
            <p className="text-muted-foreground font-medium">年产量</p>
          </div>
          <div className="p-6 rounded-xl bg-white/70 backdrop-blur-sm hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
            <div className="text-4xl md:text-5xl font-bold text-brand-accent mb-2">
              <Counter target={parseInt(siteConfig.stats.partnerCount)} suffix="+" />
            </div>
            <p className="text-muted-foreground font-medium">合作伙伴</p>
          </div>
          <div className="p-6 rounded-xl bg-white/70 backdrop-blur-sm hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
            <div className="text-4xl md:text-5xl font-bold text-brand-secondary mb-2">
              <Counter target={parseInt(siteConfig.stats.years)} suffix="年" />
            </div>
            <p className="text-muted-foreground font-medium">行业经验</p>
          </div>
        </div>
      </div>
    </section>
  );
}
