import { useState, useContext } from 'react';
import AuthContext from '../../store/auth-context';

import styles from './Login.module.css';
import homeImg from '../../static/images/background.png';
import appstore from '../../static/images/apple.png';
import googleplay from '../../static/images/google.png';
import Footer from '../Footer/Footer';

const Login = ({ setUser }) => {
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const authCtx = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        authCtx.login(username);
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.inner_container}>
                    <div className={styles.img_holder}>
                        <img src={homeImg} alt='' />
                    </div>

                    <div className={styles.right_holder}>
                        <div className={styles.form_holder}>
                            <h1 className={styles.header}>INSTAGRAM</h1>
                            <form
                                className={styles.signin_form}
                                onSubmit={handleLogin}
                            >
                                <input
                                    type='text'
                                    value={username}
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                    placeholder='Phone number,username, or email'
                                />
                                <input
                                    type='password'
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    placeholder='Password'
                                />
                                <button className={styles.btn_login}>
                                    Log In
                                </button>
                            </form>
                            <div className={styles.extras}>
                                <h3>Log in with Facebook</h3>
                                <h4>Lost Password?</h4>
                            </div>
                        </div>
                        <div className={styles.signup}>
                            <p>
                                Don't have an account? <a href='/'>Sign Up </a>
                            </p>{' '}
                        </div>{' '}
                        <p>
                            (Sign up does not work! You can sign in with any
                            email-pass combination.)
                        </p>
                        <div className={styles.getapp}>
                            <p>Get the app.</p>
                        </div>
                        <div className={styles.apps}>
                            <img src={appstore} alt='' />
                            <img src={googleplay} alt='' />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Login;
