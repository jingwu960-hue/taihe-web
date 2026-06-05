// 站点配置类型定义
export interface SiteConfig {
  name: string;
  url: string;
  ogImage: string;
  description: string;
  version: string;
  contact: {
    address: string;
    phone: string;
    email: string;
    wechat: string;
  };
  stats: {
    plantingArea: number;
    annualOutput: number;
    partnerCount: number;
    years: number;
  };
}

export interface NavbarLink {
  text: string;
  href: string;
}
