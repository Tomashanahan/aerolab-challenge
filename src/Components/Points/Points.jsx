import React, {useContext, useState} from "react";
import {Box, Button, Text} from "@chakra-ui/react";

import {UserContext} from "~/Context/UserContext/UserContext";
import Loading from "../Loading/Loading";

function Points({img}) {
  const {addingUserPoints, addingPointsLoading, user} = useContext(UserContext);
  const [addPoints, setAddPoints] = useState(false);

  return (
    <>
      {addingPointsLoading ? (
        <>
          <Box m="auto" mb={1} w="50%">
            <Loading />
          </Box>
          <Box ml={2} mt={"3px"}>
            <img alt="Coin" src={img} width={"25px"} />
          </Box>
        </>
      ) : (
        <>
          <Text color={"#727272"} cursor="pointer" ml={2} onClick={() => setAddPoints(!addPoints)}>
            {user.points}
          </Text>
          <Box ml={2} mt={"3px"}>
            <img alt="Coin" src={img} width={"25px"} />
          </Box>
        </>
      )}
      {addPoints && (
        <Box
          bg="#FFFF"
          borderRadius="20px"
          boxShadow="-10px 0px 13px -7px rgba(142,142,142,0.6), 10px 0px 13px -7px rgba(142,142,142,0.6), 2px 2px 12px 5px rgba(142,142,142,0.6)"
          left={["10%", "10%", "15%", "54%", "65%", "75%"]}
          p="15px"
          pos="absolute"
          textAlign="center"
          top="70px"
        >
          <Text fontWeight="bold" mb="20px">
            Add Points
          </Text>
          <Button
            _focus={{outline: "none"}}
            _hover={{bg: "#1AC9F6"}}
            bg={"#1AC9F6"}
            borderRadius="20px"
            color={"#FFFF"}
            mx="10px"
            onClick={() => {
              setAddPoints(false);
              addingUserPoints(1000);
            }}
          >
            1000
          </Button>
          <Button
            _focus={{outline: "none"}}
            _hover={{bg: "#1AC9F6"}}
            bg={"#1AC9F6"}
            borderRadius="20px"
            color={"#FFFF"}
            mx="10px"
            onClick={() => {
              setAddPoints(false);
              addingUserPoints(5000);
            }}
          >
            5000
          </Button>
          <Button
            _focus={{outline: "none"}}
            _hover={{bg: "#1AC9F6"}}
            bg={"#1AC9F6"}
            borderRadius="20px"
            color={"#FFFF"}
            mx="10px"
            onClick={() => {
              setAddPoints(false);
              addingUserPoints(7500);
            }}
          >
            7500
          </Button>
        </Box>
      )}
    </>
  );
}

export default Points;
