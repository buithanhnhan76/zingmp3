// child
import BannerItem from "../BannerItem";
// style
import styles from "./BannerItems.module.scss";

const BannerItems = ({ listItems }) => (
  <div className={styles["banner-items-container"]}>
    {listItems.map((item) => (
      <BannerItem key={item.id} src={item.src} />
    ))}
  </div>
);

export default BannerItems;
