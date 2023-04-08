import { 
  Text,
  Box
} from '@chakra-ui/react'

export const Header  = () => {
  return(
    <div className='header'>
      <Box bg={'#80A6ED'} minH={'5vh'} border={'none'}>
        <Box w='25%' m='0 auto' border={'none'}>
          <Text bg={'#4a9ae9'} borderRadius={'15px'} fontFamily={'sans-serif'} textAlign={'center'} fontSize="2rem">Dio Bank</Text>
        </Box>
      </Box>
    </div>
  )
}
