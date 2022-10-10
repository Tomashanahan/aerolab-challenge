import React from "react";
import ReactDOM from "react-dom";
import {ChakraProvider} from "@chakra-ui/react";
import {BrowserRouter} from "react-router-dom";
import {extendTheme} from "@chakra-ui/react";

import App from "./App";
import ProductsProvider from "./Context/ProductsContext/ProductsContext";
import {UserProvider} from "./Context/UserContext/UserContext";

const breakpoints = {
  sm: "375px",
  md: "400px",
  lg: "600px",
  xl: "1000px",
  "2xl": "1440px",
};

const theme = extendTheme({breakpoints});

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <BrowserRouter>
        <UserProvider>
          <ProductsProvider>
            <App />
          </ProductsProvider>
        </UserProvider>
      </BrowserRouter>
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById("root"),
);
