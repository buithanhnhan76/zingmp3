// libs
import "normalize.css";
// Head
import Head from "next/head";
import React from "react";
import iconZing from "public/icons/icon-zing.png";
// multiple languages
import LayoutMain from "src/layouts/LayoutMain";
// redux
import { updateLocale } from "src/redux/actions/authenticationAction";
import { useDispatch } from "react-redux";
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
      <LayoutMain translate={translate} />
    </div>
  );
};

export default Home;
