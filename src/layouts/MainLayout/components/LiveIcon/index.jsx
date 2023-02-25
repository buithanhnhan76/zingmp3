// libs
import Image from "next/legacy/image";
// child
import liveIcon from "public/icons/live-tag.svg";
// styles
import styles from "./LiveIcon.module.scss";

const LiveIcon = () => (
  <div className={styles["live-icon"]}>
    <Image src={liveIcon.src} alt="live tag" width={34} height={16} />
  </div>
);

export default LiveIcon;
