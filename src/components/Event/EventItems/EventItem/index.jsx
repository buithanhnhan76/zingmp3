import styles from "./EventItem.module.scss";

const EventItem = ({item}) => <div className={styles["event-item-header"]}>
    
    <img src={item.imgSrc} className={styles["event-item-header-photo"]}/>
    <div className={styles["event-item-header-content"]}>
    <h3>PHÁT HÀNH BÀI HÁT</h3>
    <h3>Ngồi Yên Anh Sang Ngay - Issac</h3>
    <p>19:00 Thứ Ba, 16 tháng 8</p>
    </div>
</div>

export default EventItem;