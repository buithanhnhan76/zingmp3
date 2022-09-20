// libs
import { useRouter } from "next/router";
// locales
import { locales } from "src/locale";

const useTranslate = () => {
  const { locale } = useRouter();

  const translate = locales[locale];

  return translate;
};

export default useTranslate;
