import React from "react";

const DataContext = React.createContext({
  user: {},
  products: [],
  setObject: (data) => {},
  state: {
    after: "",
    before: "",
    data: {},
    loading: true,
    buy: false,
  },
  selection: () => {},
  slide: () => {},
});

const DataProvider = DataContext.Provider;

export { DataContext, DataProvider };
