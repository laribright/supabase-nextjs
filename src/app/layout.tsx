import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '@/styles/globals.css';
import Navbar from '@/components/Navbar';
import ModalProvider from '@/providers/ModalProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Complete auth',
  description: 'codewithlari',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <main>
          <ModalProvider>
            <Navbar />
            {children}
          </ModalProvider>
        </main>
      </body>
    </html>
  );
}
