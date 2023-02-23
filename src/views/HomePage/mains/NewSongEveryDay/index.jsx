// libs
import { useSelector } from "react-redux";
// mock
import { listPlaylistItems } from "src/mocks/Playlist";
// child
import Playlist from "../../components/Playlist";

const NewSongEveryDay = () => {
  const title = useSelector(
    (state) => state.locale.translate.newSongEveryday.title
  );
  return (
    <section>
      <Playlist title={title} listItems={listPlaylistItems} />
    </section>
  );
};

export default NewSongEveryDay;
