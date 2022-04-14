import React from "react";

import logo from "../assets/logo.svg";

// import styles from "./App.module.scss";
import Header from "~/Components/Header/Header";
import Products from "~/Components/Products/Products";
import { Box } from "@chakra-ui/react";

const App: React.FC = () => {
  return (
    <Box bg={'#FAFAFA'} w='100%'>
      <Header/>
      <Products/>
    </Box>
  );
};

export default App;
