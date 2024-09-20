import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
// import Home from './pages/Home/Home.jsx'

// const Route =createBrowserRouter([
//   {
//     path:"/",
//     element:<App/>,
//   },
//   {
//     path:"*",
//     element:<div>404! page not found</div>
//   }
// ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <RouterProvider router={Route}/> */}
    <App/>
  </StrictMode>,
)
