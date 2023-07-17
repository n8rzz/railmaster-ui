'use client';

import React from 'react';

export default function LoginPage() {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    console.log('onSubmit', event.nativeEvent);
  };

  return (
    <div>
      Login Page
      <form
        autoComplete={'off'}
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="username">
            <div>Username</div>
            <input
              type={'text'}
              name={'username'}
              id={'username'}
              placeholder={'Username'}
            />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            <div>Password</div>
            <input
              type={'password'}
              name={'password'}
              id={'password'}
              placeholder={'Password'}
            />
          </label>
        </div>
        <button type={'submit'}>Login</button>
      </form>
    </div>
  );
}
