import React, { useState } from "react";
import Button1 from "./resources/Button1";
import Decrement from "./resources/Decrement";
import Increment from "./resources/Increment";

function cardButton({ index, updateCartItem,amount }) {

    
        // console.log("amount",amount)
    return < >

        {
            amount === 0 ? <span onClick={()=>updateCartItem(index, true)} ><Button1 /></span> :
            <div className="card-button btn2">
			 <button onClick={()=>updateCartItem(index, false)} style={{marginRight: "20px", backgroundColor:"transparent", border: "transparent"}}>
				<Decrement />
			 </button>
			 {amount}
			 <button onClick={()=>updateCartItem(index, true)} style={{marginLeft: "20px", backgroundColor:"transparent", border: "transparent"}}>
				<Increment />
			 </button>
			</div>
        }
        </>
}

export default cardButton;