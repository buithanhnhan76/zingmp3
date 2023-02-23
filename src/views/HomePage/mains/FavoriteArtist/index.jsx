// mocks
import { listArtists } from "src/mocks/FavoriteArtist";
// children
import FavoriteArtistTitle from "../../components/FavoriteArtistTitle";
import FavoriteArtistItems from "../../components/FavoriteArtistItems";
// styles
import styles from "./FavoriteArtist.module.scss";

const FavoriteArtist = () => (
  <section className={styles["favorite-artist"]}>
    <FavoriteArtistTitle />
    <FavoriteArtistItems listArtists={listArtists} />
  </section>
);

export default FavoriteArtist;
