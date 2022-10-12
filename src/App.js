import './App.css';
import Timer from './components/Timer';
import { ChakraProvider } from '@chakra-ui/react'
import img from "./images/onepiece.jpg"

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <img className="bg" src={img} alt="404" />
        <Timer />
      </div>
    </ChakraProvider>
  );
}

export default App;
