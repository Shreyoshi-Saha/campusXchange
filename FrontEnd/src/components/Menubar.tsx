import "./App.css"

type menuProp = {
  setMenu:any
}


const Menubar = (props:menuProp) => {
  return (
    <div className="flex align-middle justify-center shadow-sm h-10 p-2">
      {/* <h1 onClick={()=> props?.setMenu("Shirt")} className="hover:underline hover:text-blue-500 ml-45 font-bold cursor-pointer">All</h1>
      <h1 onClick={()=> props?.setMenu("phones")} className="hover:underline hover:text-blue-500 ml-10 font-bold cursor-pointer">Books</h1>

      <h1 onClick={()=> props?.setMenu("Jacket")} className="hover:underline hover:text-blue-500 ml-10 font-bold cursor-pointer">Engineering Drawing Equipments</h1>
      <h1 onClick={()=> props?.setMenu("phones")} className="hover:underline hover:text-blue-500 ml-10 font-bold cursor-pointer">Others</h1> */}
      {/* <h1 onClick={()=> props?.setMenu("House")} className="ml-5 cursor-pointer">House</h1>
      <h1 onClick={()=> props?.setMenu("Scooters")} className="ml-5 cursor-pointer">Scooters</h1>
      <h1 onClick={()=> props?.setMenu("Bike")} className="ml-5 cursor-pointer">Bike</h1>
      <h1 onClick={()=> props?.setMenu("Apartments")} className="ml-5 cursor-pointer">Apartments</h1> */}
    </div>
  )
}

export default Menubar
