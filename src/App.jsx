import { Routes,Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Footer from './components/Footer'
import './App.css'
import { useContext } from 'react'
import { tokenAuthContext } from './context/AuthContext'

function App() {

  const {isAuthorised,setIsAuthorised} = useContext(tokenAuthContext)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Auth/>} />
        <Route path='/register' element={<Auth insideRegister={true}/>} />
        <Route path='/projects' element={isAuthorised?<Projects/>:<Navigate to={"/"}/>} />
        <Route path='/dashboard' element={isAuthorised?<Dashboard/>:<Navigate to={"/"}/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
