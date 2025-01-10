import './App.css'
import Login from './components/login/Login'
import Register from './components/register/Register'
import Navbar from './components/navbar/Navbar'
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <Navbar />
      <Routes >
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>

    </>
  )
}

export default App
