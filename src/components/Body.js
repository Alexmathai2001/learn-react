import Cards from "./Cards"
import { useState } from "react"
import data from "../utils/data"

const Body = () => {
    const [List,setList] = useState(data)
    return (
    <div>
        <div className="ms-5 mt-5 bg-slate-100 w-full">
        <button onClick={() => {
            const newList = List.filter((res) => {
                return res.age < 24
            })
            setList(newList)
        }} 
    className="px-3 py-1 bg-black text-white text-sm rounded-full">
    Below 24
</button>
        </div>
        <div className="px-10 pt-10 flex bg-slate-100">
            {
                List.map((element) => (
                    <Cards key={element.id} data={element}/>
                ))
            }
        </div>
    </div>
    )
}



export default Body