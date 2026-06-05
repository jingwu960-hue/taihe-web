import Image from "next/image";

export default function TaiheLogo({

  className,
  size = 32,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <Image
      src="/icon.png"
      alt="态禾农业Logo"
      width={size}
      height={size}
      className={className}
    />
  );
}