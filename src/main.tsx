import React from "react";
import ReactDOM from "react-dom";
import {ChakraProvider} from "@chakra-ui/react";
import {BrowserRouter} from "react-router-dom";

import App from "./App";
import ProductsProvider from "./Context/ProductsContext/ProductsContext";
import {UserProvider} from "./Context/UserContext/UserContext";

ReactDOM.render(
  <ChakraProvider>
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
