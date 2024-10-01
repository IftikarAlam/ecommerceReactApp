import React, {useState} from "react";
import Data from "./resources/data.json";
import RemoveItem from "./resources/removeItem";
function cartItem({index, amount, updateCartItem, icons }){
	const data = JSON.parse(JSON.stringify(Data));
	const [indexC, setindexC] = useState(index);
	
    
    return <>
        <h4 style={{marginLeft: !icons && "64px"}}>{data[index].name}</h4> 
        <p>
        <div style={{display: "flex", justifyContent: "space-between", paddingRight:"30px"}}>
        <div>{!icons &&<span><img src={data[index].image.mobile} style={{width : "57px", height : "54px", borderRadius: "7px", marginRight : "7px", marginTop:"-42px"}}/></span>}<span style={{color:"hsl(14, 86%, 42%)"}}>{amount}x</span> &ensp; <span style={{color:"#b3b3b3"}}>@ ${ data[index].price }</span> 	{icons?<span style={{color:"#999999"}}>
            ${(data[index].price) * (amount) }</span>:null}</div>
            <div>{icons ? <button style={{cursor:"pointer", backgroundColor:"transparent", border: "none"}} onClick={()=>updateCartItem(indexC, false)}><RemoveItem /></button> 
            : 
            <span style={{}}>${(data[index].price) * (amount) }</span>}
            </div>
        </div>
        </p>
         </>
};

export default cartItem;