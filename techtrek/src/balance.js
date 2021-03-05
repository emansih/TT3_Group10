import React from 'react'

const Balance = ({ data }) => {
    return (
        <div>
            <center><h1>Asset Balance</h1></center>
            { (data.length > 0) ? data.map( (dataReturned, index) => {
                return (
                    <div>{ dataReturned.assetBalance }</div>
                )
            }) : <div>Loading...</div>}
        </div>
    )
}

export default Balance
