import { useState } from "react";

const Header = () => {

    const [buttonName,setbuttonName] = useState('Login')

    return (
    <div className="flex justify-between w-full bg-blue-900 text-white px-7 py-4">
        <h1 className="font-bold text-lg">Logo Here</h1>
        <div className="flex justify-evenly gap-x-5">
            <a href="">About us</a>
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