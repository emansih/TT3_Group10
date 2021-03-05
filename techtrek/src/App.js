// Done by: Lucas  5 March 2021

import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useState } from "react"



// ///Buy Button
// function BuyButton(props) {
//   return  <button className="buyButton" onClick={Buy}> Buy </button>

// }
// //Sell Button
// function SellButton(props) {
//   return  <button className="sellButton" onClick={Sell}> Sell </button>

// }

// POST Buy and sell amount
// const buyAmount = () =>{
//   setError(null)
//   setLoading(true);
//  // axios.post("https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/add",
//   {})
// }


// var amount = this.state.quantity;
// console.log(value);


//BuySellContainer
// function BuySellContainer(props){

//   return(
//     <div className="App">
//       <p> Account Key: "9316ce4f-560c-4b02-bb5f-cc1ae9bab7ed" </p>
//       <p class="App-text">Enter Amount:</p>
//       <form>
//         <input type="text" value={qty} onChange={handleChange}/>
//       </form>
//       <p> </p>
//       <p> Transaction type: </p>
//       <BuyButton/>
//       <SellButton/>
//       <h5>First name: {qty}</h5>
//       <p> </p>
//     </div>
//   );
// }


function App() {

  const [fqty, setQty] = useState("")

  const handleChange = e => {
    setQty(e.target.value)
   
   
  }

  function Buy() {
    alert("You bought " + fqty);
  }
  function Sell() {
    alert("You sold " + fqty);
  }

  // To take the parameters: AccountKey, type: BUY/SELL and Qty to do a POST request to the API 


  return (
    <div className="App">
      <p> Account Key: "9316ce4f-560c-4b02-bb5f-cc1ae9bab7ed" </p>
      <p class="App-text">Enter Amount:</p>
      <form>
        <input type="number" value={fqty} onChange={handleChange}/>
      </form>
      <p> </p>
      <p> Transaction type: </p>
      <button disabled ={!fqty} className="buyButton" onClick={Buy} value="BUY"> Buy </button>
      <button disabled ={!fqty} className="sellButton" onClick={Sell} value ="SELL"> Sell </button>
      <h5>Quantity chosen: {fqty}</h5>
      <p> </p>
    </div>
  );
}


export default App;
