import React from 'react'
import useFetch from '../../Hooks/UseFetch'
import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import Product from './Product';

function Products() {
  const info = useFetch('https://private-amnesiac-7ca9fb-aerolabchallenge.apiary-proxy.com/products')
  console.log(info);
  let first_9 = info.slice(0,16)
  return (
    <SimpleGrid columns={4} maxW='80%' m='auto' alignContent={'space-around'} gap={4} pb={14}>
          {first_9?.map(elem => {
            return <Product key={elem._id} {...elem}/>
          })}
    </SimpleGrid>
  )
}

export default Products
