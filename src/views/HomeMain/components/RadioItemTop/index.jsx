// libs
import Image from "next/legacy/image";
// styles
import styles from "./RadioItemTop.module.scss";

const RadioItemTop = ({ item }) => (
  <div className={styles["radio-item-top"]}>
    <div className={styles["radio-item-photo"]}>
      <Image src={item.src} layout="fill" objectFit="cover" />
    </div>
    <div className={styles["radio-item-host-photo"]}>
      <Image src={item.hostSrc} layout="fill" objectFit="contain" />
    </div>
    <div className={styles["radio-item-tag"]}>
      <Image src={item.tagSrc} width={32} height={15} />
    </div>
  </div>
);

export default RadioItemTop;
