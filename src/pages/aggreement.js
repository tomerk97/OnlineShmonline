import React , {Component } from "react";
import './styles/aggreament.css' ;

const Aggreament =({ordernumber,orderstatus,onClick,className}) =>{

	let orderstatusstring =  "בתהליך" ;
	if(orderstatus){
		orderstatusstring = "הושלמה";
	}
	
	return(
		<div id="aggreament" onClick={onClick} className={className} >
			<p id="ordernumber" >הזמנה :{ordernumber}</p>
			 <p id="orderstatus">סטטוס : {orderstatusstring}</p>
			 
		</div>
		);
}
export default Aggreament;