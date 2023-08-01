'use client';

import React from 'react';
import { useLogin } from '@/hooks/auth/login';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { Route } from '@/route.constants';

interface IFormProps {
  email: string;
  password: string;
}

export default function LoginPage() {
  const { handleSubmit, register } = useForm<IFormProps>();
  const router = useRouter();
  const { login } = useLogin();

  const onSubmit = handleSubmit(async (form: IFormProps) => {
    const { password, email } = form;

    let nextRoute = Route.Profile;
    const user = await login(email, password);

    if (!user) {
      nextRoute = Route.Login;
    }

    return router.push(nextRoute);
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
