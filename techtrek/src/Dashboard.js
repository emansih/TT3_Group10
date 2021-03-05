import React from 'react';
import ApiCall from './ApiCall';

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = { dataToDisplay: [] }
    }

    async componentDidMount() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'x-api-key': 'wvn4vaj9S24aI8OiWsddf5B1h5z0EjKQ41GnONBy' },
            // TODO: Remove hardcoded account key
            body: JSON.stringify({ accountKey: '9316ce4f-560c-4b02-bb5f-cc1ae9bab7ed' })
        };
        const response = await fetch('https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/balance', requestOptions);
        const data = await response.json();
        this.setState({ 'dataToDisplay': data });
    }


    render() {
        return (
            <div className="Dashboard">
                <ApiCall dataToDisplay={ this.state.dataToDisplay } />
            </div>
        )
    }

}

export default Dashboard;