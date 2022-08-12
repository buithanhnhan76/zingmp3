import "normalize.css";
import Head from "next/head";
import React from "react";
import styles from "../../styles/App.module.scss";
import useTrans from "../hooks/useStrans";
import LayOut from "../components/layout";
import Home from "../components/home";

const App = () => {
  const trans = useTrans();
  return (
    <div className={styles.container}>
      <Head>
        <title>{trans.head.title} </title>
        <meta name="description" content="Zing Mp3" />
        <link
          rel="icon"
          href="https://static-zmp3.zmdcdn.me/skins/zmp3-v5.2/images/icon_zing_mp3_60.png"
        />
      </Head>
      <LayOut trans={trans}>
        <Home />
      </LayOut>
    </div>
  );
};

export default App;
