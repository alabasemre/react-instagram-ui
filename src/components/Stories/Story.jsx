import { useContext } from 'react';
import AuthContext from '../../store/auth-context';

import style from './Story.module.css';

const Story = () => {
    const authCtx = useContext(AuthContext);

    const images = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },
        { id: 9 },
        { id: 10 },
        { id: 11 },
        { id: 12 },
        { id: 13 },
        { id: 14 },
        { id: 15 },
    ];

    return (
        <div className={style.container}>
            {images.map((item) => {
                return (
                    <div className={style.story} key={item.id}>
                        <img
                            className={style.img}
                            src='https://picsum.photos/800'
                            alt=''
                        />
                        <p style={{ textAlign: 'center' }}>
                            {authCtx.username}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default Story;
