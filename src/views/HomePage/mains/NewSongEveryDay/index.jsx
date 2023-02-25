// libs
import { useSelector } from "react-redux";
// mock
import { listPlaylistItems } from "src/mocks/Playlist";
// child
import Playlist from "../Playlist";

const NewSongEveryDay = () => {
  const title = useSelector(
    (state) => state.locale.translate.newSongEveryday.title
  );
  return (
    <>
      <Playlist title={title} listItems={listPlaylistItems} />
    </>
  );
};

export default NewSongEveryDay;
