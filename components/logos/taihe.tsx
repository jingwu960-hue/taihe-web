export default function TaiheLogo({
  className,
  size = 32,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 背景 - 自然绿 */}
      <circle cx="50" cy="50" r="48" fill="oklch(49.4% 0.164 139.8)" />
      {/* 叶子/稻穗图案 */}
      <path
        d="M50 20C50 20 35 40 35 55C35 70 42 78 50 80C58 78 65 70 65 55C65 40 50 20 50 20Z"
        fill="white"
      />
      {/* 中间的叶子脉络 */}
      <path
        d="M50 30L50 70"
        stroke="oklch(49.4% 0.164 139.8)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* 左侧小叶子 */}
      <path
        d="M50 45C50 45 42 48 40 55"
        stroke="oklch(49.4% 0.164 139.8)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      {/* 右侧小叶子 */}
      <path
        d="M50 55C50 55 58 52 60 45"
        stroke="oklch(49.4% 0.164 139.8)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      {/* 顶部的稻穗装饰 - 丰收橙 */}
      <circle cx="50" cy="22" r="4" fill="oklch(78.1% 0.153 60.3)" />
    </svg>
  );
}
