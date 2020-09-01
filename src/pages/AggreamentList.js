import Aggreament from './aggreement';
import React , {Component } from "react";
import './styles/aggreamentlist.css'


	const AggreamentList =({aggreaments}) =>{

		const AggreamentsComponent = aggreaments.map((aggreament) =>{
			let handleclick=()=>{
			AggreamentList.number=aggreament.ordernumber;
		}
			return (
			<Aggreament ordernumber={aggreament.ordernumber} orderstatus={aggreament.orderstatus} onClick={handleclick}/>
			);
		})
	
		return(
			<div id="backdiv">
				<div id="aggrementlist">
					{AggreamentsComponent}
				</div>
			</div>
		);	
}
export default AggreamentList;