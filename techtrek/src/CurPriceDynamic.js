// --------- dependencies ---------
// react-dom v17.0.1
// react v17.0.1

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './CurPrice.css'

const CUR_REQ_INTERVAL = 10000 //Every 10 seconds

function CurPrice() {
    const [price, setPrice] = useState({})


    useEffect(() => {
        const interval = setInterval(() => {
            axios.post('https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/pricing/current',{}, {headers: {'x-api-key': 'wvn4vaj9S24aI8OiWsddf5B1h5z0EjKQ41GnONBy'}})
        .then(res => {
            setPrice(res.data)
        })
        .catch((error) => {
            console.error(error)
        })
    }, CUR_REQ_INTERVAL)

        return () => clearInterval(interval)}, [])

    return (
            <div className="cur-price-list">
                <h1><b>Current TTK Price</b></h1>
                <h2 className="cur-price-item">Time:{price.timestamp}</h2>
                <p className="cur-price-item">{price.price} {price.assetSymbol}</p>
            </div>
            )
}

export default CurPrice
