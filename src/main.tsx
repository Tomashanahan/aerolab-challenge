import React from "react";
import ReactDOM from "react-dom";
import {ChakraProvider} from '@chakra-ui/react';

import App from "./App";

// import "./theme.css";

ReactDOM.render(
    <ChakraProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ChakraProvider>,
    document.getElementById("root"),
);
