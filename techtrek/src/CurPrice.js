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
            this.setState({ prices: response.data })
        })
        .catch((error) => {
            console.error(error)
        })
    }

    render() {
      var date = new Date(this.state.prices.timestamp * 1000)
      var hours = date.getHours()
      var minutes = "0" + date.getMinutes()
      var seconds = "0" + date.getSeconds()
      var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2)
        return (
            <div className="cur-price-list">
                <h1 className="">Current TTK Price</h1>
                <h2 className="cur-price-item">Time:{formattedTime}</h2>
                <p className="cur-price-item">{this.state.prices.price} {this.state.prices.assetSymbol}</p>
            </div>
        )
    }
}


export default CurPrice
