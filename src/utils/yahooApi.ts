import axios from "axios";
import { iData } from "../components/StocksSelection/data";

export const yahooApi = async () => {
  try {
    const url = process.env.REACT_APP_BACKEND_URL || "http://localhost:3001";
    const result = await axios.get(url + "/stock-price");

    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
    return err;
  }
};
