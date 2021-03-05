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
                <td>{ JSON.stringify(dataToDisplay.dataToDisplay.assetBalance) }</td>
                <td>{ JSON.stringify(dataToDisplay.dataToDisplay.cashBalance) }</td>
            </tr>

            </tbody>
        </table>
    );
}
export default ApiCall
