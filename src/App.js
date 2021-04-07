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
      });
    } catch {}
  }

  useEffect(() => {
    receiveProducts();
    receiveUser();
  }, [user]);

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
      });
    }
    setObject({
      data: products.slice(before, after),
      after: after,
      before: before,
    });
  }

  return (
    <div className="App">
      <DataProvider
        value={{
          user: user,
          products: products,
          state: {
            after: object.after,
            before: object.before,
            data: object.data,
            loading: object.loading,
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
