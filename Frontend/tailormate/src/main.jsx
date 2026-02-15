import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignupPage from './Components/signuppage.jsx'
import Login from './Components/login.jsx'
import Customerdetail from './Components/customerdetail.jsx'

const router = createBrowserRouter([
  {
    path:'/', element: <App />,
  //path:'/customerdetail', element: <CustomerDetail/>,
  //path:'/customerlist', element: <CustomerList/>,
    children: [
      {
        path:'/signup', element: <SignupPage />,
      }, 
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
