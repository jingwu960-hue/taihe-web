// 产品类型定义
export interface ProductItem {
  name: string;
  description: string;
  image: string;
  href: string;
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
  category: 'pear' | 'peach';
  name: string;
  price: string;
  image: string;
  description: string;
  specs: ProductSpec[];
  features: ProductFeature[];
  advantages: string[];
}
