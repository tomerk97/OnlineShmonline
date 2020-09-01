import React, { Component } from "react";
import './styles/payments.css' ;



class payments extends Component {
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
	   		<h2 id='paymentstopic'>תשלומים</h2>
	   		<p id="paymnetspar">
	   		<span>ברוכים הבאים למערכת התשלומים שלנו.</span><br/>
	   		<span>אתם מוזמנים לראות את הקבלות שלכם כאן, לעקוב אחרי תשלומים וגם לשלם את היתרה שלכם.</span>
	   		</p>
	    	<div id="paymentfooter">
	      		<h1 ><span>www.onlineshmonline.com | 050-6559605 | מאפו 27, תל אביב </span></h1>
	    	</div>

	    </div>
	  );
  }
}

 
export default payments;