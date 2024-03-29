// libs
import { useSelector } from "react-redux";
// mock
import { listPlaylistItems } from "src/mocks/Playlist";
// child
import Playlist from "../Playlist";

const ChillPlaylist = () => {
  const title = useSelector(
    (state) => state.locale.translate.chillPlaylist.title
  );
  return (
      <Playlist title={title} listItems={listPlaylistItems} />
  );
};

export default ChillPlaylist;
