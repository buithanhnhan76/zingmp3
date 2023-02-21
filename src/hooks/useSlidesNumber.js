// libs
import { useMemo } from "react";
// hook
import useWindowDimensions from "./useWindowDimensions";

export const useSlidesNumber = (
  screenLarge,
  screenMedium,
  screenSmall,
  screenXSmall
) => {
  const windowDimensions = useWindowDimensions();
  const calculateSLidesNumber = () => {
    if (windowDimensions) {
      if (windowDimensions.width > 1200) {
        return screenLarge;
      }
      if (windowDimensions.width >= 768) {
        return screenMedium;
      }

      if (windowDimensions.width > 420) {
        return screenSmall;
      }
      return screenXSmall;
    }
    return screenLarge;
  };
  const numberOfSlidesToShow = useMemo(
    () => calculateSLidesNumber(),
    [windowDimensions]
  );
  return numberOfSlidesToShow;
};
