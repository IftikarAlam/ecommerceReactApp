import React from "react";


function cardImg(props){
	return<>
		<img src={props.imgSRC} alt="Avatar" style={{backgroundSize:"cover", width:"250px",borderRadius: "5px"}} />
		</>
};

export default cardImg;