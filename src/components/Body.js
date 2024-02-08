import {Cards,PromotedCards} from "./Cards"
import { useState,useEffect } from "react"
import Shimmer from "./Shimmer"
import useOnlineStatus from "../utils/hooks/useOnlineStatus"
import { Link } from "react-router-dom"
import { list } from "postcss"

const Body = () => {
    const [List,setList] = useState([])
    const [searchKey,setsearchKey] = useState("")
    const [filteredList,setfilteredList] = useState([])
    const status = useOnlineStatus()
    const RestaurantCardPromoted = PromotedCards(Cards)

    useEffect(() => {
        fetchData()
    },[])

    //fetching data from swiggy api
    const fetchData = async () => {
        const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.0488633&lng=76.3260992&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
        const data = await response.json()
        setList(data?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setfilteredList(data?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    console.log(List);

    //instead of loading screen
    if(List.length === 0){
        return <Shimmer/>
    }


    if(status === false){
        return <h1>Oops! Check your internet connection!!</h1>
    }

    return (
    <div>
        <div className="ms-5 mt-5 bg-slate-100 w-full">
        {/* button for filtering top rated restaurants */}
            <button onClick={() => {
                const newList = List.filter((res) => {
                    return res.info.avgRating > 4.3
                })
                setList(newList)
            }} 
        className="px-3 py-1 bg-black text-white text-sm rounded-full">
        Above 4.3
            </button>
            <input type="text" className="border-2 rounded-s-lg ms-4 py-1 text-sm px-3" value={searchKey} placeholder="Search..." onChange={(e) => {
                setsearchKey(e.target.value)
            }}></input>
            <button className="text-xs rounded-e-lg bg-blue-500 py-2 px-3 font-bold text-white" onClick={() => {
                console.log(searchKey);
                const filteredRest = List.filter((res) => {
                    return res?.info?.name.toLowerCase().includes(searchKey.toLowerCase())
                })
                setfilteredList(filteredRest)
            }}>Search</button>
        </div>
        <div className="px-10 pt-10 flex flex-wrap bg-slate-100">
            {
                filteredList.map((element) => (
                    <Link key={element.id} 
                    to={'/restaurant/'+element.info.id}>

                        {element.info.availability.opened ? (< RestaurantCardPromoted  data={element}/>) : (<Cards  data={element}/>)}
                    </Link>
                ))
            }
        </div>
    </div>
    )
}



export default Body