/* eslint-disable @next/next/no-html-link-for-pages, jsx-a11y/click-events-have-key-events */
// libs
import classNames from "classnames";
import Link from "next/link";
import Image from "next/legacy/image";
import { useMemo } from "react";
// static icon
import LiveIcon from "../LiveIcon";
// style
import styles from "./ListItem.module.scss";

const ListItem = ({ item, selectedSideBarItem, setSelectedSideBarItem }) => {
  const handleClickSideBarItem = (itemTitle) => {
    setSelectedSideBarItem(itemTitle);
  };

  const itemIcon = useMemo(
    () => (
      <Image
        src={item.src}
        width={15}
        height={15}
        id="categoryItemImg"
        priority
        alt="category item image"
      />
    ),
    [item.src]
  );
  return (
    <li
      id="list-item-image"
      className={classNames(styles["list-item-container"], {
        [styles["list-item-active"]]: item.title === selectedSideBarItem,
      })}
      onClick={() => handleClickSideBarItem(item.title)}
      role="presentation"
      data-cy="sidebar-category-item"
    >
      <Link href="/">
        <div className={styles["list-item-content"]}>
          <div
            className={classNames(
              styles["list-item-icon"],
              styles["list-item-right-margin"]
            )}
          >
            {itemIcon}
          </div>
          <span
            className={`${styles["list-item-right-margin"]} ${styles["list-item-title"]}`}
          >
            {item.title}
          </span>
          {item.title === "Radio" && <LiveIcon />}
        </div>
      </Link>
    </li>
  );
};

export default ListItem;
