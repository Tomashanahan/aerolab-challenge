import React,{useState} from 'react'
import {
  Flex,
  Box,
  Image,
  Text,
  SlideFade,
  Button,
  Stack
} from '@chakra-ui/react';

import buy_Blue from '../../assets/icons/buy-blue.svg';
import buy_white from '../../assets/icons/buy-white.svg';
import coin from '../../assets/icons/coin.svg';

function Product({img,name,cost,category}) {
  // const [hover, setHover] = useState(false);
  return (
    <Box >
        {/* {hover ?
          <SlideFade in={hover} >
              <Flex w="full" alignItems="center" justifyContent="center" cursor={'pointer'}>
                <Flex
                  w="-moz-fit-content"
                  px={4}
                  h='310px'
                  rounded="ms"
                  shadow="xl"
                  position="relative"
                  direction={'column'} justifyContent='space-between'
                  bg='#37D8FC'
                  onMouseEnter={()=>setHover(true)}
                  onMouseLeave={()=>setHover(false)}
                >
                <Flex direction={'column'} align='center' justify={'center'}>
                    <Box position={'relative'} top='15px' left='38%' zIndex={2}>
                      <img src={buy_white} />
                    </Box>
                    <Box mt={'25%'}>
                      <Flex justify={'center'} align='center'>
                          <Text fontSize={'4xl'} color='#F4FCFE'>
                            {cost}
                          </Text>
                          <Image ml={2} src={coin}/>
                      </Flex>
                        <Button
                        color={'#787979'}
                        bg='#FFFFFF'
                        borderRadius={'3xl'}
                        px={14}
                        _hover={{'background':'#FFFFFF'}}
                        mt={3}
                        >
                          Redeem now
                        </Button>
                    </Box>
                  </Flex>
                </Flex>
              </Flex>
          </SlideFade>
          : */}
            <Flex w="full" alignItems="center" justifyContent="center">
              <Flex
                w="-moz-fit-content"
                h='-moz-max-content'
                rounded="ms"
                shadow="xl"
                position="relative"
                direction={'column'} justifyContent='space-between'
                bg='#FFFFFF'
                onMouseEnter={()=>setHover(true)}
                onMouseLeave={()=>setHover(false)}
              >
              <Box>
                  <Box position={'relative'} top='15px' left='80%'>
                    <Image src={buy_Blue}/>
                  </Box>
                    <Image
                      src={img.url}
                      alt={`Picture`}
                      roundedTop="lg"
                      m='auto'
                      borderBottom={'2px solid #EEEEEE'}
                      px={2}
                    />
                  </Box>
                  <Box p="20px"  textAlign={'left'}>
                      <Text color='#CCCCCC' mt={'-5px'} textTransform={'capitalize'}>
                        {category}
                      </Text>
                      <Flex mt="1" justifyContent="space-between" alignContent="center">
                        <Text
                          lineHeight="tight"
                          isTruncated
                          textTransform={'capitalize'}
                          color='#727272'
                          >
                          {name}
                        </Text>
                      </Flex>
                </Box>
              </Flex>
            </Flex>
        {/* } */}
    </Box>
  )
}

export default Product
  // {
  //   "img": {
  //     "url": "https://coding-challenge-api.aerolab.co/images/iPhone8-x1.png",
  //     "hdUrl": "https://coding-challenge-api.aerolab.co/images/iPhone8-x2.png"
  //   },
  //   "_id": "5a0b35c1734d1d08bf7084c3",
  //   "name": "iPhone 8",
  //   "cost": 800,
  //   "category": "Phones"
  // },
