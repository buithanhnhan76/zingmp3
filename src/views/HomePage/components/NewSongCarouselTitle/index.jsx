// libs
import { useSelector } from "react-redux";
// children
import SectionTitle from "src/components/SectionTitle";
import Button from "src/components/Button";
// style
import styles from "./NewSongCarouselTitle.module.scss";

const NewSongCarouselTitle = () => {
  const {title, buttonLabel} = useSelector((state) => state.locale.translate.newSong);
  return (
    <div className={styles["new-song-carousel-title-container"]}>
      <SectionTitle>{title}</SectionTitle>
      <Button buttonLabel={buttonLabel} border="none" color="secondary" arrow />
    </div>
  );
};

export default NewSongCarouselTitle;
