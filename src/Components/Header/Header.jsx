import {Box, Flex, Text} from "@chakra-ui/react";
import React, {useContext, useEffect} from "react";
import {Link} from "react-router-dom";

import logo from "../../assets/logo.svg";
import coin from "../../assets/icons/coin.svg";
import banner from "../../assets/banner.png";
import {UserContext} from "../../Context/UserContext/UserContext";
import Points from "../Points/Points";

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
            <Points img={coin} points={user.points} />
          </Flex>
        </Flex>
      </Flex>
      <Box>
        <img alt="Banner" src={banner} />
      </Box>
    </Box>
  );
}

export default Header;
