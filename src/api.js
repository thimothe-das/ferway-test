import axios from "axios";

const BASE_URL = "https://api-ratp.pierre-grimaud.fr/v4";

export function getStations(line) {
  const response = axios.get(`${BASE_URL}/stations/metros/${line}`, {
    params: { way: "A" },
  });
  return response;
}

export function getSchedules(line, station) {
  return axios.get(`${BASE_URL}/schedules/metros/${line}/${station}/A+R`);
}
