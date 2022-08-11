import SideBarBannerItem from "./sidebar-banner-item";

const SideBarBannerItems = (props) =>  ( 
     props.trans.sidebar["banner-items"].map(item => <SideBarBannerItem item={item} />)
 )
export default SideBarBannerItems;