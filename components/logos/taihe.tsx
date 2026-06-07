import Image from "next/image";

// 公司Logo组件 - 替换 src="/icon.png" 为您的实际logo图片路径
export default function CompanyLogo({
  className,
  size = 32,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <Image
      src="/icon.png"
      alt="公司Logo"
      width={size}
      height={size}
      className={className}
    />
  );
}
