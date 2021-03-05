// return the user data from the session storage
export const getUser = () => {
    const userStr = localStorage.getItem('username');
    if (userStr) return userStr;
    else return null;
}

// return the token from the session storage
export const getToken = () => {
    console.log(localStorage.getItem('token'));
    return localStorage.getItem('token') || null;

}

// remove the token and user from the session storage
export const removeUserSession = () => {
    console.log("Removing User session...")
    localStorage.clear();
}

// set the token and user from the session storage
export const setUserSession = (token, username) => {
    console.log(token + username);
    localStorage.setItem('token', token);
    localStorage.setItem('user', username);
}