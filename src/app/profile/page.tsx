'use client';

import React, { useEffect } from 'react';
import { useCurrentUser } from '@/hooks/auth/current-user';
import { useUserStore } from '@/hooks/users/userStore';

export default function ProfilePage() {
  const { user } = useCurrentUser();
  const { user: userProfile, getUser } = useUserStore();

  useEffect(() => {
    void getUser();
  }, [getUser]);

  return (
    <div>
      <h2>[PROTECTED] Profile Page</h2>
      <div>
        <b>Token:</b>
        {user?.access_token}
      </div>

      <br />

      <div>
        <b>Permissions:</b>
        {user?.permissions}
      </div>

      <br />

      <div>
        <b>Id: </b>
        {userProfile?.sub || 'SUB'}
      </div>
      <div>
        <b>Profile:</b>
        {userProfile?.email || 'EMAIL'}
      </div>
    </div>
  );
}
