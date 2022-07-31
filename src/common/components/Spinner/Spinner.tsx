import { VFC } from "react";
import styles from "./Spinner.module.scss";

export const Spinner: VFC = () => {
  return <div className={styles.loader} />;
};
