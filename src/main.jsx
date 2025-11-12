import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './Components/Routes/About.jsx'
import Body from './Components/Body.jsx'
import Help from './Components/Routes/Help.jsx'
import Cart from './Components/Routes/Cart.jsx'
import SignIn from './Components/Routes/SignIn.jsx'
import Offers from './Components/Routes/Offers.jsx'
import Error from './Components/Error.jsx'
import Home from './Components/Home.jsx'
import RestuarntId from './Components/RestuarntId.jsx'

const app = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement:<Error/>,
    children: [
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/help',
        element: <Help />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/signin',
        element: <SignIn />
      },
      {
        path: '/offers',
        element: <Offers/>
      },
      {
        path:'/restaurant/:id',
        element:<RestuarntId/>
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={app}>
    <App />
  </RouterProvider>
    
)
