import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromChildren, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import {Home, About, Contact, User, Github, githubInfoLoader} from './components'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       }, 
//       {
//         path: "about",
//         element: <About />
//       }, 
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path='/' element={<Layout />}>
       <Route  path='' element={<Home />} />
       <Route  path='about' element={<About />} />
       <Route  path='contact' element={<Contact />} />
       <Route  path='contact' element={<Contact />} />
       <Route  path='user/:userid' element={<User />} />
       <Route  
       loader={githubInfoLoader}
       path='github'  
       element={<Github />} 
       />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
