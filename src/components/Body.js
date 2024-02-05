import Cards from "./Cards"
import Data from "./Data"

const Body = () => (
    <div className="px-10 pt-10 flex bg-slate-100">
        {
            Data.map((element) => (
                <Cards key={element.id} Data={element}/>
            ))
        }
        

    </div>
)



export default Body