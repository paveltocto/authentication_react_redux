const handleResponse = (response) => {
    if (!response.ok) {
        return Promise.reject(response.statusText);
    }

    return response.json();
};

export const authentication = (username, password) => {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username, password})
    };

    return fetch('', requestOptions).then(handleResponse).then(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('jwt_token', JSON.stringify(user));
        }

        return user;
    });
};


export const logout = () => {
    localStorage.removeItem('jwt_token');
};