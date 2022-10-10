/* eslint-disable no-prototype-builtins */
import {SimpleGrid} from "@chakra-ui/react";
import React, {useContext} from "react";

import {UserContext} from "~/Context/UserContext/UserContext";
import Product from "../Product/Product";

function ProductsRedeemed() {
  const {redeemHistory} = useContext(UserContext);

  return (
    <div>
      <SimpleGrid
        alignContent={"space-around"}
        columns={[1, 1, 1, 2, 3, 4]}
        gap={4}
        m="auto"
        maxW="80%"
        pb={14}
      >
        {redeemHistory?.map((elem, i) => {
          return <Product key={i} {...elem} redeeme={true} />;
        })}
      </SimpleGrid>
    </div>
  );
}

export default ProductsRedeemed;
