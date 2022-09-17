import React, {useContext} from "react";
import {Button, Flex} from "@chakra-ui/react";

import {ProductsContext} from "../../Context/ProductsContext/ProductsContext";

import {FilterProducts} from "./../FilterProducts";

function FilterBar() {
  const {products, setInicio, setFin, fin, inicio, setTotalPerPage} = useContext(ProductsContext);

  const nextPage = () => {
    if (products.length > inicio + 16) {
      setTotalPerPage(products?.slice(inicio, fin).length);
      setInicio(fin);
      setFin(fin + 16);
    }
  };

  const previusPage = () => {
    if (inicio > 0) {
      setTotalPerPage(products?.slice(inicio, fin).length);
      setInicio(inicio - 16);
      setFin(fin - 16);
    }
  };

  return (
    <Flex
      align="center"
      borderBottom="1.5px solid #DBDADC"
      color="#DBDBDB"
      justify="space-between"
      m="auto"
      mt="30px"
      pb="20px"
      w="80%"
    >
      <FilterProducts />
      <Flex align="center" w="10%">
        <Button
          borderRadius="full"
          color="#DBDBDB"
          mx="5px"
          p={3}
          variant="outline"
          onClick={previusPage}
        >
          {" "}
          {"<"}{" "}
        </Button>
        <Button borderRadius="full" color="#DBDBDB" p={3} variant="outline" onClick={nextPage}>
          {" "}
          {">"}{" "}
        </Button>
      </Flex>
    </Flex>
  );
}

export default FilterBar;
