import React, { Component } from "react";
import './styles/sign.css' ;


class sign extends Component {
	 constructor(){
	    super();
	    this.state = { 
	      aggreements: '0',
	    };
  	}  




  render() {
	    return (
	    <div className="App"> <meta charset="utf-8" />	    	
	   		<h1 id="firstpar">אונליין שמונליין</h1>
	   		<h2 id='aggreementspar'>הסכמים </h2>
	   		<p> יש לך {this.state.aggreements} הסכמים  לחתימה. לחצ/י על ההסכם לתחילת עבודה. </p>
	    	<div id="signformfooter">
	      		<h1 ><span>www.onlineshmonline.com | 050-6559605 | מאפו 27, תל אביב </span></h1>
	    	</div>

	    </div>
	  );
  }
}

 
export default sign;