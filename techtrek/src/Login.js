import React, { useState } from 'react';
import axios from 'axios';
import { setUserSession } from './Utils/Common';
const dotenv = require('dotenv');

function Login(props) {
  const username = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // handle button click of login form
  const headers = {
    'Content-Type': 'application/json',
    'x-api-key': 'wvn4vaj9S24aI8OiWsddf5B1h5z0EjKQ41GnONBy'
  };

  const handleLogin = () => {
    setError(null);
    setLoading(true);
    // console.log(username.value, password.value);
    axios.post('https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/login', { username: username.value, password: password.value }, {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'wvn4vaj9S24aI8OiWsddf5B1h5z0EjKQ41GnONBy'
      }
    }).then(response => {
      setLoading(false);
      setUserSession(response.data.accountKey, response.data.username);
      props.history.push('/dashboard');
    }).catch(error => {
      setLoading(false);
      if (error.response.status === 401) setError(error.response.data.message);
      else setError("Something went wrong. Please try again later.");
    });
  }

  return (
    <div>
      Login<br /><br />
      <div>
        Username<br />
        <input type="text" {...username} autoComplete="new-password" />
      </div>
      <div style={{ marginTop: 10 }}>
        Password<br />
        <input type="password" {...password} autoComplete="new-password" />
      </div>
      {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
      <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
    </div>
  );
}

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}

export default Login;