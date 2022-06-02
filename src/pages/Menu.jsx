import Center from '../components/Center';
import Heading from '../components/Heading';
import React, { Suspense } from 'react'
import { sizes } from '../constants/styles';

const Menu = () => {
  return (
    <Center padding={`${sizes.xl} ${sizes.base}`}>
      <Heading margin={`0 auto ${sizes.xl} auto`}>Don't write it on toilet paper, write it digitally!</Heading>
      <p>
        Quisque rhoncus ex ut odio fermentum, et iaculis massa tempus.
      </p>
    </Center>
  )
}

export default Menu