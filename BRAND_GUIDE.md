# 湖北态禾农业 - 品牌视觉指南

## 品牌标识

### 主色调
- **自然绿 (Primary)**: `#2E7D32` - 代表自然、健康、生机
- **丰收橙 (Accent)**: `#FF9800` - 代表丰收、活力、热情
- **乐桃粉 (Sweet)**: `#FF6B9E` - 代表温馨、甜美、亲切（参考百果园设计）

### 辅助色
- **大地棕 (Secondary)**: `#8D6E63` - 代表土地、稳定、可靠
- **浅灰 (Light)**: `#F5F5F5` - 用于背景和辅助元素
- **白色 (White)**: `#FFFFFF` - 用于卡片和内容区域

### 柔和渐变色
- **清新浅绿 (Soft Green)**: `#90EE90` - 用于背景装饰
- **柔和浅橙 (Soft Orange)**: `#FFD699` - 用于强调装饰
- **温馨浅粉 (Soft Pink)**: `#FFD1DC` - 用于温馨装饰

## 组件使用指南

### Button 组件
- **variant="default"**: 自然绿主按钮，用于主要行动
- **variant="brand"**: 丰收橙品牌按钮，用于突出行动
- **variant="sweet"**: 乐桃粉温馨按钮，用于温馨氛围
- **variant="outline"**: 描边自然绿按钮，用于次要行动
- **variant="outlineBrand"**: 描边丰收橙按钮，用于突出次要行动
- **variant="outlineSweet"**: 描边乐桃粉按钮，用于温馨点缀
- **variant="ghostSweet"**: 乐桃粉幽灵按钮，用于温馨区域
- **size="xl"**: 超大号按钮，用于重要场景

### Card 组件
- 启用 `hoverable` 属性来获得品牌化的悬停效果
- 包含边框变品牌色、轻微上浮、品牌阴影等效果

### 导航链接
- 激活状态使用自然绿文本 + 淡绿色背景
- 激活状态底部有小圆点标识
- 悬停状态切换为深色文本 + 淡灰色背景

### 页面头部
使用 `PageHeader` 组件获得一致的品牌化标题区域，包含：
- 渐变品牌背景
- 装饰性光晕效果
- 响应式布局

### 配色规则
```css
/* 主色 */
--primary: 自然绿
--brand: 自然绿

/* 强调色 */
--brand-foreground: 丰收橙
--brand-accent: 乐桃粉
--brand-secondary: 大地棕

/* 柔和色 */
--brand-soft-green: 清新浅绿
--brand-soft-orange: 柔和浅橙
--brand-soft-pink: 温馨浅粉

/* 渐变 */
--gradient-brand: 自然绿渐变
--gradient-warm: 丰收橙渐变
--gradient-sweet: 乐桃粉渐变
--gradient-harvest: 丰收渐变色

/* 阴影 */
--shadow-brand: 自然绿阴影
--shadow-warm: 丰收橙阴影
--shadow-soft: 乐桃粉阴影
```

## 交互效果
- 按钮悬停: 轻微放大 + 颜色加深 + 阴影增强
- 卡片悬停: 轻微上浮 + 边框变品牌色 + 品牌阴影
- 导航链接: 平滑过渡 + 激活状态标识
- 圆角: 0.75rem 圆角，更显亲切

## 响应式设计
- 默认适配移动端优先
- 使用 Tailwind 响应式断点
- 保持品牌色在所有尺寸的一致性

## 设计理念（参考百果园）
- 清新自然的绿色为主色调
- 温暖的橙粉色点缀增加亲切感
- 温暖的阴影增加层次感
- 柔和的圆角增加亲和力
- 丰收的主题贯穿品牌精神
