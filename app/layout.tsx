import "@/app/globals.css";

import type { Metadata } from "next";

import { siteConfig } from "../config/site";
import { inter } from "@/lib/fonts";
import { AppProviders } from "@/providers";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    "XX农业",
    "水果种植",
    "桃树种植",
    "梨树种植",
    "[地区]农业",
    "绿色食品",
  ],
  authors: [
    {
      name: "XX农业",
      url: siteConfig.url,
    },
  ],
  creator: "XX农业",
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={`${inter.variable} bg-background font-sans antialiased`}>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
