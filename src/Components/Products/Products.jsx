import React, {useContext, useEffect} from "react";
import {SimpleGrid} from "@chakra-ui/react";

import Product from "../Product/Product";
import {ProductsContext} from "~/Context/ProductsContext/ProductsContext";

function Products() {
  const {products, getProducts, dispatch, inicio, fin, setTotalPerPage} = useContext(
    ProductsContext,
  );

  useEffect(() => {
    setTotalPerPage(products?.slice(inicio, fin).length);
  }, [inicio, fin, setTotalPerPage, products]);

  useEffect(() => {
    dispatch(getProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SimpleGrid alignContent={"space-around"} columns={4} gap={4} m="auto" maxW="80%" pb={14}>
      {products?.slice(inicio, fin).map((elem) => {
        return <Product key={elem._id} redeeme={false} {...elem} />;
      })}
    </SimpleGrid>
  );
}

export default Products;
