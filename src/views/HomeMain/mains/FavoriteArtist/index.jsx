// mocks
import { listArtists } from "src/mocks/FavoriteArtist";
// component
import FavoriteArtistTitle from "../../components/FavoriteArtistTitle";
import FavoriteArtistItems from "../../components/FavoriteArtistItems";

const FavoriteArtist = () => (
  <section>
    <FavoriteArtistTitle />
    <FavoriteArtistItems listArtists={listArtists} />
  </section>
);

export default FavoriteArtist;
