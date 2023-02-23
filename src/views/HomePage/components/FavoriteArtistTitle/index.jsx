// libs
import React from "react";
import { useSelector } from "react-redux";
// styles
import styles from "./FavoriteArtistTitle.module.scss";

const FavoriteArtistTitle = () => {
  const title = useSelector(
    (state) => state.locale.translate.favoriteArtist.title
  );
  return <h3 className={styles["favorite-artist-title"]}>{title}</h3>;
};

export default FavoriteArtistTitle;
