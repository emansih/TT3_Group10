import React, { useState, useEffect } from 'react';


function Lucas() {
    const [fqty, setQty] = useState("")

    const handleChange = e => {
        setQty(e.target.value)
    }
    async function Buy() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'x-api-key': 'wvn4vaj9S24aI8OiWsddf5B1h5z0EjKQ41GnONBy' },
            // TODO: Remove hardcoded account key
            body: JSON.stringify({ accountKey: '9316ce4f-560c-4b02-bb5f-cc1ae9bab7ed', 'orderType': 'BUY', 'assetAmount': fqty })
        };
        const json = await fetch('https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/add', requestOptions);
    }
    async function Sell() {


        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'x-api-key': 'wvn4vaj9S24aI8OiWsddf5B1h5z0EjKQ41GnONBy' },
            // TODO: Remove hardcoded account key
            body: JSON.stringify({ accountKey: '9316ce4f-560c-4b02-bb5f-cc1ae9bab7ed', 'orderType': 'SELL', 'assetAmount': fqty })
        };
        const response = await fetch('https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/add', requestOptions);
    }

    return (
        <div className="App">
            <p class="App-text">Enter Amount:</p>
            <form>
                <input type="number" value={fqty} onChange={handleChange} />
            </form>
            <p> </p>
            <p> Transaction type: </p>
            <button disabled={!fqty} className="buyButton" onClick={Buy} value="BUY"> Buy </button>
            <button disabled={!fqty} className="sellButton" onClick={Sell} value="SELL"> Sell </button>
            <h5>Quantity chosen: {fqty}</h5>
            <p> </p>

        </div>
    )
}
export default Lucas;