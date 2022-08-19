// vip banner
import VipBanner from "../VipBanner";
// login banner
import LoginBanner from "../LoginBanner";

const SidebarBannerItem = ({ item }) =>
  item.type === "vip-banner" ? (
    <VipBanner item={item} />
  ) : (
    <LoginBanner item={item} />
  );

export default SidebarBannerItem;
