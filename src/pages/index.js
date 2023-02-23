// libs
import React from "react";
import "normalize.css";
// Head
import Head from "next/head";
// photos
import iconZing from "public/icons/icon-zing.png";
// redux
import { useSelector } from "react-redux";
// component
import HomeMain from "src/views/HomeMain";

const Home = () => {
  const title = useSelector((state) => state.locale.translate.head.title);
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Zing Mp3" />
        <link rel="icon" href={iconZing.src} />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="zing, zingmp3, mp3" />
        <link rel="author" href="https://www.buithanhnhan.xyz" />
        <link rel="canonical" href="https://www.buithanhnhan.xyz" />
        <meta property="og:url" content="https://zingmp3-gold.vercel.app/en" />
        <meta property="og:image" href={iconZing.src} />
        <meta
          property="og:description"
          content="Zing mp3, nghe nhac, tai nhac "
        />
        <meta property="og:title" content="Zing mp3" />
        <meta property="og:site_name" content="Zing mp3" />
        <meta property="og:see_also" content="https://www.buithanhnhan.xyz" />
        <meta name="twitter:card" content="Zing mp3" />
        <meta name="twitter:url" content="https://zingmp3-gold.vercel.app/en" />
        <meta name="twitter:title" content="Zing mp3" />
        <meta name="twitter:description" content="Zing mp3" />
        <meta name="twitter:image" href={iconZing.src} />
      </Head>
      <HomeMain />
    </div>
  );
};

export default React.memo(Home);
