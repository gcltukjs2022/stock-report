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
import { yahooApi } from "../../utils/yahooApi";
import { data } from "./data";

interface StockPrice {
  longName: string;
  yahoo: string;
  marketPrice: number;
  changePercent: number;
}

const StocksSelection = () => {
  const stocks = data;
  // const [stockData, setStockData] = useState<StockPrice[]>();
  const [stockData, setStockData] = useState([]);
  const [showPrice, setShowPrice] = useState<boolean>(false);

  const handleClick = async () => {
    const res: any = await yahooApi(data);
    setStockData(res);
    setShowPrice(true);
  };

  return (
    <Container>
      <Button onClick={handleClick}>Refresh</Button>
      <List>
        {/* <Company>
          <Item>Project</Item>
          <Item>ADR / Shares</Item>
          <Item>Listing Ticker</Item>
          <Item>Local CCY</Item>
        </Company> */}
        {showPrice &&
          stockData.map((stock: any, index: number) => {
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
          })}
      </List>
    </Container>
  );
};

export default StocksSelection;
