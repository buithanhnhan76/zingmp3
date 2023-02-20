
// mocks
import { listArtists } from "src/mocks/FavoriteArtist";
// component
import FavoriteArtistItems from "../../components/FavoriteArtistItems";
import FavoriteArtistTitle from "../../components/FavoriteArtistTitle";

const FavoriteArtist = () => (
  <div>
    <FavoriteArtistTitle />
    <FavoriteArtistItems listArtists={listArtists} />
  </div>
);

export default FavoriteArtist;
