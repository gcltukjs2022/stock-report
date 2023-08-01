import axios from "axios";
import { iData } from "../components/StocksSelection/data";

export const getReport = async () => {
  try {
    const url = process.env.REACT_APP_BACKEND_URL;
    const result = await axios.get(url + "/stock-report");

    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
    return err;
  }
};
