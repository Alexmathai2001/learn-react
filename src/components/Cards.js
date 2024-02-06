

const Cards = (props) => {
    const {data} = props
    return(
    <div className="w-72 h-60 my-4 mx-4  bg-white hover:shadow-lg rounded-sm p-3 flex flex-col justify-center">
        <p className="text-sm font-medium text-gray-500 flex justify-center">Restaurant Details</p>
        <p className="w-full flex justify-center font-bold py-4 text-red-500 text-center text-sm">{data.info.name}</p>
        <div className="flex justify-evenly">
            <div>
                <p className="text-xs my-3">Rating : </p>
                <p className="text-xs my-3">cusines : </p>
                <p className="text-xs my-3">Price : </p>
                <p className="text-xs my-3">Delivery Time : </p>
            </div>
            <div>
                <p className="text-xs my-3 font-semibold capitalize">{data.info.avgRating}</p>
                <p className="text-xs my-3 font-semibold uppercase w-52 truncate">{data.info.cuisines.join(",")}</p>
                <p className="text-xs my-3 font-semibold ">{data.info.costForTwo}</p>
                <p className="text-xs my-3 font-semibold "> {data.info.sla.deliveryTime} min</p>
            </div>
        </div>
    </div>
    )
}



export default Cards