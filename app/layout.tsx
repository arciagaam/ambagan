import type { Metadata } from "next";
import "./globals.css";
import { Red_Hat_Display } from 'next/font/google'

const redHatDisplay = Red_Hat_Display({
  subsets: ['latin'],
  variable: '--font-red-hat-display',
  style: ['normal', 'italic'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

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
    <html lang="en">
      <body className={`${redHatDisplay.className} ${redHatDisplay.variable} antialiased font-red-hat-display text-base`}>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
