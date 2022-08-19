// libs
import "normalize.css";
// Head
import Head from "next/head";
import React from "react";
import iconZing from "public/icons/icon-zing.png";
// multiple languages
import HomeMain from "src/views/HomeMain";
import useTranslate from "../hooks/useStranslate";
// home main

const Home = () => {
  const translate = useTranslate();

  return (
    <div>
      <Head>
        <title>{translate.head.title} </title>
        <meta name="description" content="Zing Mp3" />
        <link rel="icon" href={iconZing.src} />
      </Head>
      <HomeMain />
    </div>
  );
};

export default Home;
