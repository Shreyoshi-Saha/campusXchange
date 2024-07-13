import logo from "../assets/logo.png"

import search from "../assets/search.png"
import Login from "./Login"
import { useState } from "react"
// import { Link } from 'react-router-dom';

type searchProp = {
  setSearch:any
}



const Navbar = (props:searchProp) => {

  const [loginPop,setLoginPop] = useState(false)

  
    const handleClick = () => {
      
      window.location.href = 'http://localhost:3000/page';
    };

  return (
    <>
    <div className="flex p-4  bg-lime-300 shadow-md">
      <img src={logo} className="w-20 h-16"/>
      {/* <div className="flex border-2 border-spacing-1 w-64 p-2 border-black ml-5 bg-white">
        <img src={lens} className="w-6 h-5 mt-1"/>
        <input  placeholder="Location" className="ml-3 outline-none "/>
        <img src={arrow} className="w-8 h-7"/>
      </div> */}


      <div className="flex  rounded-lg  h-12 ml-64 border-2 border-black bg-white">
        <input onChange={(e)=> props?.setSearch(e.target.value)} placeholder="Search..." className="ml-3  w-96 outline-none"/>
        <img src={search}/>
      </div>
      
      
      <div className="w-28 flex h-12 p-2 ml-80 cursor-pointer rounded-full border-4 bg-slate-100 border-yellow-500">
        <h1 onClick={handleClick} className="font-bold text-lg ml-3">+ SELL</h1>
      </div>

      <div onClick={()=> setLoginPop(!loginPop)} className="flex h-12 p-3 ml-6 cursor-pointer underline hover:no-underline">
        <h1 className="font-bold text-lg">Login</h1>
      </div>
    </div>
    {loginPop && <Login setLoginPop={setLoginPop}/>}
    </>
    
  )
}

export default Navbar
