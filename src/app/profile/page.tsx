'use client';

import React from 'react';
import { useCurrentUser } from '@/hooks/auth/current-user';

export default function ProfilePage() {
  const { user } = useCurrentUser();

  return (
    <div>
      [PROTECTED] Profile Page
      <br />
      <br />
      {user?.access_token}
    </div>
  );
}
