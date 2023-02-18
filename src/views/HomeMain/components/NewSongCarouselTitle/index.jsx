// child
import Button from "src/components/Button";
// style
import styles from "./NewSongCarouselTitle.module.scss";

const NewSongCarouselTitle = () => (
  <div className={styles["new-song-carousel-title-container"]}>
    <h3 className={styles["new-song-carousel-title"]}>Nhạc mới</h3>
    <Button buttonLabel="Tất cả" border="none" color="secondary" arrow />
  </div>
);

export default NewSongCarouselTitle;
