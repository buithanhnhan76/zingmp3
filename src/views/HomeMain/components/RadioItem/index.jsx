// children
import RadioItemTop from "../RadioItemTop";
import RadioItemBottom from "../RadioItemBottom";

const RadioItem = ({ item }) => (
  <div>
    <RadioItemTop item={item} />
    <RadioItemBottom item={item} />
  </div>
);

export default RadioItem;
