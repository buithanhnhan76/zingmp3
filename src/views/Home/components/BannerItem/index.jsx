// libs
import Image from "next/image";

const BannerItem = ({ src }) => (
  <div>
    <Image src={src} width={340} height={100} />
  </div>
);

export default BannerItem;
