// libs
import { useSelector } from "react-redux";
// mock
import { listPlaylistItems } from "src/mocks/Playlist";
// child
import Playlist from "../Playlist";

const XOneCorner = () => {
  const title = useSelector((state) => state.locale.translate.xOne.title);
  return <Playlist title={title} listItems={listPlaylistItems} />;
};

export default XOneCorner;
