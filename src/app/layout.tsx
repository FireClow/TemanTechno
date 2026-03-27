import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SiteNavbar } from "@/components/organisms/site-navbar";
import { SiteFooter } from "@/components/organisms/site-footer";
import { ScrollProgress } from "@/components/atoms/scroll-progress";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

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
    <html lang="id" className={`${inter.variable}`} suppressHydrationWarning>
      <body className="min-h-screen text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ScrollProgress />
          <SiteNavbar />
          <main className="pb-16">{children}</main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
