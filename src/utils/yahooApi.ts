import axios from "axios";
import { iData } from "../components/StocksSelection/data";

export const yahooApi = async (stocks: iData[]) => {
  const symbols = stocks.map((el: iData) => el.yahooSymbol).join(",");

  try {
    const options = {
      method: "GET",
      url: "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes",
      params: {
        region: "US",
        symbols: symbols,
      },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
        "X-RapidAPI-Host": process.env.REACT_APP_RAPIDAPI_HOST,
      },
    };
    const res: any = await axios.request(options);
    const resArr = res.data.quoteResponse.result;

    let result = [];

    for (let i = 0; i < resArr.length; i++) {
      for (let j = 0; j < resArr.length; j++) {
        if (resArr[i].longName === stocks[j].yahooName) {
          const combinedObj = {
            marketPrice: resArr[i].regularMarketPrice,
            changePercent: resArr[i].regularMarketChangePercent,
            ...stocks[j],
          };
          result.push(combinedObj);
        }
      }
    }
    // const priceArr = resArr.map((el: any) =>
    //   result.push({
    //     name: el.longName,
    //     marketPrice: el.regularMarketPrice,
    //     changePercent: el.regularMarketChangePercent,
    //   }),
    // );
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
    return err;
  }
};
