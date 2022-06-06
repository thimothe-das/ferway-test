import React from "react";
import Form from "./Form";
import styles from "./NextSubways.module.css";
import Schedules from "./Schedules";

export default function NextSubways() {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.subContainer}>
          <Form />
          <Schedules />
        </div>
      </div>
    </div>
  );
}
