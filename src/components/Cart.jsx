import React, { useState, useEffect } from "react"
import Data from "./resources/data.json";
import CartItem from "./cartItem"
import Modal from "./Modal"
import EmptyCart from "./resources/emptyCart"
import CarbonNeutral from "./resources/carbonNeutralSVG"
import ConfirmOrder from "./resources/confirmOrder"

function Cart({ updateCartItem, processedData }) {
    // const data = JSON.parse(JSON.stringify(Data));
    const [totalItems, setTotalItems] = useState(0);
    const [totalBill, setTotalBill] = useState(0);
    

    //Modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    useEffect(()=>{

        let temp = 0, temp2=0;
        processedData.map(item =>{
         temp = temp + item.amount;
         temp2 =  temp2 + item.price * item.amount
     } )
        // console.log(temp +" , " + totalItems);

        setTotalItems(temp);
        setTotalBill(temp2);
        // console.log("wsp");
    },[processedData]);
    
    
    return < >

    {
            totalItems === 0 ?
            <div className="addToCart">
                <h3 style={{color:"#EB5B00", fontWeight : "600", marginLeft:"20px"}} >
                    Your Cart({totalItems})
                    
                </h3>
                <EmptyCart />
                </div> : <div className="addToCart">
                {/*<button onClick={()=>alert("786")}>Hello</button>*/}
                
                <h3 style={{color:"#EB5B00", fontWeight : "600", marginLeft:"20px"}}>
                    Your Cart({totalItems})
                    
                </h3>
                {processedData.map((item,i,array)=>
                    {
                       
                        if((item.amount) !=0){
                                {/*console.log(item.amount);*/}
                                    return <>
                                    {item.amount != 0 && <CartItem key={i} index={Number(item.indexMe)} amount={Number(item.amount)} updateCartItem={updateCartItem} icons ={1}/>}
                                    <hr style={{width: "90%", color:"#F6F4EB",opacity:"0.3"}}/>
                                    </>}
                    }
                )}
                {/*<hr style={{width: "90%", color:"#F6F4EB",opacity:"0.3"}}/>*/}
                <div style={{display: "flex",justifyContent: "space-between", paddingRight:"80px"}}><div style={{color:"#999999", fontSize: "14px"}}>Order Total</div><div style={{fontWeight:"bold", fontSize: "20px"}}>${totalBill}</div></div>
                <div className="footer" style={{padding:"10px"}}>
                    <div className="cartFooter">
                        <CarbonNeutral/>This is <strong style={{padding: "3px"}}>carbon-neutral</strong> delivery
                    </div>
                    {/*Modal*/}

                <div className="confirmOrder" onClick={openModal}>Confirm Order</div>
                    <Modal isOpen={isModalOpen} style= {{display:"flex", alignItems: "center", justifyContent:"center"}} onClose={closeModal}>
                        <ConfirmOrder/>
                        <h2 style={{marginLeft:"5px"}}>Order Confirmed</h2>
                        <p style={{color:"#999999" , marginTop:"-10px", fontSize:"12px"}}>We hope you enjoy your food!</p>
                        {/*<p >This is the content of the modal.</p>*/}
                        <div className="modalStyle">
                        {processedData.map((item,i)=>
                                    {
                                        return <>
                                           {Number(item.amount)!==0 && <span> <CartItem key={i} index={Number(item.indexMe)} amount={Number(item.amount)} updateCartItem={updateCartItem} icons ={0}/>
                                            <hr style={{width: "90%", color:"#F6F4EB",opacity:"0.3"}}/> </span>}
                                            </>
                                         
                                    }
                                )
                        }
                        </div>
                        <div style={{display: "flex",justifyContent: "space-between", paddingRight:"80px"}}><div style={{color:"#999999", fontSize: "14px", marginTop: "10px"}}>Order Total</div><div style={{fontWeight:"bold", fontSize: "20px"}}>${totalBill}</div></div>
                        <div className="confirmOrder" style={{marginLeft: "100px"}} onClick={()=>window.location.reload()}>Start new order</div>
                    </Modal>
                    {/*<div className="confirmOrder">Confirm Order</div>*/}
                </div>
            </div>
        } 
        </>
};

export default Cart;
