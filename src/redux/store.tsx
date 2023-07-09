import { configureStore } from "@reduxjs/toolkit";

import accessTokenSlice from "./features/stocksPricesSlice";
import stocksPriceSlice from "./features/stocksPricesSlice";

const store = configureStore({
  reducer: {
    stocksPrices: stocksPriceSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
