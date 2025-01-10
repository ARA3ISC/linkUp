import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import Navbar from './components/navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Preloader from './components/preloader/Preloader'
import { useEffect, useState } from 'react'
import Landing from './pages/Landing'


function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3300)

    return () => clearTimeout(timer);
  }, [])

  return (
    <>
      {
        isLoading ? <Preloader /> :
          <>
            <Navbar />
            <Routes >
              <Route path='/' element={<Landing />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
            </Routes>
          </>
      }
    </>
  )
}

export default App
