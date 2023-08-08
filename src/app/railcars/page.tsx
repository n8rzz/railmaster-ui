'use client';

import React, { useEffect } from 'react';
import { useUserStore } from '@/domain/users/user.store';
import { useRailcarStore } from '@/domain/railcars/railcar.store';
import { ListPageHeader } from '@/components/ListPageHeader/ListPageHeader';
import { IRailcar } from '@/domain/railcars/railcar.types';

export default function Railcars() {
  const { access_token, permissions, user, getUser } = useUserStore();
  const { railcars, getRailcars } = useRailcarStore();

  useEffect(() => {
    void getUser();
    void getRailcars();
  }, [getUser, getRailcars]);

  return (
    <main>
      <ListPageHeader
        caption={railcars.length.toString()}
        title={'Railcars'}
      />
      <ul>
        {railcars.map((railcar: IRailcar) => (
          <li
            key={railcar.id}
            className={'flex gap-2'}
          >
            <div>{railcar.id}</div>
            <div>{railcar.capacity_value}</div>
            <div>{railcar.capacity_unit}</div>
          </li>
        ))}
      </ul>
    </main>
  );
}
