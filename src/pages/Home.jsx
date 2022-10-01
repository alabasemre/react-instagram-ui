import { useContext } from 'react';
import AuthContext from '../store/auth-context';
import Feed from '../components/Feed/Feed';
import Login from '../components/Login/Login';
import Story from '../components/Stories/Story';
import Suggestions from '../components/Suggestions/Suggestions';

const Home = () => {
    const authCtx = useContext(AuthContext);
    const user = authCtx.username;

    return !user ? (
        <Login />
    ) : (
        <div
            style={{
                maxWidth: '970px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(3,1fr)',
                marginTop: '25px',
            }}
        >
            <div style={{ gridArea: '1/1/2/3' }}>
                <Story></Story>
                <Feed />
            </div>
            <div style={{ gridArea: '1/3/2/4' }}>
                <Suggestions />
            </div>
        </div>
    );
};

export default Home;
