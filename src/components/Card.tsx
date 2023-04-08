import { AppButton } from "./Button"

import { 
  Center,
  Input,
  Box,
  Text,
} from '@chakra-ui/react'

import { login } from "../services/login"

interface ICard {
  cardTitle: string
}

export const Card = ({cardTitle}: ICard) => {
  return(
    <div>
      <Box minHeight='95vh' border={'none'} backgroundColor='#80A6ED' padding='25px'>
        <Box w='25%' m='0 auto' border={'none'} backgroundColor='#FFFFFF' borderRadius='25px' padding='15px'>
          <Center>
            <Text fontWeight={'400'} fontSize={'1.25rem'}>{cardTitle}</Text>
          </Center>
          <Input m={'1'} placeholder="email" />
          <Input m={'1'} placeholder="password" />
          <Center>
            <AppButton onClick={login} text="Entrar"></AppButton>
          </Center>
        </Box>
      </Box>
    </div>
  )
}


{/* <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
        <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
          <Center>
            <h1>Faça o login</h1>
          </Center>
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Center>
            <AppButton onClick={login} text="Entrar"></AppButton>
          </Center>
        </Box>
      </Box> */}