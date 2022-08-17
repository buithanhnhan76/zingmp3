// vip banner
import SidebarBannerVipItem from "../SidebarBannerVipItem";
// login banner
import SidebarBannerLoginItem from "../SidebarBannerLoginItem";

const SideBarBannerItem = ({ item }) =>
  item.type === "vip-banner" ? (
    <SidebarBannerVipItem item={item} />
  ) : (
    <SidebarBannerLoginItem item={item} />
  );

export default SideBarBannerItem;
