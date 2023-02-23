// libs
import { useSelector } from "react-redux";
// child
import Button from "src/components/Button";
// style
import styles from "./NewSongCarouselTitle.module.scss";

const NewSongCarouselTitle = () => {
  const {title, buttonLabel} = useSelector((state) => state.locale.translate.newSong);
  return (
    <div className={styles["new-song-carousel-title-container"]}>
      <h3 className={styles["new-song-carousel-title"]}>{title}</h3>
      <Button buttonLabel={buttonLabel} border="none" color="secondary" arrow />
    </div>
  );
};

export default NewSongCarouselTitle;
