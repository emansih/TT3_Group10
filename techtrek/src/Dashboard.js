import React from 'react';
import { getUser, removeUserSession } from './Utils/Common';
import CurPrice from './CurPriceDynamic';

function Dashboard(props) {
    const username = getUser();
    // handle click event of logout button
    const handleLogout = () => {
        removeUserSession();
        props.history.push('/login');
    }

    return (

        <div>
            Welcome {username}!<br /><br />
            <div><CurPrice /></div>
            <input type="button" onClick={handleLogout} value="Logout" />
        </div>
    );
}

export default Dashboard;