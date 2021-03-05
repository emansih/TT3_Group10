import React, { Component } from 'react'
import axios from 'axios';

class TransactionTable extends Component {
    state = {
        transactionData: [],
    }

    TableHeader = () => {
        return (
            <thread>
                <tr>
                    <th>Transaction ID</th>
                    <th>Time of Transaction</th>
                    <th>Buy/Sell</th>
                    <th>Asset Symbol</th>
                    <th>Asset Amount </th>
                    <th>Asset Price</th>
                    <th>Cash Amount</th>
                </tr>
            </thread>

        )
    }
    TableBody = () => {
        const { transactionData } = this.state;
        const rows = transactionData.map((row, index) => {
            return (
                <tr key={index}>
                    <td>row.transactionId</td>
                    <td>row.orderType</td>
                    <td>row.timestamp</td>
                    <td>row.assetSymbol</td>
                    <td>row.assetAmount</td>
                    <td>row.assetPrice</td>
                    <td>row.cashAmount</td>
                </tr>
            )
        })
        return <tbody>{rows}</tbody>
    }
    retrieveTransactionData = () => {
        axios.post('https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/view', { accountKey: '9316ce4f-560c-4b02-bb5f-cc1ae9bab7ed' }, {
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'wvn4vaj9S24aI8OiWsddf5B1h5z0EjKQ41GnONBy'
            }
        }).then(response => {
            this.setState({
                transactionData: response.data
            })
            console.log(response.data);

        }).catch(error => {
        });
    }
    Table = () => {
        return (
            <div>
                <table>
                    <this.TableHeader />
                    <this.TableBody />
                </table>
                <button onClick={() => this.retrieveTransactionData()}> Retrieve Transaction Data</button>
            </div>
        )
    }
    render() {
        return (
            <div className="Container">
                <this.Table />
            </div>

        )
    }
}

export default TransactionTable