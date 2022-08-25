// child
import Button from "src/components/Button";
// style
import styles from "./NewReleaseHeader.module.scss";

const NewReleaseHeader = () => (
  <div className={styles["new-release-header-header"]}>
    <div className={styles["group-button-left"]}>
      <Button buttonLabel="BÀI HÁT" backGroundColor="purple" border="none" />
      <Button buttonLabel="ALBUM" />
    </div>
    <div>
      <Button buttonLabel="TẤT CẢ" border="none" color="secondary" arrow={true} />
    </div>
  </div>
);

export default NewReleaseHeader;
