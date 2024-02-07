import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import Aboutus from "./components/Aboutus"
import Error from "./components/Error"
import Menu from "./components/Menu"
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom"

const Applayout = () => (
    <div>
        <Header />
        <Outlet />
    </div>
)

const appRouter = createBrowserRouter([
    {
        path : '/',
        element : <Applayout/>,
        children : [
            {
                path : '/',
                element : <Body />
            },
            {
                path : '/aboutus',
                element : <Aboutus/>
            },
            {
                path : '/restaurant/:resID',
                element : <Menu />
            }
        ],
        errorElement : <Error/>
    }
    
])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter}/>)