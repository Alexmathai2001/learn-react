import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";

const Header = () => {

    const [buttonName,setbuttonName] = useState('Login')
    const status = useOnlineStatus()

    return (
    <div className="flex justify-between w-full bg-blue-900 text-white px-7 py-4">
        <Link to='/' className="font-bold text-lg">Logo Here</Link>
        <div className="flex justify-evenly gap-x-5">
            <p>Status : {status ? "online" : "offline"}</p>
            <Link to='/aboutus' href="">About us</Link>
            <a href="">Contact us</a>
            <a href="">News Letter</a>
            <button onClick={() => {
                buttonName === "Login"
                ? setbuttonName('Logout')
                : setbuttonName('Login')
            }} className="bg-black hover:bg-gray-700 text-sm w-20 rounded-full text-white">{buttonName}</button>
        </div>
    </div>
    )
}

export default Header