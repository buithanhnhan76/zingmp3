// children
import NewRelaseTitle from "../../components/NewReleaseTitle";
import NewReleaseHeader from "../../components/NewReleaseHeader";
import NewReleaseItems from "../../components/NewReleaseItems";
// styles
import styles from "./NewRelease.module.scss";

const NewRelease = () => (
  <section className={styles["new-release"]}>
    <NewRelaseTitle />
    <NewReleaseHeader />
    <NewReleaseItems />
  </section>
);

export default NewRelease;
