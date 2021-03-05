import React, { Component } from 'react'
import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

class transactionDB extends Component {
    createTransactionTable = () => {
        open({
            filename: './src/transactionData.db',
            driver: sqlite3.Database
        }).then((db) => {
            db.exec('CREATE TABLE Username (col TEXT), Transaction_Id (col TEXT), Time_Of_Transaction (col TEXT), Buy_Or_Sell (col TEXT), Amount (col TEXT)')
        })
    }
    addTransactionToDB = () => {
        open({
            filename: './src/transactionData.db',
            driver: sqlite3.Database
        }).then((db) => {
        })
    }
    queryTransactionData = () => {
        open({
            filename: './src/transactionData.db',
            driver: sqlite3.Database
        }).then((db) => {
        })
    }
}

const TableHeader = () => {
    return (
        <thread>
            <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Remove</th>
            </tr>
        </thread>

    )
}

const Table = () => {
        return (
            <table>
                <TableHeader />
            </table>
        )
}

export default Table