import {Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import TaiheLogo from "../../logos/taihe";
import { Button } from "../../ui/button";
import {
  Footer,
  FooterBottom,
  FooterColumn,
  FooterContent,
} from "../../ui/footer";

interface FooterLink {
  text: string;
  href: string;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  logo?: ReactNode;
  name?: string;
  columns?: FooterColumnProps[];
  copyright?: string;
  policies?: FooterLink[];
  className?: string;
}

export default function FooterSection({
  logo = <TaiheLogo />,
  name = siteConfig.name,
  columns = [
    {
      title: "快速导航",
      links: [
        { text: "首页", href: "/" },
        { text: "关于我们", href: "/about" },
        { text: "产品中心", href: "/products" },
        { text: "基地展示", href: "/orchard" },
      ],
    },
    {
      title: "更多链接",
      links: [
        { text: "合作案例", href: "/cases" },
        { text: "新闻资讯", href: "/news" },
        { text: "招商合作", href: "/cooperation" },
        { text: "联系我们", href: "/contact" },
      ],
    },
  ],
  copyright = "© 2024 湖北态禾农业股份有限公司. 保留所有权利.",
  policies = [
    { text: "隐私政策", href: "/about" },
    { text: "使用条款", href: "/about" },
  ],
  className,
}: FooterProps) {
  return (
    <footer className={cn("relative overflow-hidden bg-background border-t border-border pt-16 pb-8 w-full", className)}>
      {/* 装饰性背景 */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-brand-foreground/5 rounded-full blur-3xl" />
      
      <div className="relative max-w-container mx-auto px-4">
        <Footer>
          <FooterContent>
            <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-3">
              <div className="flex items-center gap-3 mb-6">
                {logo}
                <h3 className="text-xl font-bold text-foreground">{name}</h3>
              </div>
              <p className="text-muted-foreground mb-6 max-w-sm">
                湖北态禾农业专注桃树、梨树规模化种植，源头种植，品质可控，稳定供货，诚信经营。
              </p>
              
              {/* 联系方式 */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground text-sm">
                  <Phone className="w-4 h-4 text-primary" />
                  <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-primary transition-colors">
                    {siteConfig.contact.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground text-sm">
                  <Mail className="w-4 h-4 text-primary" />
                  <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-primary transition-colors">
                    {siteConfig.contact.email}
                  </a>
                </div>
                <div className="flex items-start gap-3 text-muted-foreground text-sm">
                  <MapPin className="w-4 h-4 text-primary mt-0.5" />
                  <span>{siteConfig.contact.address}</span>
                </div>
              </div>
              
              <div className="mt-6">
                <Button variant="outline" asChild size="sm">
                  <Link href="/contact">立即咨询</Link>
                </Button>
              </div>
            </FooterColumn>
            
            {columns.map((column, index) => (
              <FooterColumn key={index}>
                <h3 className="text-md pt-1 font-semibold mb-4 text-foreground">{column.title}</h3>
                {column.links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors block mb-3"
                  >
                    {link.text}
                  </Link>
                ))}
              </FooterColumn>
            ))}
          </FooterContent>
          
          <FooterBottom className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <div className="text-muted-foreground text-sm">{copyright}</div>
            <div className="flex items-center gap-6">
              {policies.map((policy, index) => (
                <Link key={index} href={policy.href} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  {policy.text}
                </Link>
              ))}
            </div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
}
