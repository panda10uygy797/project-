import AboutUs from "./components/About-us/AboutUs";
import Home from "./pages/Home";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return(
    <div className = "App">
      <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/Login' element={<Login/>}/>
        
      </Routes>
    
    </BrowserRouter>
    </div>
  );
}

export default App;
