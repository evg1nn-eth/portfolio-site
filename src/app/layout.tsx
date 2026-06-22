import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const abcMarist = localFont({
  src: "./fonts/ABCMaristVariable-Trial.ttf",
  variable: "--font-abc-marist",
});

export const metadata: Metadata = {
  title: "Evgeny — Designer",
  description: "Portfolio of Evgeny, UI/UX Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={abcMarist.variable}>
      <body className="font-[family-name:var(--font-abc-marist)] font-[350]">
        {children}
      </body>
    </html>
  );
}
