import React from 'react'

const ApiCall = (dataToDisplay) => {
    return (
        <div>
            <div>
                <b>Asset Balance</b>
                <p></p>
                { Math.round(JSON.stringify(dataToDisplay.dataToDisplay.assetBalance) * 100) / 100 }
                <p></p>
            </div>

            <div>
                <b>Cash Balance</b>
                <p></p>
                { Math.round(JSON.stringify(dataToDisplay.dataToDisplay.cashBalance) * 100) / 100 }
                <p></p>

            </div>
        </div>


    )

}
export default ApiCall
