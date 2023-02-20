// libs
import { useSelector } from "react-redux";
// Mock
import { listPlaylistItems } from "src/mocks/Playlist";
// Child
import Playlist from "../../components/Playlist";

const NewSongEveryDay = () => {
  const title = useSelector(
    (state) => state.locale.translate.newSongEveryday.title
  );
  return (
    <div>
      <Playlist title={title} listItems={listPlaylistItems} />
    </div>
  );
};

export default NewSongEveryDay;
