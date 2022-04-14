import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import logo from '../../assets/logo.svg'
import coin from '../../assets/icons/coin.svg'
import banner from '../../assets/banner.png'

function Header() {
  return (
    <Box>
      <Flex justify={'space-between'} px={10} py={5} align='center'>
      <Box>
        <img src={logo} alt="Logo" />
      </Box>
      <Flex align='center'>
          <Text mr={3} color={'#727272'}>User Name</Text>

          <Flex bg='#EEEFEF' p={2} borderRadius={'2xl'} align='center' justify='space-between'>
            <Box ml={2} color={'#727272'}>6000</Box>
            <Box ml={2} mt={'3px'}><img src={coin} alt="Coin" width={'25px'}/></Box>
          </Flex>
        </Flex>
      </Flex>
      <Box>
        <img src={banner} alt="Banner" />
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
  )
}

export default Header
