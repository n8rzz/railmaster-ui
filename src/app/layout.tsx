import './globals.css';
import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { TopNavigation } from '@/components/Navigation/TopNavigation';
import { SideNavigation } from '@/components/Navigation/SideNavigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Railmaster',
  description: 'Trains n stuff',
};

interface IProps {
  children: React.ReactNode;
}

export default function RootLayout(props: IProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopNavigation />
        <div className={'flex align-top gap-2 '}>
          <SideNavigation />
          <div>{props.children}</div>
        </div>
      </body>
    </html>
  );
}
