
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
//import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar"
import Home from './Components/Home/Home';

function App() {
  return (
    <>
    <Navbar/>
    
    
     <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home/>}/> 
         
        
      
    </Routes>
  </BrowserRouter>
      
    </>
  );
}

export default App;
