import 'normalize.css';
import Head from 'next/head';
import React from 'react';
import iconZing from 'public/icons/icon-zing.png';
import useTrans from '../hooks/useStrans';

const Home = () => {
  const trans = useTrans();
  return (
    <div>
      <Head>
        <title>{trans.head.title} </title>
        <meta name="description" content="Zing Mp3" />
        <link rel="icon" href={iconZing.src} />
      </Head>
    </div>
  );
};

export default Home;
