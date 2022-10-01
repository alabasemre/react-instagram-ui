import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { useContext } from 'react';
import AuthContext from './store/auth-context';

function App() {
    const authCtx = useContext(AuthContext);

    const user = authCtx.username;
    return (
        <>
            {user ? <Navbar /> : ''}
            <Router>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
