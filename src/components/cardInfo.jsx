import React from "react";


function cardInfo(props){
	return <div className={{padding: "3px"}}>
		<h4 className="item-catagory">{props.cat}</h4>
            <p className="item-title" style={{fontSize: "16px"}}>{props.name}</p>
            <p className="price">${props.price}</p>

		</div>;
};

export default cardInfo;