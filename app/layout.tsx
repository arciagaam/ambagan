import type { Metadata } from "next";
import "./globals.css";
import { Red_Hat_Display } from 'next/font/google'
import { Toaster } from 'react-hot-toast';
import { createClient } from "@/utils/supabase/server";

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


export default async function RootLayout({
  children,
  home
}: Readonly<{
  children: React.ReactNode;
  landing: React.ReactNode;
  home: React.ReactNode;
}>) {
  const supabase = await createClient()
  const { data } = await supabase.auth.getUser();
  const { user } = data;

  return (
    <html lang="en">
      <body className={`${redHatDisplay.className} ${redHatDisplay.variable} antialiased font-red-hat-display tracking-tighter relative`}>
        <main>
          {user ? home : children}
          <Toaster />
        </main>
      </body>
    </html>
  );
}
