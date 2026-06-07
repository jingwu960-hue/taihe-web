"use client";

import { useState } from "react";

import Footer from "@/components/sections/footer/default";
import Navbar from "@/components/sections/navbar/default";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FloatingContact } from "@/components/ui/floating-contact";
import { LayoutLines } from "@/components/ui/layout-lines";
import { siteConfig } from "@/config/site";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapError, setMapError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("感谢您的留言，我们会尽快与您联系！");
    setFormData({
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <LayoutLines />
      <Navbar />

      {/* 页面头部 */}
      <section className="py-20 bg-gradient-to-r from-primary/20 to-brand-foreground/20">
        <div className="max-w-container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">联系我们</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            有任何问题或需求，请随时与我们联系
          </p>
        </div>
      </section>

      {/* 联系信息 */}
      <section className="py-20">
        <div className="max-w-container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="text-5xl mb-4">📍</div>
                <h3 className="text-xl font-semibold mb-2">公司地址</h3>
                <p className="text-muted-foreground">{siteConfig.contact.address}</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="text-5xl mb-4">📞</div>
                <h3 className="text-xl font-semibold mb-2">联系电话</h3>
                <p className="text-muted-foreground">{siteConfig.contact.phone}</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="text-5xl mb-4">📧</div>
                <h3 className="text-xl font-semibold mb-2">电子邮箱</h3>
                <p className="text-muted-foreground">{siteConfig.contact.email}</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* 联系表单 */}
            <div>
              <h2 className="text-2xl font-bold mb-6">在线留言</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">姓名 *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="请输入您的姓名"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">电话 *</label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="请输入您的电话"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">邮箱</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="请输入您的邮箱"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">咨询主题</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="请输入咨询主题"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">留言内容 *</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="请输入您的留言内容"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full md:w-auto">
                  提交留言
                </Button>
              </form>
            </div>

            {/* 地图/位置 */}
            <div>
              <h2 className="text-2xl font-bold mb-6">位置信息</h2>
              <a
                href="https://www.amap.com/search?query=湖北态禾农业股份有限公司&city=420922"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="h-80 rounded-lg overflow-hidden mb-6 cursor-pointer hover:opacity-90 transition-opacity">
                  {!mapError ? (
                    <img
                      src="https://restapi.amap.com/v3/staticmap?location=114.1078,31.3090&zoom=13&size=800*320&markers=large,0xFF0000,1:114.1078,31.3090&key=YOUR_AMAP_KEY"
                      alt="公司位置地图"
                      className={`w-full h-full object-cover ${mapLoaded ? "block" : "hidden"}`}
                      onLoad={() => setMapLoaded(true)}
                      onError={() => {
                        setMapError(true);
                        setMapLoaded(false);
                      }}
                    />
                  ) : null}
                  {(!mapLoaded || mapError) && (
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-brand-foreground/20 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl mb-4">🗺️</div>
                        <p className="text-muted-foreground">点击查看地图位置</p>
                        <p className="text-sm text-primary mt-2">在高德地图中打开 →</p>
                      </div>
                    </div>
                  )}
                </div>
              </a>
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">工作时间</h3>
                    <p className="text-muted-foreground text-sm">周一至周五: 9:00 - 17:00</p>
                    <p className="text-muted-foreground text-sm">周末: 休息</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">交通指引</h3>
                    <p className="text-muted-foreground text-sm">
                      高铁：孝感北站下车，距基地8公里。
                    </p>
                    <p className="text-muted-foreground text-sm">
                      自驾：导航搜索&quot;湖北态禾农业股份有限公司&quot;
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </main>
  );
}
