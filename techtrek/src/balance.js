import React from 'react'


const Balance = ({ data }) => {
    return (
        <div>
            <center><h1>Asset Balance</h1></center>
            {data.map((data) => (
                <div>
                    <h5>{data}</h5>
                </div>
            ))}
        </div>
    )
};

export default Balance
