// libs
import { useSelector } from "react-redux";
// child
import SectionTitle from "src/components/SectionTitle";

const EventTitle = () => {
  const title = useSelector((state) => state.locale.translate.event.title);
  return <SectionTitle>{title}</SectionTitle>;
};

export default EventTitle;
