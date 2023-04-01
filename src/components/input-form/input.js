import React from "react";
import "./input.css";



function MyComponent(){




  var name="";
      var email="";
   
   function fullName(){
      
   console.log("My name is", name);
   console.log("My email is", email);
   
   }



   return(
    <div className="input-div">
    <div id="div2"><label >Name</label>
    <input onChange={(e)=>{name = e.target.value}} placeholder="Abhishek"></input></div>
    <div id="div1"><label >Email</label>
    <input onChange={(e)=>{email = e.target.value}}  placeholder="abhi@gmail.com"></input></div>
    <button type="submit" onClick={fullName}>Submit</button>
    <div id="result">
      <h2></h2>
      <h2 ></h2>
    </div>
    </div>

   );
}

export default MyComponent;