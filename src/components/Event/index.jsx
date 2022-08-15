import styles from "./Event.module.scss";
import EventItems from "./EventItems";
import Issac from "../../../public/photos/Issac.webp";
import NhatKimAnh from "../../../public/photos/NhatKimAnh.webp";
import TangDuyTan from "../../../public/photos/TangDuyTan.webp";

const listCelebs = [{imgSrc: Issac.src}, {imgSrc: NhatKimAnh.src}, {imgSrc: TangDuyTan.src}];

const Event = () => <div className={styles["event-container"]}>
    Sự Kiện
    <EventItems items={listCelebs}></EventItems>
    </div>;

export default Event;
