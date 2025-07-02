import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "사이트 A",
  description: "스프링부트, Next.js 연동",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
           <header>
          <nav className="flex">
            <a href="/" className="p-2 rounded hover:bg-gray-100">
              메인
            </a>
            <a href="/posts" className="p-2 rounded hover:bg-gray-100">
              글 목록
            </a>
          </nav>
        </header>
        <main>{children}</main>
        <footer>푸터</footer>
      
      </body>
    </html>
  );
}
