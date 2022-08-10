import 'normalize.css';
import Head from 'next/head';
import React from 'react';
import styles from '../styles/Home.module.scss';
import Header from '../src/components/header/index';
import SideBar from '../src/components/sidebar';
import Gallery from '../src/components/gallery';
import NewRelease from '../src/components/new-release';
import PlayList from '../src/components/playlist';
import FavoriteArtist from '../src/components/favorite-artist';
import Chart from '../src/components/chart';
import Card from '../src/components/card';
import Carousel from '../src/components/carousel';
import NewReleaseSlider from '../src/components/new-release-slider';
import PlaylistSlider from '../src/components/playlist-slider';
import RadioCarousel from '../src/components/radio-carousel';
import Event from '../src/components/event';
import Partner from '../src/components/partner';

const Home = () => (
  <div className={styles.container}>
    <Head>
      <title>Zing Mp3</title>
      <meta name="description" content="Zing Mp3" />
      <link
        rel="icon"
        href="https://static-zmp3.zmdcdn.me/skins/zmp3-v5.2/images/icon_zing_mp3_60.png"
      />
    </Head>
    <main className={styles['home-main']}>
      <SideBar />
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

export default Home;
