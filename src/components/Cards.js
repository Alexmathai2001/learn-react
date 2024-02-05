import Data from "./Data"

const Cards = (props) => {
    const {Data} = props
    return(
    <div className="w-56 my-4 mx-4 h-60 bg-white hover:shadow-lg rounded-sm p-3 flex flex-col justify-center">
        <p className="text-sm font-medium text-gray-500 flex justify-center">Student Details</p>
        <div className="flex justify-evenly">
            <div>
                <p className="text-xs my-3">Name : </p>
                <p className="text-xs my-3">Dept : </p>
                <p className="text-xs my-3">Father : </p>
                <p className="text-xs my-3">Mother : </p>
            </div>
            <div>
                <p className="text-xs my-3 font-semibold capitalize">{Data.name}</p>
                <p className="text-xs my-3 font-semibold uppercase">{Data.dept}</p>
                <p className="text-xs my-3 font-semibold capitalize">{Data.father}</p>
                <p className="text-xs my-3 font-semibold capitalize">{Data.mother}</p>
            </div>
        </div>
        <p className="flex justify-center text-xs">Message : <span className="font-medium text-green-500 capitalize">{Data.message}</span></p>
    </div>
    )
}



export default Cards