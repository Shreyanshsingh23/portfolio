import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shreyansh Singh Gautam | Software Engineer & Competitive Programmer",
  description: "SWE Intern @Maximem AI | Expert on Codeforces | BITS Pilani CS Student",
  keywords: ["software engineer", "competitive programmer", "AI/ML", "Python", "Go", "LangGraph"],
  authors: [{ name: "Shreyansh Singh Gautam" }],
  openGraph: {
    title: "Shreyansh Singh Gautam | Software Engineer & Competitive Programmer",
    description: "SWE Intern @Maximem AI | Expert on Codeforces | BITS Pilani CS Student",
    url: "https://shreyanshsingh.dev",
    siteName: "Shreyansh Singh Gautam Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shreyansh Singh Gautam | Software Engineer & Competitive Programmer",
    description: "SWE Intern @Maximem AI | Expert on Codeforces | BITS Pilani CS Student",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

