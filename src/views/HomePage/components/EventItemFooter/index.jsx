// children
import Button from "src/components/Button";
import AvatarList from "../AvatarList";
// styles
import styles from "./EventItemFooter.module.scss";

const EventItemFooter = ({ item }) => (
  <div className={styles["event-item-footer"]}>
    <div>
      <h5 className={styles["followers-title"]}>{item.followerTitle}</h5>
      <AvatarList items={item.listFollowers} />
    </div>
    <div>
      <Button
        buttonLabel={item.buttonLabel}
        backGroundColor="purple"
        uppercase
        large
        border="none"
      />
    </div>
  </div>
);

export default EventItemFooter;
