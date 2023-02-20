// child
import NewReleaseHeader from "../../components/NewReleaseHeader";
import NewReleaseItems from "../../components/NewReleaseItems";
import NewRelaseTitle from "../../components/NewReleaseTitle";
// style
import styles from "./NewRelease.module.scss";

const NewRelease = () => (
  <div className={styles["new-release-container"]}>
    <NewRelaseTitle />
    <NewReleaseHeader />
    <NewReleaseItems />
  </div>
);

export default NewRelease;
