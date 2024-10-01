import React, { useState, useEffect } from "react";
import Card from "./Card";
import Data from "./resources/data.json";
import Cart from "./Cart";

function App() {

    // const [itemIndex, setItemIndex] = useState("ini");
    
    const [itemQuantity, setItemQuantity] = useState(0);
    const [cart, setCart] = useState([]);
    const [update, setUpdate] = useState();
    const data = JSON.parse(JSON.stringify(Data));
    
    const [processedArray,setProcessedArray]= useState(()=>{
        const dataUpdated = data?.map((obj,indexOriginal)=>({...obj,indexMe: indexOriginal, amount: 0}));
        return dataUpdated
    });
    
    
    function updateCartItem(indexRecieved, incrementRecieved){
        setProcessedArray(()=>{
            const temp = [...processedArray];
            temp[indexRecieved].amount =temp[indexRecieved].amount + (incrementRecieved ? 1 : -1);
            return temp;

        });
    }  

    return ( < >
    	
    	{/*<Test array = {[1,2,3]} />*/}
        <h2>Desserts</h2>
        
        <div className = "gridManipulation" > {
            processedArray?.map((i, index) =>
                <div className="cardItem">

                		<Card 
                		key={index}
                		index={index} name ={i.name}
                		image={i.image.desktop}
                		catagory = {i.category}
                		price ={i.price}
                		updateCartItem = {updateCartItem}
                        amount = {i.amount}
                		/>
                    
                </div>
            )

        }
        {/*{console.log(data)}*/}
        </div>
         <Cart processedData={processedArray} updateCartItem ={updateCartItem} />
        </>
        );

    };

    export default App;



// Rough

    //  function updateCartItem(indexRecieved, incrementRecieved){
    
    //     if(items.length === 0){
    //         let arr = [{index : indexRecieved , amount : 1}];
    //                     setItems(arr);
            
    //     }
    //     else {
    //         setItems(prevItems => {
    //             const itemToUpdate = prevItems.find(item => item.index === indexRecieved)
    //             const itemIndex = prevItems.findIndex(item => item.index === indexRecieved)
                
    //             if (itemToUpdate){
    //                     let arr = [...items];
    //                     let updatedAmount = arr[indexRecieved].amount + (incrementRecieved ? 1 : -1);
    //                     arr[itemIndex]  = {index: itemIndex, amount : updatedAmount}
    //                     // console.log("Same " + items[index])
    //                     // setAmount(()=>updatedAmount)
                       
    //                     return arr;
    //                     }
    //              else  
    //                     return [...prevItems , {index : indexRecieved , amount : 1}]
    //             })
    //     }
    //     processedArray[indexRecieved].amount=items[indexRecieved].amount;
            
    // }
