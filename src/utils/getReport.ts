import axios from "axios";
import { iData } from "../components/StocksSelection/data";

export const getReport = async () => {
  try {
    const url =
      process.env.LIVE_REACT_APP_BACKEND_URL || "http://localhost:3001";
    const result = await axios.get(url + "/stock-report");

    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
    return err;
  }
};
