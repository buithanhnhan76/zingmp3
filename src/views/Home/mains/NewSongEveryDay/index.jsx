import { listPlaylistItems } from "src/mocks/Playlist";
import Playlist from "../../components/Playlist";

const NewSongEveryDay = () => (
  <div>
    <Playlist title="Nhạc mới mỗi ngày" listItems={listPlaylistItems} />
  </div>
);

export default NewSongEveryDay;
