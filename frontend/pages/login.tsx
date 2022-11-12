import Head from 'next/head';
import React from 'react';
/**
 * Login Page of the Application
 * @return {JSX.Element}
 */
export default function Login(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Login Page</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className=''>
        <h1 className='text-9xl text-center font-bold pt-5'>Login Page</h1>
      </main>
    </div>
  );
}
