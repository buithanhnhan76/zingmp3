// libs
import { useSelector } from "react-redux";
// child
import Button from "src/components/Button";
// styles
import styles from "./NewReleaseHeader.module.scss";

const NewReleaseHeader = () => {
  const newReleaseHeader = useSelector(
    (state) => state.locale.translate.newRelease.header
  );
  return (
    <div className={styles["new-release-header"]}>
      <div className={styles["group-button"]}>
        <Button
          buttonLabel={newReleaseHeader.groupButtons[0].title}
          backGroundColor="purple"
          border="none"
        />
        <Button buttonLabel={newReleaseHeader.groupButtons[1].title} />
      </div>
      <div>
        <Button
          buttonLabel={newReleaseHeader.button.title}
          border="none"
          color="secondary"
          arrow
        />
      </div>
    </div>
  );
};

export default NewReleaseHeader;
