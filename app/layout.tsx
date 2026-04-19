import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DottedSurface } from "@/components/dotted-surface";
import { cn } from "@/lib/utils";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "meraipu — Your IPU. Simplified.",
  description: "GGSIPU syllabus information, practical files, and PYQs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="font-sans">
      <body className={`${syne.variable} ${dmSans.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <DottedSurface className="fixed inset-0 -z-10" />
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-76MEWXKNTD"
          strategy="afterInteractive"
        />
        <Script id="ga-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-76MEWXKNTD');
          `}
        </Script>
      </body>
    </html>
  );
}
