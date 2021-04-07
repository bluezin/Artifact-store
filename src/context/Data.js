import React from "react";

const DataContext = React.createContext({
  user: {},
  products: [],
  state: {
    after: "",
    before: "",
    data: {},
    loading: true,
  },
  selection: () => {},
  slide: () => {},
});

const DataProvider = DataContext.Provider;

export { DataContext, DataProvider };
