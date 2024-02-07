import { useEffect,useState } from "react"
import { MENU_API } from "../constants"


const useMenu = (resID) => {

    const [resInfo,setresInfo] = useState()

    useEffect(() => {
        fetchData()
    },[])

    const fetchData = async () => {


        const data  = await fetch(MENU_API + resID)

        const json = await data.json()

        setresInfo(json.data)
    }

    return resInfo
}

export default useMenu