import React from 'react';

class dashboard extends React.Component {
    async componentDidMount() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            // TODO: Remove hardcoded account key
            body: JSON.stringify({ accountKey: '9316ce4f-560c-4b02-bb5f-cc1ae9bab7ed' })
        };

        const response = await fetch('https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/balance', requestOptions);
        const data = await response.json();
        this.setState({ data: data });
    }
}
export default dashboard;
