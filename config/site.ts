export const siteConfig = {
  name: "XX农业公司",
  url: "https://your-company.com",
  ogImage: "https://your-company.com/og.jpg",
  description:
    "XX农业公司专业从事果树规模化种植及鲜果销售，拥有自主种植基地与稳定供应链。",
  version: "v1.0",
  contact: {
    address: "[公司地址]",
    phone: "[联系电话]",
    email: "contact@your-company.com",
    wechat: "[微信号]",
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
