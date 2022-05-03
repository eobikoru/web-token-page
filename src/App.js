import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Index from './component/Index';
import Connect from './component/Connect';
import Bitcoins from './component/Bitcoins';
import Shn from './component/Shn';


function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Index/>} />
        <Route path='/connect' element={<Connect/>} />
        <Route path='/bitcoins' element={<Bitcoins/>} />
        <Route path='/shn' element={<Shn/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
