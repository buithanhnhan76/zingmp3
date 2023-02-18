import { listPlaylistItems } from "src/mocks/Playlist";
import Playlist from "../../components/Playlist";

const XOneCorner = () => (
  <div>
    <Playlist title="XONE'S CORNER" listItems={listPlaylistItems} />
  </div>
);

export default XOneCorner;
