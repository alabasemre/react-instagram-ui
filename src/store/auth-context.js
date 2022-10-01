import React from 'react';

const AuthContext = React.createContext({
    username: null,
    login: (username) => {},
    logout: () => {},
});

export default AuthContext;
