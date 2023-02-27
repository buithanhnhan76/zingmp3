// libs
import { useSelector } from "react-redux";
// child
import SectionTitle from "src/components/SectionTitle";

const PartnerTitle = () => {
  const title = useSelector((state) => state.locale.translate.partner.title);
  return <SectionTitle textAlign="center">{title}</SectionTitle>
};

export default PartnerTitle;
