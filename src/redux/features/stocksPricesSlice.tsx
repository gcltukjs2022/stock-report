import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface StockPrice {
  name: string;
  type: string;
  ticker: string;
  param: string;
  currency: string;
  yahooSymbol: string;
  yahooName: string;
  display: string;
}

const initialState: StockPrice = {
  name: "",
  type: "",
  ticker: "",
  param: "",
  currency: "",
  yahooSymbol: "",
  yahooName: "",
  display: "",
};

const stocksPricesSlice = createSlice({
  name: "stocksPrice",
  initialState,
  reducers: {
    updateStocksPrices: (state, action: PayloadAction<StockPrice>) => {
      return action.payload;
    },
  },
});

export const { updateStocksPrices } = stocksPricesSlice.actions;
export default stocksPricesSlice.reducer;
