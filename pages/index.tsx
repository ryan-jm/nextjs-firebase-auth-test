import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useAuth } from '../contexts/AuthContext';
import styles from '../styles/Home.module.css';

export default function Home() {
  const { user, logout } = useAuth();

  const router = useRouter();

  useEffect(() => {
    if (!user?.accessToken) {
      router.push('/auth');
    }
  }, [router, user]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>You are successfully logged in!</h1>

        <p className={styles.description}>Your email is {user?.email}</p>
        <button onClick={() => logout()}>Logout</button>
      </main>
    </div>
  );
}
