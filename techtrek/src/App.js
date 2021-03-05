import './App.css';
import React, { Component } from 'react';
import Balance from './balance';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'x-api-key': 'wvn4vaj9S24aI8OiWsddf5B1h5z0EjKQ41GnONBy' },
            // TODO: Remove hardcoded account key
            body: JSON.stringify({ accountKey: '9316ce4f-560c-4b02-bb5f-cc1ae9bab7ed' })
        };

        fetch('https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/balance', requestOptions)
            .then(res => res.json())
            .then(json => json)
            .then(data => this.setState({ data: data }))
    }
  render() {
    return (
        <div className="App">
            <script>
                console.log(this.state.data)
            </script>
            <Balance data={ this.state.data }/>
        </div>
    )
  }
}

export default App
