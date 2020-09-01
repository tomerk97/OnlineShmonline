import React, { Component } from "react";
import './styles/forgot.css' ;
 
class forgot extends Component {
  render() {
	    return (
	    <div className="App">
	      <meta charset="utf-8" />
	      <h1 id="firstpar">אונליין שמונליין</h1>
	      <h2 id="secondpar">כאן תוכלו לעקוב אחרי ההזמנה שלכם, לחתום על הסכמים, להעביר אלינו תשלום ולשלוח הערות.</h2>
	      <h3 id="thirdpar">הקלידו את מספר הטלפון והלקוח שלכם והיכנסו לאזור האישי.</h3>
	      <div id="inputsdiv">
	          <input id="customernum" type="text" placeholder="כתובת אימייל"></input><br/>
	          <input id="phonenum" type="tel" pattern="[0-9]{10}" placeholder="מספר טלפון"></input><br/>
	          <button >שחזר</button>
	      </div>
	      <h1 id="forgotdiv">
	        <span id="forgot">ככה שכחת?</span>
	      </h1>
			<div id="footer">
	      	<h1><span>www.onlineshmonline.com | 050-6559605 | מאפו 27, תל אביב </span></h1>
	      </div>

	    </div>
	  );
  }
}
 
export default forgot;