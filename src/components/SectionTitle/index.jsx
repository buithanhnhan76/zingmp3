// libs
import classNames from "classnames";
// styles
import styles from "./SectionTitle.module.scss";

const SectionTitle = ({
  children,
  textAlign = "left",
  textTransform = "uppercase",
  whiteSpace = "no-wrap",
}) => (
  <h3
    className={classNames(
      { [styles["title--left"]]: textAlign === "left" },
      { [styles["title--center"]]: textAlign === "center" },
      { [styles["title--uppercase"]]: textTransform === "uppercase" },
      { [styles["title--nowrap"]]: whiteSpace === "no-wrap" }
    )}
  >
    {children}
  </h3>
);

export default SectionTitle;
