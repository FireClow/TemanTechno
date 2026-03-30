import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { MetaPixelPageViewTracker } from "@/components/providers/meta-pixel-pageview-tracker";
import { SiteNavbar } from "@/components/organisms/site-navbar";
import { SiteFooter } from "@/components/organisms/site-footer";
import { ScrollProgress } from "@/components/atoms/scroll-progress";

export const metadata: Metadata = {
  metadataBase: new URL("https://temantechno.vercel.app"),
  title: {
    default: "Teman Techno | Smart Living Essentials",
    template: "%s | Teman Techno",
  },
  description:
    "Teman Techno menghadirkan perangkat smart living premium untuk rumah yang lebih nyaman, rapi, dan efisien.",
  openGraph: {
    title: "Teman Techno | Smart Living Essentials",
    description:
      "Brand modern tech lifestyle untuk solusi smart living premium dan praktis.",
    url: "https://temantechno.vercel.app",
    siteName: "Teman Techno",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Teman Techno | Smart Living Essentials",
    description:
      "Rangkaian produk smart living minimalis untuk gaya hidup modern.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className="min-h-screen text-foreground">
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1417044546248444');
fbq('track', 'PageView');`}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1417044546248444&ev=PageView&noscript=1"
          />
        </noscript>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <MetaPixelPageViewTracker />
          <ScrollProgress />
          <SiteNavbar />
          <main className="pb-16">{children}</main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
