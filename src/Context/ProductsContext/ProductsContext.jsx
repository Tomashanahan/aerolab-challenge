import * as React from "react";
// import {React, createContext, useReducer} from "react";

export const ProductsContext = React.createContext();

const initialState = {
  products: [],
  lowestPriceProducts: [],
};

const actionsTypes = {
  FETCH_PRODUCTS: "FETCH_PRODUCTS",
  LOWEST_PRODUCTS_COST: "LOWEST_PRODUCTS_COST",
  HIGHEST_PRODUCTS_COST: "HIGHEST_PRODUCTS_COST",
};

export const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case actionsTypes.FETCH_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    case actionsTypes.LOWEST_PRODUCTS_COST:
      return {
        ...state,
        products: state.products.sort((a, b) => a.cost - b.cost),
      };
    case actionsTypes.HIGHEST_PRODUCTS_COST:
      return {
        ...state,
        products: state.products.sort((a, b) => b.cost - a.cost),
      };
    default:
      return {
        ...state,
      };
  }
};

const ProductsProvider = ({children}) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const [inicio, setInicio] = React.useState(0);
  const [fin, setFin] = React.useState(16);
  const [totalPerPage, setTotalPerPage] = React.useState(16);
  const {products} = state;

  const getProducts = async () => {
    const info = await fetch(
      "https://private-amnesiac-7ca9fb-aerolabchallenge.apiary-proxy.com/products",
      {
        method: "GET",
        headers: new Headers({
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU4NDA0YjRkYzhhODAwMWE4N2E1YTgiLCJpYXQiOjE2NDk5NTA3OTV9.EZqjg65FEIKnsRah2WhNJ1vNHKrvO3a8puXb4O3K8h0",
        }),
      },
    );
    const products = await info.json();

    return dispatch({type: actionsTypes.FETCH_PRODUCTS, payload: products});
  };

  const lowestPrice = () => {
    return dispatch({type: actionsTypes.LOWEST_PRODUCTS_COST});
  };

  const highestPrice = () => {
    return dispatch({type: actionsTypes.HIGHEST_PRODUCTS_COST});
  };

  const value = {
    dispatch,
    products,
    getProducts,
    lowestPrice,
    highestPrice,
    inicio,
    fin,
    setInicio,
    setFin,
    totalPerPage,
    setTotalPerPage,
  };

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};

export default ProductsProvider;
