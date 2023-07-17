import './globals.css';
import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { Route } from '@/route.constants';

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
        <nav className={'nav'}>
          <h1 className={'nav-hd'}>
            <Link href={Route.Home}>Railmaster</Link>
          </h1>
          <ul className={'nav-links'}>
            <li>
              <Link href={Route.About}>About</Link>
            </li>
            <li>
              <Link href={Route.Login}>Login</Link>
            </li>
            <li>
              <Link href={Route.Profile}>Profile</Link>
            </li>
          </ul>
        </nav>
        {props.children}
      </body>
    </html>
  );
}
