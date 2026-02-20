import './App.css'
import LandingPage from '../src/Components/landingpage'
import Footer from './Components/footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'




function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path= '/' element= {<LandingPage />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
