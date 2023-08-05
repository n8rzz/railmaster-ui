import React from 'react';
import Link from 'next/link';
import { Route } from '@/route.constants';

export function SideNavigation() {
  return (
    <div className={'flex align-center'}>
      <div>
        LEFT NAV
        <ul>
          <li>
            <Link href={Route.Railcars}>Railcars</Link>
          </li>
          <li>
            <Link href={Route.Engines}>Engines</Link>
          </li>
          <li>
            <Link href={Route.Trains}>Trains</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
