import { useReducer } from 'react';

import AuthContext from './auth-context';

const defaultAuthState = {
    username: localStorage.getItem('username'),
};

const authReducer = (state, action) => {
    if (action.type === 'LOGIN') {
        return { username: action.username };
    }
    if (action.type === 'LOGOUT') {
        return { username: null };
    }
};

const AuthProvider = (props) => {
    const [authState, authActions] = useReducer(authReducer, defaultAuthState);

    const loginHandler = (username) => {
        localStorage.setItem('username', username);
        authActions({ type: 'LOGIN', username: username });
    };

    const logoutHandler = () => {
        localStorage.removeItem('username');
        authActions({ type: 'LOGOUT' });
    };

    const authContext = {
        username: authState.username,
        login: loginHandler,
        logout: logoutHandler,
    };

    return (
        <AuthContext.Provider value={authContext}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
