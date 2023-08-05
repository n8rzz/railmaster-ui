'use client';

import React, { useEffect } from 'react';
import { useUserStore } from '@/domain/users/user.store';
import { useEngineStore } from '@/domain/engines/engine.store';
import { ListPageHeader } from '@/components/ListPageHeader/ListPageHeader';

export default function Engines() {
  const { access_token, permissions, user, getUser } = useUserStore();
  const { engines, getEngines } = useEngineStore();

  useEffect(() => {
    void getUser();
    void getEngines();
  }, [getUser, getEngines]);

  return (
    <main>
      <ListPageHeader
        caption={engines.length.toString()}
        title={'Engines'}
      />
      <div>{JSON.stringify(engines)}</div>
    </main>
  );
}
