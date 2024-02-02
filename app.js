import React from "react"
import ReactDOM from "react-dom/client"

const Heading = () => (
    <div id="container">
        {console.log('test console')}
        <h1>hello react</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Heading/>)