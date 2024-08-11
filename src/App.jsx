import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';

function App() {
  

  return (
    // < div className='flex h-screen items-center justify-center'> 
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
      
    // </div>
  )
}

export default App
