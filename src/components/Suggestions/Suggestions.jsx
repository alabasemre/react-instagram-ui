import { useContext } from 'react';
import AuthContext from '../../store/auth-context';

import style from './Suggestions.module.css';

function Suggestions() {
    const authCtx = useContext(AuthContext);
    const profiles = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

    return (
        <div className={style.suggestions}>
            <div className={style.container}>
                <div className={style.grid_row}>
                    <div className={style.content}>
                        <div className={style.my_profile}>
                            <img
                                src='https://picsum.photos/800'
                                alt='profile'
                            />
                            <span>
                                <b>{authCtx.username}</b>
                            </span>
                        </div>
                    </div>
                </div>

                <div className={style.grid_row}>
                    <div className={style.content}>
                        <p
                            style={{
                                fontWeight: 600,
                                paddingTop: '20px',
                            }}
                        >
                            Suggestions For You
                        </p>
                    </div>
                    <div className={style.action}>See All</div>
                </div>

                {profiles.map((profile) => {
                    return (
                        <div className={style.grid_row} key={profile.id}>
                            <div className={style.content}>
                                <div className={style.suggested_profiles}>
                                    <img
                                        src='https://picsum.photos/800'
                                        alt='profile thumbnail'
                                    />
                                    <div
                                        className={
                                            style.suggested_info_container
                                        }
                                    >
                                        <span style={{ fontWeight: '500' }}>
                                            Username
                                        </span>
                                        <p className={style.suggested_info}>
                                            New To Lorem ipsum dolor sit amet.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={style.action}>Follow</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Suggestions;
