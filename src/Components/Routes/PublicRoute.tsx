import SignIn from '../Pages/SignIn'
import About from '../Pages/About'
import SignUp from "../Pages/SignUp"
import { createBrowserRouter } from 'react-router-dom'
import HomeLayout from '../Layout/HomeLayout'
import { Navigate } from 'react-router-dom'

 const Index = createBrowserRouter ([
    {
        element: <HomeLayout/>,
        children: [
            {
                index: true,
            element:  <About />,
            },
            {
                path: "/signup",
            element:  <SignUp />,
            },
            {
                path: "/signin",
                element: <SignIn />
            },
             {
               path: "*",
                 element: <Navigate
             to='/login' />
         }
 
        ]
    }
])
  
export default Index;       