// mocks
import { listBannerItems } from "src/mocks/Banner";
// child
import BannerItems from "../../components/BannerItems";

const Banner = () => <div>
    <BannerItems listItems={listBannerItems} />
</div>;

export default Banner;
