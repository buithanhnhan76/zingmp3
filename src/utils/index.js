export const setCookie = (locale) => {
  document.cookie = `NEXT_LOCALE=${locale}; max-age=31536000; path=/`;
};
