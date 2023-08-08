'use client';

import React, { useEffect } from 'react';
import { useUserStore } from '@/domain/users/user.store';
import { useEngineStore } from '@/domain/engines/engine.store';
import { ListPageHeader } from '@/components/ListPageHeader/ListPageHeader';
import { IEngine } from '@/domain/engines/engines.types';

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
      <ul>
        {engines.map((engine: IEngine) => (
          <li
            key={engine.id}
            className={'flex gap-2'}
          >
            <div>{engine.fuelEfficiency}</div>
            <div>{engine.id}</div>
            <div>{engine.power}</div>
            <div>{engine.status}</div>
            <div>{engine.type}</div>
          </li>
        ))}
      </ul>
    </main>
  );
}
