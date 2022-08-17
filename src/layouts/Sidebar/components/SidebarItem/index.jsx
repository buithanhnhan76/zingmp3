// import { PlayCircleOutlined } from "@ant-design/icons";
// import Link from "next/link";
// // style
// import styles from "./SidebarItem.module.scss";
// // childrem
// import SidebarLineItem from "../SidebarLineItem";

// const SidebarItem = ({ item, selectedSideBarItem, setSelectedSideBarItem }) => {
//   const handleClickSideBarItem = (itemTitle) => {
//     setSelectedSideBarItem(itemTitle);
//   };

//   const calcActiveClassNameOfSideBarItem = (itemTitle) => itemTitle === selectedSideBarItem ? "sidebar-item-active" : "";

//   return item.title !== "" ? (
//     <Link href="#">
//       <div
//         className={`${styles["sidebar-item-container"]} ${
//           styles[calcActiveClassNameOfSideBarItem(item.title)]
//         }`}
//         onClick={() => handleClickSideBarItem(item.title)}
//       >
//         <div className={styles["sidebar-item-content"]}>
//           <PlayCircleOutlined className={styles["sidebar-item-right-margin"]} />{" "}
//           {item.title}
//           {item.title === "Radio" && (
//             <img
//               src={item.iconSrc}
//               alt="live tag"
//               className={styles["sidebar-item-left-margin"]}
//             />
//           )}
//         </div>
//       </div>
//     </Link>
//   ) : (
//     <SidebarLineItem />
//   );
// };

// export default SidebarItem;


import { PlayCircleOutlined } from "@ant-design/icons";
import Link from "next/link";
// style
import styles from "./SidebarItem.module.scss";
// childrem
import SidebarLineItem from "../SidebarLineItem";
import SidebarCategoryItem from "../SidebarCategoryItem";

const SidebarItem = ({ item, selectedSideBarItem, setSelectedSideBarItem }) => {
  return item.title !== "" ? (
    <SidebarCategoryItem item={item} selectedSideBarItem={selectedSideBarItem} setSelectedSideBarItem={setSelectedSideBarItem} />
  ) : (
    <SidebarLineItem />
  );
};

export default SidebarItem;
