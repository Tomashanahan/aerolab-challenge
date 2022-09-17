import {Box, Flex, Text} from "@chakra-ui/react";
import React, {useContext, useEffect} from "react";
import {Link} from "react-router-dom";

import logo from "../../assets/logo.svg";
import coin from "../../assets/icons/coin.svg";
import banner from "../../assets/banner.png";
import {UserContext} from "../../Context/UserContext/UserContext";

function Header() {
  const {user, getUser, dispatch} = useContext(UserContext);

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <Box>
      <Flex align="center" justify={"space-between"} px={10} py={5}>
        <Box>
          <Link to="/">
            <img alt="Logo" src={logo} />
          </Link>
        </Box>
        <Flex align="center">
          <Link to="/redeems">
            <Text color={"#727272"} mr={3}>
              {user.name}
            </Text>
          </Link>

          <Flex align="center" bg="#EEEFEF" borderRadius={"2xl"} justify="space-between" p={2}>
            <Box color={"#727272"} ml={2}>
              {user.points}
            </Box>
            <Box ml={2} mt={"3px"}>
              <img alt="Coin" src={coin} width={"25px"} />
            </Box>
          </Flex>
        </Flex>
      </Flex>
      <Box>
        <img alt="Banner" src={banner} />
        {/* <Text
        position={'relative'}
        top={'-180px'}
        left='-650px'
        color={'#FBFEFF'}
        fontSize='6xl'
        fontWeight={'bold'}
        >
          Electronics
        </Text> */}
      </Box>
    </Box>
  );
}

export default Header;
