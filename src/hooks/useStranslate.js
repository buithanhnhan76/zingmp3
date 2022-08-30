// router
import { useRouter } from "next/router";
// eng and vie content file
import en from "public/locale/en";
import vi from "public/locale/vi";

const useTranslate = () => {
  const { locale } = useRouter();

  const translate = locale === "vi" ? vi : en;

  return translate;
};

export default useTranslate;
