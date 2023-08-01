import axios from "axios";
import {
  Button,
  Company,
  Container,
  Details,
  Item,
  ItemWrapper,
  List,
} from "./styles";
import { useEffect, useState } from "react";
import { getReport } from "../../utils/getReport";
import { data } from "./data";
import { Loading } from "notiflix";
import {
  StockPrice,
  updateStocksPrices,
} from "../../redux/features/stocksPricesSlice";
import { useAppDispatch } from "../../redux/hooks";
import moment from "moment";

const StocksSelection = () => {
  const [fileUrl, setFileUrl] = useState("");
  const [ready, setReady] = useState(false);
  const stocks = data;
  const dispatch = useAppDispatch();
  // const [stockData, setStockData] = useState<StockPrice[]>();
  const [stockData, setStockData] = useState<StockPrice[]>([]);
  const [showPrice, setShowPrice] = useState<boolean>(false);

  const handleClick = async () => {
    try {
      Loading.circle();
      const response: any = await getReport();
      Loading.remove();
      if (response.data.success) {
        const base64Data = response.data.file;
        const dataUri = `data:application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,${base64Data}`;
        setFileUrl(dataUri);
        setReady(true);
      }
    } catch (error) {
      Loading.remove();
      console.error("Error:", error);
    }
  };

  const handleDownload = () => {
    // Create a temporary link element
    const link = document.createElement("a");
    link.href = fileUrl;

    // Extract the file name from the data URI
    const fileName = `report${moment(new Date()).format("DDMMYYYY")}.docx`; // Replace "your_custom_file_name" with the desired file name
    link.download = fileName;

    // Append the link to the document and trigger the click event
    document.body.appendChild(link);
    link.click();

    // Remove the temporary link element
    document.body.removeChild(link);
  };

  return (
    <Container>
      <Button onClick={handleClick}>Refresh</Button>
      {ready && (
        <div>
          <h2>Your file is ready</h2>
          <div onClick={handleDownload}>Click here to download</div>
        </div>
      )}

      <List>
        {/* <Company>
          <Item>Project</Item>
          <Item>ADR / Shares</Item>
          <Item>Listing Ticker</Item>
          <Item>Local CCY</Item>
        </Company> */}
        {/* {showPrice &&
          stockData!.map((stock: any, index: number) => {
            return (
              <ItemWrapper key={index}>
                <Company>
                  <Item>{stock.name}</Item>
                  <Item>{stock.type}</Item>
                  <Item>{stock.ticker}</Item>
                  <Item>{stock.currency}</Item>
                </Company>
                <Details>
                  <Item>{stock.display}</Item>
                  <Item> 涨幅/跌幅: {stock.changePercent}%</Item>
                  <Item>
                    {" "}
                    收盘价: {stock.marketPrice} {stock.currency}
                  </Item>
                </Details>
              </ItemWrapper>
            );
          })} */}
      </List>
    </Container>
  );
};

export default StocksSelection;
