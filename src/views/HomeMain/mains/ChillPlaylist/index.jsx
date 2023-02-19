// mock
import { useSelector } from "react-redux";
import { listPlaylistItems } from "src/mocks/Playlist";
// child
import Playlist from "../../components/Playlist";

const ChillPlaylist = () => {
  const title = useSelector(
    (state) => state.locale.translate.chillPlaylist.title
  );
  return <Playlist title={title} listItems={listPlaylistItems} />;
};

export default ChillPlaylist;
