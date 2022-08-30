// icon
import liveIcon from "public/icons/live-tag.svg";

import Image from "next/image";

const LiveIcon = () => (
  <Image src={liveIcon.src} alt="live tag" width={34} height={16} />
);

export default LiveIcon;
