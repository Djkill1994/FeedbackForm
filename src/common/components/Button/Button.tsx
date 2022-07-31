import styles from "./Button.module.scss";
import { FC } from "react";

interface IButtonProps {
  disabled?: boolean;
}

export const Button: FC<IButtonProps> = ({ children, disabled }) => {
  return (
    <div className={styles.container}>
      <button disabled={disabled} className={styles.button}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {children}
      </button>
    </div>
  );
};
