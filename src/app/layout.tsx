import './globals.css';
import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navigation } from '@/components/Navigation/Navigation';

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
        <Navigation />
        {props.children}
      </body>
    </html>
  );
}
