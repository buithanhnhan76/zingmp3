// image
import Image from "next/image";
// style
import styles from "./EventItemHeader.module.scss";

const EventItemHeader = ({ item }) => (
  <div className={styles["event-item-header"]}>
    <Image layout="fill" objectFit="cover" src={item.src} />
    <div className={styles["event-item-content"]}>
      <span className={styles["event-item-content-category"]}>
        PHÁT HÀNH BÀI HÁT
      </span>
      <h3 className={styles["event-item-content-title"]}>
        Một Thời Nhanh Như Một Ngày - Doãn
      </h3>
      <span className={styles["event-item-content-date"]}>
        19:00 Thứ Ba, 16 tháng 8
      </span>
    </div>
    <div className={styles["event-item-header-opacity"]} />
  </div>
);

export default EventItemHeader;
