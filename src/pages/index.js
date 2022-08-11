import 'normalize.css';
import Head from 'next/head';
import React from 'react';
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.scss';
import Header from '../components/header/index';
import SideBar from '../components/sidebar';
import Gallery from '../components/gallery';
import NewRelease from '../components/new-release';
import PlayList from '../components/playlist';
import FavoriteArtist from '../components/favorite-artist';
import Chart from '../components/chart';
import Card from '../components/card';
import Carousel from '../components/carousel';
import NewReleaseSlider from '../components/new-release-slider';
import PlaylistSlider from '../components/playlist-slider';
import RadioCarousel from '../components/radio-carousel';
import Event from '../components/event';
import Partner from '../components/partner';
import useTrans from '../hooks/useStrans';

const Home = () => {
  const router = useRouter();
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
      <main className={styles['home-main']}>
        <SideBar trans={trans}/>
        <div>
          <Header />
          <Gallery />
          <NewRelease />
          <PlayList />
          <FavoriteArtist />
          <PlayList />
          <Chart />
          <Card />
          <Carousel />
          <PlayList />
          <NewReleaseSlider />
          <PlaylistSlider />
          <PlayList />
          <RadioCarousel />
          <Event />
          <Partner />
        </div>
      </main>
    </div>
  );
};

export default Home;
