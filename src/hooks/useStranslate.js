// router
import { useRouter } from "next/router";
// eng and vie content file
import { locales } from "public/locale";

const useTranslate = () => {
  const { locale } = useRouter();

  // const translate = locale === "vi" ? vi : en;
  const translate = locales[locale];

  return translate;
};

export default useTranslate;
