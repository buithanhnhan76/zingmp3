import styles from "./Partner.module.scss";
import PartnerItems from "./PartnerItems";
import kakao from "../../../public/photos/kakao.png";
import sm from "../../../public/photos/sm.png";
import fuga from "../../../public/photos/fuga.png";
import beggers from "../../../public/photos/beggers.png";
import monstercat from "../../../public/photos/monstercat.png";
import yg from "../../../public/photos/yg.png";
import orcahrd from "../../../public/photos/orcahrd.png";
import universal from "../../../public/photos/universal.png";
import sony from "../../../public/photos/sony.png";
import empire from "../../../public/photos/empire.png";

const listPartners = [
  { id: 1, imgSrc: kakao.src },
  { id: 2, imgSrc: sm.src },
  { id: 3, imgSrc: fuga.src },
  { id: 4, imgSrc: beggers.src },
  { id: 5, imgSrc: monstercat.src },
  { id: 6, imgSrc: yg.src },
  { id: 7, imgSrc: orcahrd.src },
  { id: 8, imgSrc: universal.src },
  { id: 9, imgSrc: sony.src },
  { id: 10, imgSrc: empire.src },
];

const Partner = () => (
  <div className={styles["partner-container"]}>
    <h3 className={styles["partner-title"]}>ĐỐI TÁC ÂM NHẠC</h3>
    <PartnerItems items={listPartners} />
  </div>
);

export default Partner;
