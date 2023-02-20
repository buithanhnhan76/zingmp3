// libs
import React from "react";
import { useSelector } from "react-redux";
// styles
import styles from "./NewReleaseTitle.module.scss";

const NewRelaseTitle = () => { 
    const title = useSelector(state => state.locale.translate.newRelease.title)
    return <h3 className={styles["new-release-title"]}>{title}</h3>
}
 
export default NewRelaseTitle;


