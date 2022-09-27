import {Box, Flex, Text, Menu, MenuButton, MenuList, MenuItem, Button} from "@chakra-ui/react";
import React, {useContext, useEffect} from "react";
import {Link} from "react-router-dom";
import {IoIosArrowDown} from "react-icons/io";

import logo from "../../assets/logo.svg";
import coin from "../../assets/icons/coin.svg";
import {UserContext} from "../../Context/UserContext/UserContext";
import Points from "../Points/Points";
import Loading from "../Loading/Loading";

function Header({redeem}) {
  const {user, getUser, dispatch, addingPointsLoading} = useContext(UserContext);

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
          <Menu>
            <MenuButton rightIcon={<IoIosArrowDown />}>
              <Flex align="center" color={"#727272"}>
                <Text>{user.name}</Text>
                <Box ml={1} mr={3}>
                  <IoIosArrowDown />
                </Box>
              </Flex>
            </MenuButton>
            <MenuList>
              <MenuItem>
                <Link to="/redeems">History redeems</Link>
              </MenuItem>
            </MenuList>
          </Menu>
          <Flex
            align="center"
            bg="#EEEFEF"
            borderRadius={"2xl"}
            justify="space-between"
            p={2}
            w={addingPointsLoading && "105px"}
          >
            <Points img={coin} />
          </Flex>
        </Flex>
      </Flex>
      {redeem && (
        <Text fontSize="4xl" fontWeight="extrabold" textAlign="center">
          History Redeems
        </Text>
      )}
    </Box>
  );
}

export default Header;
