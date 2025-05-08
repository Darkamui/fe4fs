import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { TailwindIndicator } from '@/components/tailwind-indicator';
import { Toaster } from '@/components/ui/sonner';
import { Sidenav } from '@/components/sidenav';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('font-sans', inter.variable)}>
        <div className="flex h-screen">
          <div className="">
            <Sidenav />
          </div>
          <main className="relative flex flex-col flex-1 lg:overflow-y-auto lg:overflow-x-hidden">
            {children}
          </main>
          <Toaster />
          <TailwindIndicator />
        </div>
      </body>
    </html>
  );
}
