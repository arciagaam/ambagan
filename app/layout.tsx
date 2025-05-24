import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import QueryClientContainer from "./_components/QueryClientProvider";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

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
      <QueryClientContainer>
        <html lang="en">
          <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
            <main>
              {children}
              <ReactQueryDevtools initialIsOpen={false} />
            </main>
          </body>
        </html>
      </QueryClientContainer>
  );
}
