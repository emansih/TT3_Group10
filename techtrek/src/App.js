<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import Home from './Home';
import { getToken, removeUserSession, setUserSession } from './Utils/Common';
//
function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setLoading] = useState(true);

  const checkLoggedIn = () => {
    if (getToken() === null) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
    return (getToken())
  }

  useEffect(() => {
    checkLoggedIn();
    setLoading(false);
  }, [isLoading])

  // if (!isLoggedIn) {

  return (

    <div className='App'>
      {isLoading ? (
        <div> Still loading </div>
      ) : (<BrowserRouter>
        <div>
          <div className='header'>
            <NavLink exact activeClassName='active' to='/'>
              Home
              </NavLink>
            {isLoggedIn ? (
              <>
                <NavLink activeClassName='active' to='/dashboard'>
                  Dashboard
                  </NavLink>
                <small>(Access with token only)</small>
              </>
            ) : (
              <>
                <NavLink activeClassName='active' to='/login'>
                  Login
                  </NavLink>
                <small>(Access without token only)</small>
              </>
            )}
          </div>
          <div className='content'>
            <Switch>
              <Route exact path='/' component={Home} />
              {isLoggedIn ? (
                <Route path='/dashboard' component={Dashboard} />
              ) : (
                <Route path='/login' component={Login} />
              )}
            </Switch>
          </div>
        </div>
      </BrowserRouter>)}


=======
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

//   // POST Buy and sell amount
//   const buyAmount = () =>{
//   setError(null)
//   setLoading(true);
//  // axios.post("https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/add",
//   { accountkey : "9316ce4f-560c-4b02-bb5f-cc1ae9bab7ed", orderType : "BUY", assetAmount : fQty}, {
    
//   }).then(response =>)
// }


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
>>>>>>> a70f42b5a8d3927b996e686eb364ab25d8188988
    </div>
  );


}


<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> a70f42b5a8d3927b996e686eb364ab25d8188988
