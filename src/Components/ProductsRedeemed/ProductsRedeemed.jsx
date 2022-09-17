import React, {useContext} from "react";
import {SimpleGrid} from "@chakra-ui/react";

import {UserContext} from "~/Context/UserContext/UserContext";
import Product from "../Product/Product";

function ProductsRedeemed() {
  const {redeemHistory, user} = useContext(UserContext);

  return (
    <div>
      <SimpleGrid alignContent={"space-around"} columns={4} gap={4} m="auto" maxW="80%" pb={14}>
        {redeemHistory?.map((elem, i) => {
          return <Product key={i} {...elem} />;
        })}
      </SimpleGrid>
    </div>
  );
}

export default ProductsRedeemed;
