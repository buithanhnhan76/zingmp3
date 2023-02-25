// mock
import { listPlaylistItems } from "src/mocks/Playlist";
// child
import Playlist from "../Playlist";

const Top100 = () => <Playlist title="Top 100" listItems={listPlaylistItems} />;

export default Top100;
