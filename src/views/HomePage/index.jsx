// libs
import React from "react";
// children
import Partner from "./mains/Partner";
import Event from "./mains/Event";
import ArtistCarousel from "./mains/ArtistCarousel";
import MediaCarousel from "./mains/MediaCarousel";
import XOneCorner from "./mains/XOneCorner";
import ChillPlaylist from "./mains/ChillPlaylist";
import NewSongEveryDay from "./mains/NewSongEveryDay";
import Top100 from "./mains/Top100";
import WeekChart from "./mains/WeekChart";
import FavoriteArtist from "./mains/FavoriteArtist";
import Chart from "./mains/Chart";
import NewRelease from "./mains/NewRelease";
import FeaturedRadio from "./mains/FeaturedRadio";
import NewSongCarousel from "./mains/NewSongCarousel";
// style
import styles from "./HomePage.module.scss";

const HomePage = () => (
  <main className={styles["home-main-container"]}>
    <MediaCarousel />
    <NewRelease />
    <ChillPlaylist />
    <FavoriteArtist />
    <NewSongEveryDay />
    <Chart />
    <WeekChart />
    <ArtistCarousel />
    <Top100 />
    <NewSongCarousel />
    <XOneCorner />
    <FeaturedRadio />
    <Event />
    <Partner />
  </main>
);

export default React.memo(HomePage);
