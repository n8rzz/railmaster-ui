'use client';

import React from 'react';
import { useLogin } from '@/hooks/auth/login';
import { useForm } from 'react-hook-form';

interface IFormProps {
  email: string;
  password: string;
}

export default function LoginPage() {
  const { handleSubmit, register } = useForm<IFormProps>();
  const { login } = useLogin();

  const onSubmit = handleSubmit(async (form: IFormProps) => {
    const { password, email } = form;

    await login(email, password);
  });

  return (
    <div>
      Login Page
      <form
        autoComplete={'off'}
        onSubmit={onSubmit}
      >
        <div>
          <label htmlFor="username">
            <div>Email</div>
            <input
              {...register('email')}
              type={'text'}
              placeholder={'email'}
            />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            <div>Password</div>
            <input
              {...register('password')}
              type={'password'}
              placeholder={'Password'}
            />
          </label>
        </div>
        <button type={'submit'}>Login</button>
      </form>
    </div>
  );
}
