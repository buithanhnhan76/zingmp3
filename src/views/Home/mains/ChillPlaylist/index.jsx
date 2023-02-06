// child
import Playlist from "../../components/Playlist";
// mock
import { listPlaylistItems } from "src/mocks/Playlist";


const ChillPlaylist = () => (
  <>
    <Playlist title="Chờ Iu Chill" listItems={listPlaylistItems} />
  </>
);

export default ChillPlaylist;
