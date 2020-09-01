import React, { Component } from "react";
import './styles/dashboard.css' ;

 
class dashboard extends Component {
  render() {
	    return (
	    <div className="App">
	      <meta charset="utf-8" />
	      <h1 id="firstpar">אונליין שמונליין</h1>
	      <h2 id="dashboardtopic">דאשבורד</h2>
	     <h3 id="thirdpar">
	     	<span>ברוכים הבאים למערכת הלקוחות שלנו</span><br/>
	    	<span>מוזמנים להגיש לנו בקשה, הערה או סתם מחשבה. כאן בשבילכם ובשביל האתר שלכם -תמיד.</span>
	    	</h3>
	      <div id="dashbuttons">
	        <a href="./#/sign"> <button >לחתימה על הסכם </button></a>
	        <a href="./#/status"><button >סטטוס הזמנה  </button></a>
	        <a href="./#/payments"><button >תשלומים וקבלות  </button></a>
	      </div>

	      <div id="footer">
	      	<h1><span>www.onlineshmonline.com | 050-6559605 | מאפו 27, תל אביב </span></h1>
	      </div>

	    </div>
	  );
  }
}
 
export default dashboard;