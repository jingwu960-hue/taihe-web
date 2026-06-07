// 产品类型定义
export interface ProductItem {
  id: number;
  name: string;
  slug: string;
  category: string;
  description: string;
  price: string;
  isSeason?: boolean;
  image: string;
  images?: string[];
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductFeature {
  title: string;
  description: string;
  icon: string;
}

export interface ProductDetail {
  id: string;
  slug: string;
  category: string;
  name: string;
  price: string;
  image: string;
  images?: string[];
  description: string;
  specs: ProductSpec[];
  features: ProductFeature[];
  advantages: string[];
  advantageImage?: string;
}
