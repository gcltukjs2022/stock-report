export const scrape = async () => {
  try {
    // const res = await axios.post(
    //   `${process.env.REACT_APP_BACKEND_URL}` + "/html",
    //   { data: stocks },
    // );
    // const { data } = res.data;
    //       changePercent: el.regularMarketChangePercent,}));
    //   setStockData((prev: any) => {
    //     const newArr = [...prev];
    //     newArr.push({
    //       marketPrice: el.regularMarketPrice,
    //       changePercent: el.regularMarketChangePercent,
    //     });
    //     return newArr;
    //   }),
    // );
  } catch (err) {
    console.log(err);
    return err;
  }
};
