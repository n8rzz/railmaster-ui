'use client';

import React, { useEffect } from 'react';
import { useUserStore } from '@/domain/users/user.store';
import { useEngineStore } from '@/domain/engines/engine.store';

export default function Engines() {
  const { access_token, permissions, user, getUser } = useUserStore();
  const { engines, getEngines } = useEngineStore();

  useEffect(() => {
    void getUser();
    void getEngines();
  }, [getUser, getEngines]);

  return (
    <main>
      ENGINES - {engines.length}
      <div>{JSON.stringify(engines)}</div>
    </main>
  );
}
