import { listPlaylistItems } from "src/mocks/Playlist";
import Playlist from "../../components/Playlist";

const Chill = () => (
  <div>
    <Playlist title="Chờ Iu Chill" listItems={listPlaylistItems} />
  </div>
);

export default Chill;
