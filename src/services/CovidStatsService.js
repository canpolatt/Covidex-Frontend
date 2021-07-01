import axios from "axios";

export default class covidStatsService {
  getTotalCase() {
    return axios.get("http://localhost:4000/api/patients/getTotalCase");
  }
  getActiveCase() {
    return axios.get("http://localhost:4000/api/patients/getActiveCase");
  }

  getTurkeyCase = async () => {
    return await axios.get("https://api.covid19api.com/summary");
  };
}
