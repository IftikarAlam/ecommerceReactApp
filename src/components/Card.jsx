import react from "react";

import CardImg from "./cardImg";

import CardInfo from "./cardInfo";

import React from "react";

import CardButton from	"./cardButton";


function card({index, name, image, category, price, updateCartItem, amount}) {

	
    return < >
        
			<CardImg imgSRC={image} />
			<CardButton index={index} updateCartItem = {updateCartItem} amount={amount} />
			<CardInfo cat={category} name={name} price={price} />	
		
        </>;
};

export default card;