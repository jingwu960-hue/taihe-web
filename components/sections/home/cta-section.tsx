"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

/**
 * 底部询盘板块组件
 * 提供在线留言和电话咨询的CTA
 */
export default function CtaSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-brand-accent/80 to-brand-foreground"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-brand-soft-pink/20 rounded-full blur-2xl"></div>
      </div>
      <div className="relative max-w-container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">立即咨询，获取专属报价</h2>
        <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
          无论您是批发商、商超还是政企客户，我们都能为您提供满意的解决方案
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button size="lg" variant="brand" asChild>
            <Link href="/contact">在线留言</Link>
          </Button>
          <Button size="lg" variant="default" asChild className="border-white/50 text-white hover:bg-white/20">
            <a href={`tel:${siteConfig.contact.phone}`}>电话咨询</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
