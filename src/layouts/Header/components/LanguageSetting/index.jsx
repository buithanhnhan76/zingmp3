// libs
import { useRouter } from "next/router";
// style
import styles from "./LanguageSetting.module.scss";

const LanguageSetting = () => {
  const router = useRouter();
  const handleChangeLanguage = (language) => {
    router.push("/", "/", { locale: language });
  };
  return (
    <div className={styles["language-setting-container"]}>
      <select
        className={styles["language-select"]}
        onChange={(e) => handleChangeLanguage(e.target.value)}
      >
        <option value="vi">Vi</option>
        <option value="en">En</option>
      </select>
    </div>
  );
};

export default LanguageSetting;
