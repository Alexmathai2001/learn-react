import useMenu from "../utils/hooks/useMenu";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";


const Menu = () => {

    const  {resID}  = useParams()

    const resInfo = useMenu(resID)
    
    const { name, cuisines } = resInfo?.cards[0]?.card?.card?.info || {};
    const itemCards = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || [];


    return (
        <div className="w-full flex flex-col items-center h-screen bg-slate-200 p-5">
            <div className="w-3/4 bg-white p-10 rounded-3xl h-screen mt-6">
                <div className="flex flex-col items-center w-full">
                    <p className="font-bold uppercase my-5 text-xl">{name}</p>
                    <p className="mb-3 font-bold w-full text-gray-500">Cuisines : {cuisines}</p>
                    <div className="text-sm">
                    {itemCards.map((item) => (
                            <p key={item?.card?.info?.id}>{item?.card?.info?.name}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;
