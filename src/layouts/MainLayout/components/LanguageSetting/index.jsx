// libs
import { useRouter } from "next/router";
import { useState } from "react";
// utils
import { setCookie } from "src/utils";
// styles
import styles from "./LanguageSetting.module.scss";

const LanguageSetting = () => {
  const router = useRouter();
  const [selectedLocale, setSelectedLocale] = useState(router.locale)

  const handleChangeLanguage = (language) => {
    const { pathname, asPath, query } = router;
    setCookie(language);
    setSelectedLocale(language);
    router.push({pathname, query}, asPath, { locale: language });
  };
  return (
    <div className={styles["language-setting-container"]}>
      <select
        className={styles["language-select"]}
        data-cy="change-language"
        onChange={(e) => handleChangeLanguage(e.target.value)}
        value={selectedLocale}
      >
        <option value="vi">Vi</option>
        <option value="en">En</option>
      </select>
    </div>
  );
};

export default LanguageSetting;
