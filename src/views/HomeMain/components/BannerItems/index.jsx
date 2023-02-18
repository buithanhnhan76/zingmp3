// child
import BannerItem from "../BannerItem";
// style
import styles from "./BannerItems.module.scss";

const BannerItems = ({ listItems }) => (
  <div className={styles["banner-items-container"]}>
    {listItems.map((item, index) => (
      <BannerItem key={item.id} src={item.src} order={index} />
    ))}
  </div>
);

export default BannerItems;
