import React from 'react';
import logo from '../Icons/chibi-twitch-screen-gif.gif'
import "tailwindcss/tailwind.css"

const Navbar = () => {
    return(
        <div className="flex items-center">
            <img src={logo} alt="loading..." style={{width:"130px", height:"130px"}} />
        </div>
    )
}

export default Navbar;