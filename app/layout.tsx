import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";

const bebasNeue = localFont({
  src: [
    { path: '/fonts/bebasNeue-Regular.ttf', weight: '400', style: 'normal' },
  ],
  variable: "--bebas-neue",
});

export const metadata: Metadata = {
  title: "Movie List",
  description: "List of watched movies and series.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
