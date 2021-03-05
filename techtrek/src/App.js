import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import Home from './Home';
import { getToken, removeUserSession, setUserSession } from './Utils/Common';
//
function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setLoading] = useState(true);

  const checkLoggedIn = () => {
    if (getToken() === null) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
    return (getToken())
  }

  useEffect(() => {
    checkLoggedIn();
    setLoading(false);
  }, [isLoading])

  // if (!isLoggedIn) {

  return (

    <div className='App'>
      {isLoading ? (
        <div> Still loading </div>
      ) : (<BrowserRouter>
        <div>
          <div className='header'>
            <NavLink exact activeClassName='active' to='/'>
              Home
              </NavLink>
            {isLoggedIn ? (
              <>
                <NavLink activeClassName='active' to='/dashboard'>
                  Dashboard
                  </NavLink>
                <small>(Access with token only)</small>
              </>
            ) : (
              <>
                <NavLink activeClassName='active' to='/login'>
                  Login
                  </NavLink>
                <small>(Access without token only)</small>
              </>
            )}
          </div>
          <div className='content'>
            <Switch>
              <Route exact path='/' component={Home} />
              {isLoggedIn ? (
                <Route path='/dashboard' component={Dashboard} />
              ) : (
                <Route path='/login' component={Login} />
              )}
            </Switch>
          </div>
        </div>
      </BrowserRouter>)}


    </div>
  );


}


export default App;
