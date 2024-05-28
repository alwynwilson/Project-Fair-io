import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Auth/>} />
        <Route path='/register' element={<Auth insideRegister={true}/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
