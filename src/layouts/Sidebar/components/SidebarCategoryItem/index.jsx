// libs
import { PlayCircleOutlined } from "@ant-design/icons";
import classNames from "classnames";
import Link from "next/link";
// next image
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
    <Link href="#">
      <div
        className={classNames(styles["sidebar-item-container"], {
          [styles["sidebar-item-active"]]: item.title === selectedSideBarItem,
        })}
        onClick={() => handleClickSideBarItem(item.title)}
      >
        <div className={styles["sidebar-item-content"]}>
          <PlayCircleOutlined className={styles["sidebar-item-right-margin"]} />
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
