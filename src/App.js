import './App.css';
import Home from './Home.jsx';
import Summary from './Components/Main/Summary';
import { Routes , Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
  
 
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/summary' element={<Summary />} />
        
        </Routes>


     
 
  );
}

export default App;



// background color: #212329
// accent color(Reddish): #D12229
// accent color(Purplish): #7367EF
// graph color(green): #2CC872
// text color: #656672