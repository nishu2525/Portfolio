import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About';
import Experineces from './Pages/Experineces';
import Projects from './Pages/Projects';

function App() {
  

  return (
   
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Experineces' element={<Experineces/>}/>
        <Route path='/Proje' element={<Projects/>}/>
      </Routes>
    </BrowserRouter>
      
    // </div>
  )
}

export default App
