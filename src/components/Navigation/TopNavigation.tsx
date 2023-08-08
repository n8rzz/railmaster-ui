'use client';

import React from 'react';
import Link from 'next/link';
import { Route } from '@/route.constants';
import { useLogout } from '@/hooks/auth/logout';
import { useRouter } from 'next/navigation';
import { useCurrentToken } from '@/hooks/auth/current-token';
import { UiIf } from '@/components/UiIf/ui-if';

interface IProps {}

export function TopNavigation(props: IProps) {
  const router = useRouter();
  const { isLoggedIn } = useCurrentToken();
  const { logout } = useLogout();

  const onClickLogout = async () => {
    await logout();
    router.push(Route.Home);
  };

  return (
    <nav className={'nav mb-6'}>
      <h1 className={'nav-hd'}>
        <Link href={Route.Home}>Railmaster</Link>
      </h1>
      <ul className={'nav-links'}>
        <li>
          <Link href={Route.About}>About</Link>
        </li>
        <li>
          <Link href={Route.Profile}>Profile</Link>
        </li>
        <UiIf condition={isLoggedIn()}>
          <li>
            <Link
              href={Route.Home}
              onClick={onClickLogout}
            >
              Logout
            </Link>
          </li>
        </UiIf>
        <UiIf condition={!isLoggedIn()}>
          <li>
            <Link href={Route.Login}>Login</Link>
          </li>
        </UiIf>
      </ul>
    </nav>
  );
}
