// 首页数据配置 - 类型已移至 types/ 目录
import type {
  AdvantageItem,
  BannerItem,
  BusinessItem,
  CaseItem,
  NewsItem,
} from '@/types';

export const DEFAULT_PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='600' viewBox='0 0 1200 600'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%232E7D32;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23FF9800;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='600' fill='url(%23g)'/%3E%3Ctext x='600' y='300' font-family='Arial' font-size='40' fill='white' text-anchor='middle' dy='.3em'%3EXX农业%3C/text%3E%3C/svg%3E";

export const bannerData: BannerItem[] = [
  {
    title: "源头种植，品质可控",
    description: "XX农业专注果树规模化种植，为您提供新鲜优质的水果",
    image: "/images/banners/banner-1.jpg",
  },
  {
    title: "稳定供货，诚信经营",
    description: "拥有自主种植基地，全年稳定供应，满足不同客户需求",
    image: "/images/banners/banner-2.jpg",
  },
  {
    title: "科学种植，绿色健康",
    description: "采用先进种植技术，严格把控品质，让您吃得放心",
    image: "/images/banners/banner-3.jpg",
  },
  {
    title: "生态果园，自然生长",
    description: "遵循自然规律，采用有机种植方式，守护自然生态环境",
    image: "/images/banners/banner-4.jpg",
  },
  {
    title: "优质产品，客户信赖",
    description: "多年积累良好口碑，产品深受广大客户喜爱和信任",
    image: "/images/banners/banner-5.jpg",
  },
];

// 业务数据 - 可根据实际业务类型修改
export const businessData: BusinessItem[] = [
  { icon: "🌳", title: "桃树种植", description: "金冠黄桃、红九三红桃等其它品种桃树种植" },
  { icon: "🍐", title: "梨树种植", description: "苏翠一号梨、新玉梨等其它品种梨树种植" },
  { icon: "📦", title: "水果销售", description: "批发、商超、政企采购，家庭采摘等多渠道服务" },
];

// 产品数据 - 以下为示例，可根据实际产品替换
export const productsData = [
  { name: "苏翠一号梨", description: "果肉细腻，汁多味甜，品质上乘", image: "/images/products/product-1.jpg" },
  { name: "金冠黄桃", description: "果香浓郁，酸甜适口，营养丰富", image: "/images/products/product-2.jpg" },
  { name: "新玉梨", description: "果皮细薄，果肉脆嫩，品质优良", image: "/images/products/product-3.jpg" },
  { name: "红九三红桃", description: "果形美观，色泽艳丽，香甜多汁", image: "/images/products/product-4.jpg" },
];

export const advantagesData: AdvantageItem[] = [
  { icon: "✅", title: "品质保证", description: "从种植到采摘层层筛选，严格把控" },
  { icon: "🚚", title: "新鲜直达", description: "采摘后24小时内发货，锁鲜保鲜" },
  { icon: "🏆", title: "专业团队", description: "50年农业种植经验，技术过硬" },
  { icon: "🤝", title: "合作共赢", description: "灵活的合作模式，与您携手共进" },
];

export const casesData: CaseItem[] = [
  { name: "某大型商超", type: "商超合作", description: "连续3年稳定供应，品质获客户高度认可" },
  { name: "某农产品批发商", type: "批发合作", description: "年采购量超100吨，建立长期合作关系" },
  { name: "某政府机关", type: "政企采购", description: "指定农产品供应商，服务保障到位" },
];

export const newsData: NewsItem[] = [
  { title: "2026年完成关键升级 打造观景平台与露营基地", date: "2026-06-06", summary: "2026年，园区完成关键升级，重点打造两大核心项目：观景平台依托山地制高点布局，可全景俯瞰梯田果园；露营基地融入自然生态环境，满足城市客群对\"轻度假、慢生活\"的多元需求。" },
  { title: "累计投资近4000万元 园区初具规模", date: "2026-05-20", summary: "截至2026年，XX生态园田园综合体项目累计投资近4000万元，园区基础设施与产业体系已初具规模，正处于由\"传统农业园区\"向\"农文旅融合示范区\"转型升级的关键阶段。" },
  { title: "累计带动3000余户农户增收致富", date: "2026-04-15", summary: "公司坚持产业发展与社会责任协同推进，累计带动周边3000余户农户参与产业发展，提供就业岗位300余个，促进农民年均增收约2.5万元，助力乡村振兴与区域经济发展。" },
];
