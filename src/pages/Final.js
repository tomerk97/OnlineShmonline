import React, { Component } from "react";
import Aggreament from './aggreement';
import './styles/aggreamentlist.css'





class FinalList extends Component{
	constructor(){
	    super();
	    this.state = { 
	     aggs : [{ordernumber:1,orderstatus:true,lastupdate:'12.9.2019'},{ordernumber:2,orderstatus:false,lastupdate:'28.8.2019'},{ordernumber:3,orderstatus:false,lastupdate:
	     	'28.4.2019'}],
	     number:'',
	     active:''
	    };
	    this.handleClick = this.handleClick.bind(this);

	}

	handleClick=(value,secvalue)=>{
		if(this.state.active!=secvalue)
			this.setState({number:value,active:secvalue});
		else
			this.setState({active:'',number:''});
	}


	render() {



	let AggreamentsComponent = this.state.aggs.map((aggreament) =>{

			if(aggreament.ordernumber===this.state.active){
			return (
				<Aggreament className="ordernumber2" ordernumber={aggreament.ordernumber} orderstatus={aggreament.orderstatus}
				onClick={()=>this.handleClick(aggreament.lastupdate,aggreament.ordernumber)}/>
				);
		}
			if(aggreament.ordernumber!=this.state.active){
			return (
				<Aggreament className="ordernumber1" ordernumber={aggreament.ordernumber} orderstatus={aggreament.orderstatus}
				onClick={()=>this.handleClick(aggreament.lastupdate,aggreament.ordernumber)}/>
				);
		}
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