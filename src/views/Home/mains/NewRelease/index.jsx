// child
import NewReleaseHeader from "../../components/NewReleaseHeader";
import NewReleaseItems from "../../components/NewReleaseItems";
// style
import styles from "./NewRelease.module.scss";

const NewRelease = () => (
  <div>
    <h3 className={styles["new-release-title"]}>Mới Phát Hành</h3>
    <NewReleaseHeader />
    <NewReleaseItems />
  </div>
);

export default NewRelease;
