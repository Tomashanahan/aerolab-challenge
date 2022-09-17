import React from "react";
import {Box} from "@chakra-ui/react";
import {Route, Routes} from "react-router-dom";

import Header from "~/Components/Header/Header";
import Products from "~/Components/Products/Products";
import FilterBar from "~/Components/FilterBar/FilterBar";
import ProductsRedeemed from "~/Components/ProductsRedeemed/ProductsRedeemed";
import {Banner} from "~/Components/Banner/Banner";

const App: React.FC = () => {
  return (
    <Box bg={"#FAFAFA"} w="100%">
      <Routes>
        <Route
          element={
            <>
              <Header redeem={false} />
              <Banner />
              <FilterBar />
              <Products />
            </>
          }
          path="/"
        />
        <Route
          element={
            <>
              <Header redeem={true} />
              <FilterBar />
              <ProductsRedeemed />
            </>
          }
          path="/redeems"
        />
      </Routes>
    </Box>
  );
};

export default App;
