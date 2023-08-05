'use client';

import React, { useEffect } from 'react';
import { useUserStore } from '@/domain/users/user.store';
import { useRailcarStore } from '@/domain/railcars/railcar.store';
import { ListPageHeader } from '@/components/ListPageHeader/ListPageHeader';

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
      <div>{JSON.stringify(railcars)}</div>
    </main>
  );
}
