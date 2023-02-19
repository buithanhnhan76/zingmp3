// libs
import Image from "next/legacy/image";
// style
import styles from "./RadioItem.module.scss";

const RadioItem = ({ radio }) => (
  <div>
    <div className={styles["radio-item-top-content"]}>
      <div className={styles["radio-item-photo"]}>
        <Image src={radio.src} layout="fill" objectFit="cover" />
      </div>
      <div className={styles["radio-item-host-photo-container"]}>
        <Image src={radio.hostSrc} layout="fill" objectFit="contain" />
      </div>
      <div className={styles["radio-item-tag-container"]}>
        <Image src={radio.tagSrc} width={32} height={15} objectFit="contain" />
      </div>
    </div>
    <div className={styles["radio-item-bot-content"]}>
      <h3 className={styles["radio-item-host"]}>{radio.name}</h3>
      <div className={styles["bot-content-text-secondary"]}>
        {radio.listener}
      </div>
    </div>
  </div>
);

export default RadioItem;
