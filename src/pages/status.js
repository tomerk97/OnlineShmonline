import React, { Component } from "react";
import './styles/status.css' ;
import AggreamentList from './AggreamentList';
import Final from './Final';
 






class status extends Component {
	 constructor(){
	    super();
	    this.state = { 
	      aggreaments: '0',
	      active:'0'
	    };
  	}  

  render() {
	    return (
	    <div className="App"> <meta charset="ut f-8" />	    	
	   		<h1 id="firstpar">אונליין שמונליין</h1>
	   		<h2 id='statustopic'>סטטוס הזמנה</h2>
	   		<p>
	   		<span>ברוכים הבאים למערכת הההזמנות שלנו.</span><br/>
	   		<span>רוצים לדעת מה עם ההזמנה שלכם? כמה זמן עד שתהיה מוכנה? הגעתם למקום הנכון.</span>
	   		</p>
	   		<Final/>
	    	<div id="statusfooter">
	      		<h1 ><span>www.onlineshmonline.com | 050-6559605 | מאפו 27, תל אביב </span></h1>
	    	</div>

	    </div>
	  );
  }
}

 
export default status;