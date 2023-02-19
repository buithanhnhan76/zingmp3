export const setCookie = (locale) => {
  document.cookie = `NEXT_LOCALE=${locale}; max-age=31536000; path=/`;
};

export const isEqual = (objectOne, objectTwo) => {
  if (JSON.stringify(objectOne) === JSON.stringify(objectTwo)) return true;
  return false;
};
