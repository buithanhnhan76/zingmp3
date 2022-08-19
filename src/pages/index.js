// libs
import "normalize.css";
// Head
import Head from "next/head";
import React from "react";
import iconZing from "public/icons/icon-zing.png";
// multiple languages
import LayoutMain from "src/layouts/LayoutMain";
import useTranslate from "../hooks/useStranslate";
// layout main

const Home = () => {
  const translate = useTranslate();

  return (
    <div>
      <Head>
        <title>{translate.head.title} </title>
        <meta name="description" content="Zing Mp3" />
        <link rel="icon" href={iconZing.src} />
      </Head>
      <LayoutMain translate={translate} />
    </div>
  );
};

export default Home;
