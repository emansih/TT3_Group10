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
            {
                <tr>
                    <td>{ dataToDisplay.assetBalance }</td>
                    <td>{ dataToDisplay.cashBalance }</td>
                </tr>
            }
            </tbody>
        </table>
    );
}
export default ApiCall
