export const siteConfig = {
  name: "湖北态禾农业股份有限公司",
  url: "https://your-company.com",
  ogImage: "https://your-company.com/og.jpg",
  description:
    "湖北态禾农业股份有限公司专业从事果树规模化种植及鲜果销售，拥有自主种植基地与稳定供应链。",
  version: "v1.0",
  contact: {
    address: "湖北省大悟县城关镇中心村",
    phone: "13339842020",
    email: "contact@your-company.com",
    wechat: "junyizy00",
  },
  // ⬇️ 以下统计数据可根据实际情况自定义修改
  stats: {
    plantingArea: "1200",
    annualOutput: "300",
    partnerCount: "100",
    years: "8",
  },
};

export type SiteConfig = typeof siteConfig;
