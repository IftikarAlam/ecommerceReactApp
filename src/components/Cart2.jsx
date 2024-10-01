import React, { useState, useEffect } from "react"
import Data from "./resources/data.json";
import CartItem from "./cartItem"
import EmptyCart from "./resources/emptyCart"
import CarbonNeutral from "./resources/carbonNeutralSVG"
function Cart({ index , amount, totalItems }) {

    const [collectData, collectDataF] = useState([]);
    const data = JSON.parse(JSON.stringify(Data));
    const [items, setItems] = useState([]);
    

    useEffect(() => {
        index != "ini" && (items.length !=0 && items.amount !=0 ? ( 
                setItems(prevItems => {
                    // Use find to locate the item
                    
                    if (itemToUpdate){
                    	let arr = [...items];
                    	arr[index]  = {index: index, amount : amount}
                        // console.log("Same " + items[index])
                        return arr;
                        }
                        
					// If the item is not found, return the original array
                    else
                    	return [...prevItems, { index: index, amount: amount }]
                })
                ) :(items.amount !=0 && setItems(prevItems=> [...prevItems, { index: index, amount: amount }]))
    )

    }, [index, amount]);

    
    return < > {
            index === "ini" ?
            <div className="addToCart">
    			<h3 style={{color:"#EB5B00", fontWeight : "600", marginLeft:"20px"}} >
    				Your Cart(0)
    			</h3>
    			<EmptyCart />
    			</div> : <div className="addToCart">
    			<h3 style={{color:"#EB5B00", fontWeight : "600", marginLeft:"20px"}}>
    				Your Cart({totalItems})
    				
    			</h3>
    			{items.map((item,i,array)=>
    				{
                       
    					if((item.amount) !=0){
                                console.log(item.amount);
                                    return <>
                                    {item.amount != 0 && <CartItem key={i} index={Number(item.index)} amount={Number(item.amount)} />}
                                    {i != items.length-1 && <hr style={{width: "90%", color:"#F6F4EB",opacity:"0.3"}}/>}
                                    </>}
    				}
    			)}
                 <hr style={{width: "90%", color:"#F6F4EB",opacity:"0.3"}}/>
                <div style={{display: "flex",justifyContent: "space-between", paddingRight:"80px"}}><div style={{color:"#999999", fontSize: "14px"}}>Order Total</div><div style={{fontWeight:"bold", fontSize: "20px"}}>$0.00</div></div>
                <div className="footer" style={{padding:"10px"}}>
                    <div className="cartFooter">
                        <CarbonNeutral/>This is <strong style={{padding: "3px"}}>carbon-neutral</strong> delivery
                    </div>
                    <div className="confirmOrder">Confirm Order</div>
                </div>
    		</div>
        }
        </>
};

export default Cart;



