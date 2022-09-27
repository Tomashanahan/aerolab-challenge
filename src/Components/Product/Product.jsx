import React, {useContext, useState} from "react";
import {Flex, Box, Image, Text, Button} from "@chakra-ui/react";
import Swal from "sweetalert2";

import buy_Blue from "../../assets/icons/buy-blue.svg";
import buy_white from "../../assets/icons/buy-white.svg";
import coin from "../../assets/icons/coin.svg";
import {UserContext} from "~/Context/UserContext/UserContext";

function Product({_id, img, name, cost, category, redeeme, quantity}) {
  const {user, dispatch, redeem} = useContext(UserContext);
  const [hover, setHover] = useState(false);

  return (
    <Box mt="30px" position="relative">
      {hover && !redeeme && (
        <Flex alignItems="center" justifyContent="center" position="absolute" w="full" zIndex={100}>
          <Flex
            bg="rgb(55, 216, 252, 0.8)"
            cursor="pointer"
            direction={"column"}
            h="300px"
            justifyContent="space-between"
            opacity="none"
            position="relative"
            px={4}
            rounded="ms"
            shadow="md"
            w="268px"
            onMouseLeave={() => setHover(!hover)}
          >
            <Flex align="center" direction={"column"} justify={"center"}>
              <Box left="44%" position={"relative"} top="14px" zIndex={2}>
                <img src={buy_white} />
              </Box>
              <Box mt={"25%"}>
                <Flex align="center" justify={"center"}>
                  <Text color="#F4FCFE" fontSize={"4xl"}>
                    {cost}
                  </Text>
                  <Image ml={2} src={coin} />
                </Flex>
                <Button
                  _hover={{background: "#FFFFFF"}}
                  bg="#FFFFFF"
                  borderRadius={"3xl"}
                  color={"#787979"}
                  disabled={user.points > cost ? false : true}
                  mt={3}
                  px={14}
                  onClick={() => {
                    dispatch(redeem(_id));
                    Swal.fire({
                      position: "top",
                      icon: "success",
                      title: "Redeem successful",
                      showConfirmButton: false,
                      timer: 1500,
                    });
                  }}
                >
                  Redeem now
                </Button>
              </Box>
            </Flex>
          </Flex>
        </Flex>
      )}
      <Flex alignItems="center" justifyContent="center" w="full">
        <Flex
          bg="#FFFFFF"
          direction={"column"}
          h="300px"
          justifyContent="space-between"
          position="relative"
          rounded="ms"
          shadow="lg"
          w="268px"
          onMouseOver={() => setHover(true)}
        >
          <Box pos="relative">
            {user.points > cost ? (
              redeeme ? (
                <Box left="70%" position="absolute" top="10px">
                  <Text
                    bg="rgb(128, 128, 128, 0.9)"
                    borderRadius="20px"
                    color="#FFFF"
                    m="auto"
                    mt="10px"
                    p="10px"
                    textAlign="center"
                    w="-moz-fit-content"
                  >
                    {quantity > 1 ? `${quantity} Units` : `${quantity} Unit`}
                  </Text>
                </Box>
              ) : (
                <Box left="80%" position="absolute" top="15px">
                  <Image src={buy_Blue} />
                </Box>
              )
            ) : (
              <Box
                display={hover ? "none" : "inline-block"}
                left="37%"
                position="absolute"
                top="15px"
                w="160px"
              >
                <Flex bg="rgb(128, 128, 128, 0.8)" borderRadius="20px" color="#FFFF" p="10px">
                  <Text minW="fit-content" mx="5px">
                    You need {cost - user.points}
                  </Text>
                  <Image src={coin} w="25px" />
                </Flex>
              </Box>
            )}
            <Image
              alt={`Picture`}
              borderBottom={"1.5px solid #DBDADC"}
              m="auto"
              roundedTop="lg"
              src={img.url}
            />
          </Box>
          <Box p={redeem && quantity ? "10px 20px" : "20px"} textAlign={"left"}>
            <Text color="#CCCCCC" mt={"-5px"} textTransform={"capitalize"}>
              {category}
            </Text>
            <Box>
              <Text isTruncated color="#727272" lineHeight="tight" textTransform={"capitalize"}>
                {name}
              </Text>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Product;
