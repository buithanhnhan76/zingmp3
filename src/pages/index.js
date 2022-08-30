// libs
import "normalize.css";
// Head
import Head from "next/head";
import React from "react";
import iconZing from "public/icons/icon-zing.png";
// multiple languages
import MainLayout from "src/layouts/MainLayout";
// redux
import { updateLocale } from "src/redux/actions/authenticationAction";
import { useDispatch } from "react-redux";
import HomeMain from "src/views/Home";
import useTranslate from "../hooks/useStranslate";

const Home = () => {
  const translate = useTranslate();
  const dispatch = useDispatch();
  dispatch(updateLocale({ translate }));

  return (
    <div>
      <Head>
        <title>{translate.head.title} </title>
        <meta name="description" content="Zing Mp3" />
        <link rel="icon" href={iconZing.src} />
      </Head>
      <MainLayout>
        <HomeMain />
      </MainLayout>
    </div>
  );
};

export default Home;
