// libs
import { useSelector } from "react-redux";
// mock
import { listPlaylistItems } from "src/mocks/Playlist";
// child
import Playlist from "../../components/Playlist";

const XOneCorner = () => {
  const title = useSelector((state) => state.locale.translate.xOne.title);
  return (
    <div>
      <Playlist title={title} listItems={listPlaylistItems} />
    </div>
  );
};

export default XOneCorner;
