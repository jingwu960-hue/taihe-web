/**
 * 首页 - 农业公司网站模板
 * 使用说明：此模板可自定义为任何农业公司网站
 */
import Footer from "@/components/sections/footer/default";
import AdvantagesSection from "@/components/sections/home/advantages-section";
import BusinessSection from "@/components/sections/home/business-section";
import EmblaCarousel from "@/components/sections/home/carousel/embla-carousel";
import CtaSection from "@/components/sections/home/cta-section";
import NewsSection from "@/components/sections/home/news-section";
import ProductsSection from "@/components/sections/home/products-section";
import StatsSection from "@/components/sections/home/stats-section";
import Navbar from "@/components/sections/navbar/default";
import { FloatingContact } from "@/components/ui/floating-contact";
import { LayoutLines } from "@/components/ui/layout-lines";
import {
  advantagesData,
  bannerData,
  businessData,
  DEFAULT_PLACEHOLDER,
  newsData,
  productsData,
} from "@/config/home";

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <LayoutLines />
      <Navbar />
      <EmblaCarousel banners={bannerData} defaultPlaceholder={DEFAULT_PLACEHOLDER} />
      <StatsSection />
      <BusinessSection data={businessData} />
      <ProductsSection data={productsData} />
      <AdvantagesSection data={advantagesData} />
      <NewsSection data={newsData} />
      <CtaSection />
      <Footer />
      <FloatingContact />
    </main>
  );
}
