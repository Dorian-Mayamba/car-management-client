import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { Home } from './Pages/Home';
import Register from './Pages/Register';
import Login from './Pages/Login';
import NoMatchRoute from './Pages/NoMatchRoute';
import Cars from './Pages/Car/Cars';
import { AuthProvider } from './contexts/contexts';
import { CreateCar } from './Pages/Car/car.car.create';
function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/Car' element={<Cars />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Car-create' element={<CreateCar/>}/>
          <Route path='*' element={<NoMatchRoute />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </Router>
  )
}

export default App
