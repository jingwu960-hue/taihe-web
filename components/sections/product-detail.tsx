import { Citrus,Droplets, HeartPulse, Leaf, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import type { ProductDetail } from '@/types';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Sparkles,
  Droplets,
  HeartPulse,
  Leaf,
  Citrus,
};

interface ProductDetailProps {
  product: ProductDetail;
}

export default function ProductDetailSection({ product }: ProductDetailProps) {
  return (
    <>
      {/* 产品详情 */}
      <section className="py-16">
        <div className="max-w-container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* 产品图片 */}
            <div className="relative h-96 overflow-hidden rounded-xl">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* 产品信息 */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
              <div className="text-2xl font-bold text-primary mb-6">{product.price}</div>
              <p className="text-muted-foreground mb-6 leading-relaxed">{product.description}</p>

              {/* 产品规格 */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">产品规格</h3>
                <div className="grid grid-cols-2 gap-4">
                  {product.specs.map((spec, index) => (
                    <div key={index} className="flex">
                      <span className="text-muted-foreground w-24">{spec.label}：</span>
                      <span>{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 咨询按钮 */}
              <div className="flex gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">立即咨询</Link>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/products">返回产品列表</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 产品特点 */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">产品特点</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {product.features.map((feature, index) => {
              const IconComponent = iconMap[feature.icon];
              return (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    {IconComponent && <IconComponent size={48} className="shrink-0 text-primary mx-auto mb-4" />}
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 产地优势 */}
      <section className="py-16">
        <div className="max-w-container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">产地优势</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {product.category === 'peach' ? (
              <>
                <div className="relative h-64 overflow-hidden rounded-xl order-2 md:order-1">
                  <Image
                    src="/images/about/all.jpg"
                    alt="基地"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="order-1 md:order-2">
                  {product.advantages.map((paragraph, index) => (
                    <p key={index} className="text-muted-foreground mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </>
            ) : (
              <>
                <div>
                  {product.advantages.map((paragraph, index) => (
                    <p key={index} className="text-muted-foreground mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div className="relative h-64 overflow-hidden rounded-xl">
                  <Image
                    src="/images/about/all.jpg"
                    alt="基地"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
