import React from 'react'

const ApiCall = (dataToDisplay) => {

    return (
        <table>
            <thead>
            <tr>
                <th>Asset Balance</th>
                <th>Cash Balance</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>{ Math.round(JSON.stringify(dataToDisplay.dataToDisplay.assetBalance) * 100) / 100 }</td>
                <td>{ Math.round(JSON.stringify(dataToDisplay.dataToDisplay.cashBalance) * 100) / 100 }</td>
            </tr>

            </tbody>
        </table>
    );
}
export default ApiCall
