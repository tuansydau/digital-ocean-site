import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import "@/public/styles/cabinet-grotesk.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tuan Dau | Portfolio",
  description: "Tuan Dau's software portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="text-[cabinet-grotesk]">{children}</body>
    </html>
  );
}
