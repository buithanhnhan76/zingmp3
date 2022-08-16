import 'normalize.css';
import Head from 'next/head';
import React from 'react';
import useTrans from '../hooks/useStrans';

const App = () => {
  const trans = useTrans();
  return (
    <div>
      <Head>
        <title>{trans.head.title} </title>
        <meta name="description" content="Zing Mp3" />
        <link
          rel="icon"
          href="https://static-zmp3.zmdcdn.me/skins/zmp3-v5.2/images/icon_zing_mp3_60.png"
        />
      </Head>
    </div>
  );
};

export default App;
