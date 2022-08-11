import styles from "./sidebar-banner-item.module.scss";

const SideBarBannerItem = (props) => ( <div className={styles["sidebar-banner-item-container"]}>
    <h3>{props.item.title}</h3>
    <button className={props.item.type !== "vip-banner"?styles["sidebar-banner-item-button"]:styles["sidebar-vip-banner-item-button"]}>{props.item.label}</button>
</div> );
 
export default SideBarBannerItem;
