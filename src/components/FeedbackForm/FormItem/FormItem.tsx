import { FC } from "react";
import styles from "./FormItem.module.scss";
import clsx from "clsx";

interface IFormItemProps {
  errorMessage?: string;
  isError?: boolean;
}

export const FormItem: FC<IFormItemProps> = ({
  children,
  errorMessage,
  isError,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={clsx(styles.input, { [styles.errorInput]: isError })}>
        {children}
      </div>
      {isError && <div className={styles.errorMessage}>{errorMessage}</div>}
    </div>
  );
};
