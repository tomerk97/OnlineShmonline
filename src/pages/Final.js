import React, { Component } from "react";
import Aggreament from './aggreement';
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
		let b=3;
}



class FinalList extends Component{
	constructor(){
	    super();
	    this.state = { 
	     aggs : [{ordernumber:1,orderstatus:true,lastupdate:'12.9.2019'},{ordernumber:2,orderstatus:false,lastupdate:'28.8.2019'}],
	     number:''
	    };
	    this.handleClick = this.handleClick.bind(this);

	}

	handleClick=(value)=>{

		this.setState({number:value});
	}


	render() {



let AggreamentsComponent = this.state.aggs.map((aggreament) =>{

		return (
			<Aggreament ordernumber={aggreament.ordernumber} orderstatus={aggreament.orderstatus}
			onClick={()=>this.handleClick(aggreament.lastupdate)}/>
			);
		})

    return (
      <div id="backdiv">
			<div id="aggrementlist">
				{AggreamentsComponent}
			</div>
      	<div>
			<p  id="description">דיווח אחרון בתאריך : {this.state.number}</p>
		</div>
      </div>
    );
  }
}

export  default FinalList;