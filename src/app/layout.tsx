import './globals.css';
import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { TopNavigation } from '@/components/Navigation/TopNavigation';

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
        <div className={'flex align-center'}>
          <div className={'pr-2'}>
            LEFT NAV
            <ul>
              <li>Engines</li>
              <li>Railcars</li>
              <li>Trains</li>
            </ul>
          </div>
          <div>{props.children}</div>
        </div>
      </body>
    </html>
  );
}
