import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Hero from "./Hero";
import Container from "./Container";
import { DataProvider } from "./context/Data";
import { peticiones } from "./fetch/peticiones";

function App() {
  const [user, setUser] = useState("");
  const [products, setProducts] = useState([]);
  const [object, setObject] = useState({
    data: [],
    after: 16,
    before: 0,
    loading: true,
    modific: false,
    buy: false,
  });

  async function receiveUser() {
    const waitUser = await peticiones(
      "https://coding-challenge-api.aerolab.co/user/me"
    );
    setUser(waitUser);
  }

  async function receiveProducts() {
    try {
      const waitProducts = await peticiones(
        "https://coding-challenge-api.aerolab.co/products"
      );
      setProducts(waitProducts);
      setObject({
        data: waitProducts.slice(0, 16),
        after: 16,
        before: 0,
        loading: false,
        buy: false,
      });
    } catch {}
  }

  useEffect(() => {
    receiveProducts();
    receiveUser();
  }, [object.buy]);

  function isSelection(datas) {
    setObject({
      data: datas,
      modific: true,
    });
  }

  function isSlide(before, after) {
    if (object.modific === true) {
      return setObject({
        data: products.slice(0, 16),
        after: 16,
        before: 0,
        modific: false,
        buy: false,
      });
    }
    setObject({
      data: products.slice(before, after),
      after: after,
      before: before,
      buy: false,
    });
  }

  return (
    <div className="App">
      <DataProvider
        value={{
          user,
          products,
          setObject: setObject,
          state: {
            after: object.after,
            before: object.before,
            data: object.data,
            loading: object.loading,
            buy: object.buy,
          },
          selection: isSelection,
          slide: isSlide,
        }}
      >
        <Header />
        <Hero />
        <Container />
      </DataProvider>
    </div>
  );
}

export default App;
