// mock
import { listPlaylistItems } from "src/mocks/Playlist";
// child
import Playlist from "../../components/Playlist";

const ChillPlaylist = () => (
  <Playlist title="Chờ Iu Chill" listItems={listPlaylistItems} />
);

export default ChillPlaylist;
