import React from "react";
function Navbar() {
    return (
        <div className="flex justify-between py-3 flex-col md:flex-row gap-5">
            <div className="flex text-red-500 font-bold text-center justify-center">
               <h1 className="tracking-[.25em] text-4xl">NETFLIX</h1> 
            </div>
            <div className="flex justify-between gap-5 px-5 items-center flex-col sm:flex-row">
                <select className="flex border-red-500 w-20 h-10 bg-red-500 rounded-md text-white">
                    <option>English</option>
                    <option>Malayalam</option>
                </select>
                <button className='text-sm border-2 border-red-500 w-20 h-10 text-red-500 rounded-md'>SignIn</button>
                <button className='text-sm border-2 border-red-500 w-20 h-10 text-red-500 rounded-md'>SignOut</button>
            </div>
        </div>
    )
}
export default Navbar

