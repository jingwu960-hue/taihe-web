// 产品详情数据配置
import type { ProductDetail } from '@/types';

export const productDetails: Record<string, ProductDetail> = {
  pear: {
    id: 'pear',
    category: 'pear',
    name: '梨系列',
    price: '¥15-18/斤',
    image: '/images/products/product-1.jpg',
    description: '态禾农业梨系列包括苏翠一号梨、新玉梨等品种，种植于生态环境优美的湖北基地。我们严格按照绿色食品标准进行种植管理，确保每一颗梨都品质优良。',
    specs: [
      { label: '上市时间', value: '每年7-9月' },
      { label: '年产量', value: '800吨' },
      { label: '产地', value: '湖北态禾农业种植基地' },
      { label: '储存条件', value: '常温5-7天，冷藏15-20天' },
    ],
    features: [
      { title: '果肉细腻', description: '口感细滑，无石细胞', icon: '✨' },
      { title: '汁多味甜', description: '含糖量高，甘甜可口', icon: '💧' },
      { title: '营养丰富', description: '富含多种维生素和矿物质', icon: '💪' },
      { title: '绿色种植', description: '严格按绿色食品标准种植', icon: '🌿' },
    ],
    advantages: [
      '态禾农业梨种植基地位于湖北省，这里气候温和，四季分明，光照充足，雨量充沛，为梨的生长提供了得天独厚的自然条件。',
      '基地土壤肥沃，透气性好，富含多种矿物质，有利于梨的生长和糖分积累。我们采用科学的种植技术，精准施肥，合理灌溉，确保梨的品质和产量。',
      '在采摘和储存环节，我们也严格把控每一个环节，确保每一颗送到客户手中的梨都是新鲜、优质的。',
    ],
  },
  peach: {
    id: 'peach',
    category: 'peach',
    name: '桃系列',
    price: '¥19-22/斤',
    image: '/images/products/product-2.jpg',
    description: '态禾农业桃系列包括金冠黄桃、胭脂红桃、红九三桃等品种，产自生态环境优越的湖北基地，我们选用优质品种，科学种植，严格管理，确保每一颗桃都品质优良，口感出众。',
    specs: [
      { label: '上市时间', value: '每年5-7月' },
      { label: '年产量', value: '700吨' },
      { label: '产地', value: '湖北态禾农业种植基地' },
      { label: '储存条件', value: '常温3-5天，冷藏7-10天' },
    ],
    features: [
      { title: '果肉饱满', description: '肉质紧实，口感醇厚', icon: '✨' },
      { title: '果香浓郁', description: '香气扑鼻，回味悠长', icon: '🌿' },
      { title: '营养丰富', description: '富含维生素C和胡萝卜素', icon: '💪' },
      { title: '酸甜适口', description: '糖度适中，口感丰富', icon: '😋' },
    ],
    advantages: [
      '湖北地区独特的地理和气候条件，为桃的生长提供了理想的环境。充足的光照、适宜的温度和肥沃的土壤，让我们的桃品质卓越。',
      '我们的桃种植基地远离工业污染，采用标准化种植管理，严格控制化肥和农药的使用，确保产品的安全性和品质。',
      '每一颗桃都在树上充分成熟后才采摘，确保糖分充足，口感最佳。我们拥有完善的冷链储存和运输体系，确保新鲜直达。',
    ],
  },
};

export const getProductDetail = (category: string): ProductDetail | undefined => {
  return productDetails[category];
};
