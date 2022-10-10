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
      <Text
        color="#6D6D6D"
        display={["none", "none", "none", "none", "block", "block"]}
        fontWeight="bold"
        w="15%"
      >
        {totalPerPage} of {products.length} products
      </Text>
      <Flex
        align="center"
        borderLeft={["none", "none", "none", "none", "none", "0.5px solid #ABABAB"]}
        justify={["center", "center", "center", "flex-start", "flex-start", "flex-start"]}
        px="20px"
        w={["100%", "100%", "100%", "80%", "90%", "80%"]}
      >
        <Text
          color="#575758"
          display={["none", "none", "none", "block", "block", "block"]}
          fontSize={["12px", "12px", "12px", "12px", "14px", "15px"]}
          fontWeight="bold"
          mr={["10px", "10px", "10px", "10px", "10px", "block"]}
        >
          Sort by:
        </Text>
        <Flex>
          <Button
            _focus={{outline: "none"}}
            _hover={{bg: selectedButton?.$mostRecent ? "#1AC9F6" : "#EDEDED"}}
            bg={selectedButton?.$mostRecent ? "#1AC9F6" : "#EDEDED"}
            borderRadius="20px"
            color={selectedButton?.$mostRecent ? "#FFFF" : "#575758"}
            fontSize={["12px", "12px", "12px", "12px", "14px", "15px"]}
            mt={["10px", "10px", "10px", "10px", "0", "0"]}
            mx={["0px", "0px", "0px", "0px", "5px", "10px"]}
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
            fontSize={["12px", "12px", "12px", "12px", "14px", "15px"]}
            mt={["10px", "10px", "10px", "10px", "0", "0"]}
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
            fontSize={["12px", "12px", "12px", "12px", "14px", "15px"]}
            mt={["10px", "10px", "10px", "10px", "0", "0"]}
            mx={["0", "0", "0", "0", "10px", "10px"]}
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
      </Flex>
    </>
  );
}
