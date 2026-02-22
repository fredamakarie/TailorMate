import './App.css'
import LandingPage from '../src/Components/landingpage'
import Footer from './Components/footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignupPage from './Components/signuppage'
import Login from './Components/login'
import Dashboard from './Components/dashboard'
import ProtectedRoute from './Components/ProtectedRoute'




function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path= '/' element= {<LandingPage />} />
          <Route path= '*' element= {<LandingPage />} />
          <Route path= '/signup' element= {<SignupPage/>} />
          <Route path= '/login' element= {<Login />} />
          <Route path= '/dashboard' element= {<ProtectedRoute><Dashboard /></ProtectedRoute>}
            
          />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
