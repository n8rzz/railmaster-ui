'use client';

import React, { useEffect } from 'react';
import { useUserStore } from '@/domain/users/user.store';

export default function ProfilePage() {
  const { access_token, permissions, user, getToken, getUser } = useUserStore();

  useEffect(() => {
    void getToken();
    void getUser();
  }, [getToken, getUser]);

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
