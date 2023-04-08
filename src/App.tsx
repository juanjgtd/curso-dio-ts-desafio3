import { Header } from './components/Header/Header';
import { Card } from './components/Card';

import { 
  ChakraProvider
} from '@chakra-ui/react'


function App() {
  return (
    <ChakraProvider>
      <Header></Header>
      <Card cardTitle='Login'></Card>
    </ChakraProvider>
  );
}

export default App;
