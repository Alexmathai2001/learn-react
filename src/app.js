import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import Aboutus from "./components/Aboutus"
import Error from "./components/Error"
import { createBrowserRouter,RouterProvider } from "react-router-dom"

const Applayout = () => (
    <div>
        <Header />
        <Body />
    </div>
)

const appRouter = createBrowserRouter([
    {
        path : '/',
        element : <Applayout/>,
        errorElement : <Error/>
    },
    {
        path : '/aboutus',
        element : <Aboutus/>,
        errorElement : <Error/>
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter}/>)