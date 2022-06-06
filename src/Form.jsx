import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getStations } from "./api";
import styles from "./NextSubways.module.css";

export default function Form() {
  const NUMBER_OF_LINES = 14;
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const selectedStation = searchParams.get("station") || "default";
  const selectedLine = searchParams.get("line") || "default";
  const [stations, setStations] = useState([]);

  useEffect(() => {
    setStations([]);

    if (selectedLine !== "default") {
      getStations(selectedLine)
        .then((response) => {
          setStations(response.data.result.stations);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [selectedLine, selectedStation]);

  function handleLineSelection(e) {
    navigate({
      search: "?line=" + e.target.value,
    });
  }

  function handleStationSelection(e) {
    navigate({
      search: "?line=" + selectedLine + "&station=" + e.target.value,
    });
  }
  return (
    <div className={styles.content}>
      <select
        onChange={handleLineSelection}
        value={selectedLine}
        className={styles.dropdown}
      >
        <option value="default">Sélectionner une ligne...</option>

        {[...Array(NUMBER_OF_LINES)].map((line, index) => (
          <option key={index} value={index + 1}>
            {index + 1}
          </option>
        ))}
      </select>
      {stations.length > 0 && (
        <select
          onChange={handleStationSelection}
          value={selectedStation}
          className={styles.dropdown}
        >
          <option value="default">Sélectionner une station...</option>
          {stations.map((station, index) => (
            <option key={station.slug} value={station.name}>
              {station.name}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}
