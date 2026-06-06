import Link from 'next/link';

import Footer from '@/components/sections/footer/default';
import Navbar from '@/components/sections/navbar/default';
import ProductDetailSection from '@/components/sections/product-detail';
import { FloatingContact } from '@/components/ui/floating-contact';
import { LayoutLines } from '@/components/ui/layout-lines';
import { getProductDetail } from '@/config/products';

export default function PeachProduct() {
  const product = getProductDetail('peach');

  if (!product) {
    return null;
  }

  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <LayoutLines />
      <Navbar />

      {/* 面包屑 */}
      <section className="py-6 border-b border-border">
        <div className="max-w-container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">首页</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-primary">产品中心</Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </div>
        </div>
      </section>

      <ProductDetailSection product={product} />

      <Footer />
      <FloatingContact />
    </main>
  );
}
