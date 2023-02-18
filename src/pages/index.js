// libs
import "normalize.css";
import React from "react";
// Head
import Head from "next/head";
// photos
import iconZing from "public/icons/icon-zing.png";
// redux
import { useSelector } from "react-redux";
// component
import HomeMain from "src/views/HomeMain";

const Home = () => {
  const { title } = useSelector((state) => state.locale.translate.head);
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Zing Mp3" />
        <link rel="icon" href={iconZing.src} />
      </Head>
      <HomeMain />
    </div>
  );
};

export default Home;
