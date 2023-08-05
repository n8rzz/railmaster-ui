'use client';

import React, { useEffect } from 'react';
import { useUserStore } from '@/hooks/users/userStore';

export default function ProfilePage() {
  const { access_token, permissions, user, getUser } = useUserStore();

  useEffect(() => {
    void getUser();
  }, [getUser]);

  return (
    <div>
      <h2>[PROTECTED] Profile Page</h2>
      <div>
        <b>Token:</b>
        {access_token}
      </div>

      <br />

      <div>
        <b>Permissions:</b>
        {JSON.stringify(permissions)}
      </div>

      <br />

      <div>
        <b>Id: </b>
        {user?.id || 'ID'}
      </div>
      <div>
        <b>Profile:</b>
        {user?.email || 'EMAIL'}
      </div>
    </div>
  );
}
