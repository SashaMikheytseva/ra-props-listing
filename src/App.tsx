import { Listing } from './components/Listing';
import './App.css';
import { recievedData } from './handleData';


function App() {
  
  return (
    <>
      <Listing recievedData={recievedData} />
    </>
  )
}

export default App
