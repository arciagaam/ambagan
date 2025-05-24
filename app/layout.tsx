import type { Metadata } from "next";
import "./globals.css";
import QueryClientContainer from "../components/QueryClientProvider";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Red_Hat_Display } from 'next/font/google'
import { Toaster } from 'react-hot-toast';

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
    <QueryClientContainer>
      <html lang="en">
        <body className={`${redHatDisplay.className} ${redHatDisplay.variable} antialiased font-red-hat-display`}>
          <main>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
            <Toaster />
          </main>
        </body>
      </html>
    </QueryClientContainer>
  );
}
