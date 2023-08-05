import { HStack, Image, Text } from '@chakra-ui/react';
import LogoImage from '../assets/logo.webp'

const Navbar = () => {
  return (
    <HStack>
        <Image src={LogoImage} boxSize="60px"/>
        <Text>Navbar</Text>
    </HStack>
  )
}

export default Navbar;