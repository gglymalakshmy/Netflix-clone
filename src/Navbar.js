import React from "react";
function Navbar(){
    return(
        <div className="flex">
            <div>
                Netflix
            </div>
           <div className="flex">
            <p>Home</p>
            <p>Contacts</p>
            <button>SignIn</button>
            <button>SignUp</button>
           </div>
        </div>
    )
}
export default Navbar