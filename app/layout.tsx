import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SessionWrapper from "@/components/SessionWrapper";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ambagan!",
  description: "Bill splitting application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrapper>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <main className="flex h-screen mx-12 lg:mx-32 xl:mx-96">
          {children}
          </main>
      </body>
      </html>
    </SessionWrapper>
  );
}
