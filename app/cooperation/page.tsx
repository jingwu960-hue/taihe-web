"use client";

import Link from "next/link";
import { useState } from "react";

import Footer from "@/components/sections/footer/default";
import Navbar from "@/components/sections/navbar/default";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FloatingContact } from "@/components/ui/floating-contact";
import { LayoutLines } from "@/components/ui/layout-lines";

// 模拟数据
const cooperationModes = [
  {
    title: "批发采购",
    description: "适合农产品批发商、经销商，提供大批量优质水果供应",
    features: ["量大价优", "稳定供应", "冷链配送", "可定制包装"],
  },
  {
    title: "商超合作",
    description: "为连锁超市、便利店提供水果供应服务",
    features: ["资质齐全", "质量稳定", "定期配送", "营销支持"],
  },
  {
    title: "政企采购",
    description: "为政府机关、学校、企业提供采购服务",
    features: ["正规发票", "食品安全", "按需配送", "可追溯"],
  },
  {
    title: "个人零售",
    description: "欢迎个人和家庭购买，享受新鲜水果",
    features: ["小量起批", "全国发货", "新鲜直达", "售后保障"],
  },
];

const cooperationProcess = [
  {
    step: "01",
    title: "咨询沟通",
    description: "联系我们，了解产品和合作模式",
  },
  {
    step: "02",
    title: "实地考察",
    description: "欢迎来基地参观考察，了解我们的实力",
  },
  {
    step: "03",
    title: "洽谈合作",
    description: "确定合作模式，签订合作协议",
  },
  {
    step: "04",
    title: "正式合作",
    description: "开始合作，我们将提供优质的产品和服务",
  },
];

const faqs = [
  {
    question: "起订量是多少？",
    answer: "不同产品起订量不同，具体请咨询我们的销售人员。",
  },
  {
    question: "是否支持样品？",
    answer: "支持样品，样品费根据产品不同有所差异，后期订货可返还。",
  },
  {
    question: "配送范围有哪些？",
    answer: "支持全国配送，部分偏远地区需详询。",
  },
  {
    question: "如何保证产品质量？",
    answer: "我们严格把控种植、采摘、仓储、运输各环节，确保产品新鲜优质。",
  },
];

export default function Cooperation() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <LayoutLines />
      <Navbar />

      {/* 页面头部 */}
      <section className="py-20 bg-gradient-to-r from-primary/20 to-brand-foreground/20">
        <div className="max-w-container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">招商合作</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            湖北态禾农业股份有限公司诚邀各界合作伙伴，共同发展，共创未来
          </p>
        </div>
      </section>

      {/* 合作模式 */}
      <section className="py-20">
        <div className="max-w-container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">合作模式</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              多种合作模式，总有一种适合您
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cooperationModes.map((mode, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">
                    {index === 0 && "📦"}
                    {index === 1 && "🏪"}
                    {index === 2 && "🏛️"}
                    {index === 3 && "👨‍👩‍👧‍👦"}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{mode.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{mode.description}</p>
                  <ul className="space-y-2">
                    {mode.features.map((feature, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="text-primary">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 合作流程 */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">合作流程</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              简单四步，开启合作之旅
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {cooperationProcess.map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
                <p className="text-muted-foreground text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">常见问题</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              您可能关心的问题
            </p>
          </div>
          <div className="max-w-2xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <button
                    className="w-full text-left flex justify-between items-center font-semibold"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <span>{faq.question}</span>
                    <span className="text-xl">{openFaq === index ? "-" : "+"}</span>
                  </button>
                  {openFaq === index && (
                    <p className="mt-4 text-muted-foreground">{faq.answer}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 联系我们 */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">立即咨询，开启合作</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            有任何问题或合作意向，请随时与我们联系
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" asChild>
              <Link href="/contact">在线留言</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a href="tel:400-888-8888">电话咨询</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </main>
  );
}
