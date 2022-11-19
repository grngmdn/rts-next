import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home App</title>
      </Head>
      <section className='h-[73vh]'>
        <h1>Homepage</h1>
      </section>
    </>
  );
}
