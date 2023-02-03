// vip banner
import VipBanner from "../VipBanner";
// login banner
import LoginBanner from "../LoginBanner";

const BannerItem = ({ item }) =>
  item.type === "vip-banner" ? (
    <VipBanner item={item} />
  ) : (
    <LoginBanner item={item} />
  );

export default BannerItem;
