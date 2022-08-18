// vip banner
import SidebarBannerVipItem from "../SidebarBannerVipItem";
// login banner
import SidebarBannerLoginItem from "../SidebarBannerLoginItem";

const SidebarBannerItem = ({ item }) =>
  item.type === "vip-banner" ? (
    <SidebarBannerVipItem item={item} />
  ) : (
    <SidebarBannerLoginItem item={item} />
  );

export default SidebarBannerItem;
