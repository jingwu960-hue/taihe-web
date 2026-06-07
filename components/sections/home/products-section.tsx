import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ProductItem {
  name: string;
  description: string;
  image: string;
  href?: string;
}

interface ProductsSectionProps {
  data: ProductItem[];
}

export default function ProductsSection({ data }: ProductsSectionProps) {
  if (!data || data.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">核心产品</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">精选优质水果，为您带来大自然的美味馈赠</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((product, index) => (
            <Link key={index} href={product.href || `/products/${index}`}>
              <Card 
                className="h-full overflow-hidden transition-all duration-200 hover:shadow-xl"
                hoverable
              >
                <div className="h-64 bg-gradient-to-br from-primary/20 to-brand-foreground/20 relative overflow-hidden">
                  <Image
                    alt={product.name}
                    src={product.image}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-200 opacity-0 group-hover:opacity-100">
                    <span className="text-white font-medium flex items-center gap-1">
                      查看详情
                      <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2 transition-colors duration-200 group-hover:text-primary">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {product.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button asChild className="group">
            <Link href="/products" className="flex items-center gap-2">
              查看全部产品
              <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
