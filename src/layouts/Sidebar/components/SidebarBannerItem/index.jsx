// vip banner
import SideBarBannerVipItem from "../SidebarBannerVipItem";
// login banner
import SidebarBannerLoginItem from "../SidebarBannerLoginItem";

const SideBarBannerItem = ({ item }) =>
  item.type === "vip-banner" ? (
    <SideBarBannerVipItem item={item} />
  ) : (
    <SidebarBannerLoginItem item={item} />
  );

export default SideBarBannerItem;
