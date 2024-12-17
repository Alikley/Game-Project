import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.jpg'
import { ColorModeButton } from './ui/color-mode'
function NavBar() {
  return (
    <div>
        <HStack justifyContent='space-between' padding='10px'>
            <Image src={logo} boxSize="60px"/>
            <ColorModeButton />
        </HStack>
    </div>
  )
}

export default NavBar