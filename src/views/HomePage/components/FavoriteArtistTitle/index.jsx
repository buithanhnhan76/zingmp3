// libs
import React from "react";
import { useSelector } from "react-redux";
// child
import SectionTitle from "src/components/SectionTitle";

const FavoriteArtistTitle = () => {
  const title = useSelector(
    (state) => state.locale.translate.favoriteArtist.title
  );
  return <SectionTitle>{title}</SectionTitle>;
};

export default FavoriteArtistTitle;
