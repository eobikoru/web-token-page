import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Index from './component/Index';
import Connect from './component/Connect';


function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Index/>} />
        <Route path='/connect' element={<Connect/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
