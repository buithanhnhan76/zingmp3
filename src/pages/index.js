// libs
import "normalize.css";
// Head
import Head from "next/head";
import React from "react";
import iconZing from "public/icons/icon-zing.png";
// multiple languages
import useTranslate from "../hooks/useStranslate";

const Home = () => {
  const translate = useTranslate();

  return (
    <div>
      <Head>
        <title>{translate.head.title} </title>
        <meta name="description" content="Zing Mp3" />
        <link rel="icon" href={iconZing.src} />
      </Head>
    </div>
  );
};

export default Home;
