import React, { Component } from 'react'

class TransactionTable extends Component {
    state = {
        transactionData : [],
    }

    tableHeader = () => {
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
    tableBody = () => {
        return (
            <tr>
                <td></td>
            </tr>
        )
    }
    retrieveTransactionData() {
        axios.post('https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/view', { accountKey: '9316ce4f-560c-4b02-bb5f-cc1ae9bab7ed'}, {
          headers: {
            'x-api-key': 'wvn4vaj9S24aI8OiWsddf5B1h5z0EjKQ41GnONBy'
          }
        }).then(response => {
            this.setState({
    
            })
            console.log(response.data.transactionId);
    
        }).catch(error => {
          if (error.response.status === 400) setError(error.response.data.message);
          else setError("Something went wrong. Please try again later.");
        });
    }
    Table = () => {
            return (
                <div>
                <table>
                    <TableHeader />
                </table>
                <button onClick={(retrieveTransactionData)}> Retrieve Transaction Data</button>
                </div>
            )
    }
    render() {
        const { transactionData } = this.state; 
        return (
            <div className="Container">
                <Table />
            </div>

        )
    }
}



export default TransactionTable