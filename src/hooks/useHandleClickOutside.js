// libs
import { useEffect } from "react";

const useHandleClickOutSide = (idContainer, callBack, value) => {
  useEffect(() => {
    window.addEventListener("click", (e) => {
      const container = document.getElementById(idContainer);
      // null detect
      if (!container) return;
      if (container) {
        if (!container.contains(e.target)) {
          callBack(value);
        }
      }
    });
    return () => window.removeEventListener("click");
  }, [idContainer, callBack, value]);
};

export default useHandleClickOutSide;
