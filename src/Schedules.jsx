import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getSchedules } from "./api";
import styles from "./NextSubways.module.css";

export default function Schedules() {
  const [searchParams] = useSearchParams();

  const selectedStation = searchParams.get("station") || "default";
  const selectedLine = searchParams.get("line") || "default";
  const [loadingSchedules, setLoadingSchedules] = useState("idle");
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    if (selectedLine !== "default" && selectedStation !== "default") {
      setLoadingSchedules("loading");
      getSchedules(selectedLine, selectedStation)
        .then((response) => {
          setSchedules(response.data.result.schedules);
          setLoadingSchedules("success");
        })
        .catch((err) => {
          console.error(err);
          setLoadingSchedules("failed");
          setSchedules([]);
        });
    } else {
      setSchedules([]);
      setLoadingSchedules("idle");
    }
  }, [selectedLine, selectedStation]);

  return (
    <div className={styles.content}>
      <span>Résultats</span>
      {loadingSchedules === "failed" ? (
        <div className={`${styles.schedule} ${styles.errorContainer}`}>
          <div>Une erreur est survenue</div>
        </div>
      ) : loadingSchedules === "loading" ? (
        "Chargement..."
      ) : (
        schedules.map((schedule, index) => (
          <div className={styles.schedule} key={index}>
            <div>Direction : {schedule.destination}</div>
            <div>Informations : {schedule.message}</div>
          </div>
        ))
      )}
    </div>
  );
}
