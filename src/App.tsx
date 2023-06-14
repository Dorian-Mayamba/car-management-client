import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import {Home} from './Pages/Home';
import Register from './Pages/Register';
import { Login } from './Pages/Login';
import NoMatchRoute from './Pages/NoMatchRoute';
import Cars from './Pages/Car/Cars';
function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Car' element={<Cars/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='*' element={<NoMatchRoute/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
