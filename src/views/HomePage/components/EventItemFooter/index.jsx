// children
import MediaInteraction from "src/components/MediaInteraction";
import Button from "src/components/Button";
// styles
import styles from "./EventItemFooter.module.scss";

const EventItemFooter = ({ item }) => (
  <div className={styles["event-item-footer"]}>
    <MediaInteraction
      interactionType={item.followerTitle}
      interactionList={item.listFollowers}
    />
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
