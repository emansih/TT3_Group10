import React from 'react';

class dashboard extends React.Component {
    componentDidMount() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            // TODO: Remove hardcoded account key
            body: JSON.stringify({ accountKey: '9316ce4f-560c-4b02-bb5f-cc1ae9bab7ed' })
        };
        fetch('https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/balance', requestOptions)
            .then(async response => {
                const data = await response.json();
                if (!response.ok) {
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }
                this.setState({ data: data })
            })
    }
}
export default dashboard;
