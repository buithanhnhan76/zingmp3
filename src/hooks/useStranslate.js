// router
import { useRouter } from "next/router";
// eng and vie content file
import { locales } from "public/locale";

const useTranslate = () => {
  const { locale } = useRouter();

  console.log(useRouter());

  const translate = locales[locale];

  return translate;
};

export default useTranslate;
