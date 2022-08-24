import { listPlaylistItems } from "src/mocks/Playlist";
import Playlist from "../../components/Playlist";

const Top100 = () => (
  <div>
    <Playlist title="Top 100" listItems={listPlaylistItems} />
  </div>
);

export default Top100;
