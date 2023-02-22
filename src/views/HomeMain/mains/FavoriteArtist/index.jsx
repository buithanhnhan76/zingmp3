// mocks
import { listArtists } from "src/mocks/FavoriteArtist";
// component
import FavoriteArtistTitle from "../../components/FavoriteArtistTitle";
import FavoriteArtistItems from "../../components/FavoriteArtistItems";

const FavoriteArtist = () => (
  <div>
    <FavoriteArtistTitle />
    <FavoriteArtistItems listArtists={listArtists} />
  </div>
);

export default FavoriteArtist;
