import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { IconSprite } from "@/components/ui/icons";
import "./globals.css";
import "./home-sections.css";
import "./motion-safety.css";

export const metadata: Metadata = {
  title: "iQSetters — Products for Real Estate Teams",
  description:
    "Explore iQSetters products for real estate sales, post-sales operations, workforce management and WhatsApp communication.",
  icons: { icon: [{ url: "/assets/iq-mark.svg", type: "image/svg+xml" }] },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/assets/brand-logo.webp" as="image" type="image/webp" />
      </head>
      <body>
        <IconSprite />
        <SmoothScroll>
          <SiteHeader />
          {children}
          <SiteFooter />
        </SmoothScroll>
      </body>
    </html>
  );
}
