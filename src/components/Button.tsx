import { 
  Button
} from '@chakra-ui/react'

interface Ibutton {
    text: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const AppButton = ({ text, onClick }: Ibutton) => {
    return(
      <Button _hover={{background: 'rgba(74, 154, 233,.8)',}} bg={'#4a9ae9'} color={"#fff"}>
      <button onClick={onClick}>
        {text}
      </button>
      </Button>
    )
  }