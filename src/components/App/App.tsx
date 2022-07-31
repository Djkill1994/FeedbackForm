import React, { VFC } from "react";
import styles from "./App.module.scss";
import { FeedbackForm } from "../FeedbackForm";
import { NotificationContainer } from "react-notifications";

export const App: VFC = () => {
  return (
    <div className={styles.wrapper}>
      <FeedbackForm />
      <NotificationContainer />
    </div>
  );
};
