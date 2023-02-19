/* eslint-disable @next/next/no-html-link-for-pages, jsx-a11y/click-events-have-key-events */
// libs
import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";
// static icon
import LiveIcon from "../LiveIcon";
// style
import styles from "./ListItem.module.scss";

const ListItem = ({ item, selectedSideBarItem, setSelectedSideBarItem }) => {
  const handleClickSideBarItem = (itemTitle) => {
    setSelectedSideBarItem(itemTitle);
  };

  return (
    <Link href="/">
      <div
        id="list-item-image"
        className={classNames(styles["list-item-container"], {
          [styles["list-item-active"]]: item.title === selectedSideBarItem,
        })}
        onClick={() => handleClickSideBarItem(item.title)}
        role="presentation"
        data-cy="sidebar-category-item"
      >
        <div className={styles["list-item-content"]}>
          <div
            className={classNames(
              styles["list-item-icon"],
              styles["list-item-right-margin"]
            )}
          >
            <Image
              src={item.src}
              width={15}
              height={15}
              id="categoryItemImg"
              priority
              alt="category item image"
            />
          </div>
          <span
            className={`${styles["list-item-right-margin"]} ${styles["list-item-title"]}`}
          >
            {item.title}
          </span>
          {item.title === "Radio" && <LiveIcon />}
        </div>
      </div>
    </Link>
  );
};

export default ListItem;
