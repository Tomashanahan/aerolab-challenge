import React, {useContext, useState} from "react";
import {Button, Flex, Text} from "@chakra-ui/react";

import {ProductsContext} from "~/Context/ProductsContext/ProductsContext";
import {UserContext} from "~/Context/UserContext/UserContext";

export function FilterProducts() {
  const {products, lowestPrice, highestPrice, totalPerPage, setInicio, setFin} = useContext(
    ProductsContext,
  );
  const {redeemLowestPrice, redeemHighestPrice, mostRecentsRedeems} = useContext(UserContext);
  const [selectedButton, setSelectedButton] = useState({});

  return (
    <>
      <Text color="#6D6D6D" fontWeight="bold" w="15%">
        {totalPerPage} of {products.length} products
      </Text>
      <Flex align="center" borderLeft="0.5px solid #ABABAB" justify="flex-start" pl="20px" w="80%">
        <Text color="#575758" fontWeight="bold">
          Sort by:
        </Text>
        <Button
          _focus={{outline: "none"}}
          _hover={{bg: selectedButton?.$mostRecent ? "#1AC9F6" : "#EDEDED"}}
          bg={selectedButton?.$mostRecent ? "#1AC9F6" : "#EDEDED"}
          borderRadius="20px"
          color={selectedButton?.$mostRecent ? "#FFFF" : "#575758"}
          mx="10px"
          onClick={() => {
            setInicio(0);
            setFin(16);
            mostRecentsRedeems();
            setSelectedButton({$mostRecent: true});
          }}
        >
          Most recent
        </Button>
        <Button
          _focus={{outline: "none"}}
          _hover={{bg: selectedButton?.$lowestPrice ? "#1AC9F6" : "#EDEDED"}}
          bg={selectedButton?.$lowestPrice ? "#1AC9F6" : "#EDEDED"}
          borderRadius="20px"
          color={selectedButton?.$lowestPrice ? "#FFFF" : "#575758"}
          mx="10px"
          onClick={() => {
            setInicio(0);
            setFin(16);
            lowestPrice();
            redeemLowestPrice();
            setSelectedButton({$lowestPrice: true});
          }}
        >
          Lowest price
        </Button>
        <Button
          _focus={{outline: "none"}}
          _hover={{bg: selectedButton?.$highestPrice ? "#1AC9F6" : "#EDEDED"}}
          bg={selectedButton?.$highestPrice ? "#1AC9F6" : "#EDEDED"}
          borderRadius="20px"
          color={selectedButton?.$highestPrice ? "#FFFF" : "#575758"}
          mx="10px"
          onClick={() => {
            setInicio(0);
            setFin(16);
            highestPrice();
            redeemHighestPrice();
            setSelectedButton({$highestPrice: true});
          }}
        >
          Highest price
        </Button>
      </Flex>
    </>
  );
}
