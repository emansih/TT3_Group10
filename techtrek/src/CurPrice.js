import React from 'react'
import axios from 'axios'
import './CurPrice.css'

class CurPrice extends React.Component {

    constructor() {
        super()
	    this.state = {
            prices: {}
        }
        axios.post('https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/pricing/current',{}, {headers: {'x-api-key': 'wvn4vaj9S24aI8OiWsddf5B1h5z0EjKQ41GnONBy'}})
        .then((response) => {
            console.log(response)
            this.setState({ prices: response.data })
            console.log(this.state.prices)
        })
        .catch((error) => {
            console.error(error)
        })
    }

    render() {

        return (
            <div className="cur-price-list">
                <h1 className="">Current TTK Price</h1>
                <h2 className="cur-price-item">Time:{this.state.prices.timestamp}</h2>
                <p className="cur-price-item">{this.state.prices.price} {this.state.prices.assetSymbol}</p>
            </div>
        )
    }
}


export default CurPrice
