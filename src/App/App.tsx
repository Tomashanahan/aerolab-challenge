import React from "react";
import {Box} from "@chakra-ui/react";
import {Route, Routes} from "react-router-dom";

import Header from "~/Components/Header/Header";
import Products from "~/Components/Products/Products";
import FilterBar from "~/Components/FilterBar/FilterBar";
import ProductsRedeemed from "~/Components/ProductsRedeemed/ProductsRedeemed";

const App: React.FC = () => {
  return (
    <Box bg={"#FAFAFA"} w="100%">
      <Routes>
        <Route
          element={
            <>
              <Header />
              <FilterBar />
              <Products />
            </>
          }
          path="/"
        />
        <Route
          element={
            <>
              <Header />
              <FilterBar />
              <ProductsRedeemed />
            </>
          }
          path="/redeems"
        />
      </Routes>
      {/* <Header />
      <FilterBar />
      <Products /> */}
    </Box>
  );
};

export default App;
