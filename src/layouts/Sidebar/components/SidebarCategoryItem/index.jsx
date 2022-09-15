// libs
import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";
// static icon
import LiveIcon from "../LiveIcon";
// style
import styles from "./SidebarCategoryItem.module.scss";

const SidebarCategoryItem = ({
  item,
  selectedSideBarItem,
  setSelectedSideBarItem,
}) => {
  const handleClickSideBarItem = (itemTitle) => {
    setSelectedSideBarItem(itemTitle);
  };

  return (
    <Link href="/">
      <div
        className={classNames(styles["sidebar-item-container"], {
          [styles["sidebar-item-active"]]: item.title === selectedSideBarItem,
        })}
        onClick={() => handleClickSideBarItem(item.title)}
        data-cy="sidebar-category-item"
      >
        <div className={styles["sidebar-item-content"]}>
          <div className={styles["sidebar-item-right-margin"]}>
            <Image src={item.src} width={15} height={15} />
          </div>
          <span className={styles["sidebar-item-right-margin"]}>
            {item.title}
          </span>
          {item.title === "Radio" && <LiveIcon />}
        </div>
      </div>
    </Link>
  );
};

export default SidebarCategoryItem;
