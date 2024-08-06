import { Route, Routes } from 'react-router-dom'
import HomePage from "./pages/HomePage"
import IndexPage from "./pages/indexPage"
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import MovieDescPage from "./pages/MovieDescPage"
import './App.css'

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<IndexPage />}/>
      <Route path='/home' element={<HomePage />}/>
      <Route path='/login' element={<LoginPage />}/>
      <Route path='/signup' element={<SignupPage />}/>
      <Route path='/movieDesc/:movieId' element={<MovieDescPage />}/>
    </Routes>
  )
}

export default App
