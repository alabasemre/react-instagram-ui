import style from './Feed.module.css';
import {
    IoChatbubbleOutline,
    IoBookmarkOutline,
    IoPaperPlaneOutline,
} from 'react-icons/io5';
import { IoIosMore } from 'react-icons/io';
import { AiOutlineHeart } from 'react-icons/ai';

const Feed = () => {
    const size = 25;

    const feed = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

    return (
        <>
            {feed.map((item) => (
                <div className={style.container} key={item.id}>
                    <div className={style.top_info}>
                        <div className={style.top_info_left}>
                            <img
                                className={style.profile_pic}
                                src='https://picsum.photos/800'
                                alt=''
                            />
                            <span style={{ fontWeight: 600 }}>username</span>
                        </div>
                        <IoIosMore size={30}></IoIosMore>
                    </div>
                    <div className={style.content_pic}>
                        <img src='https://picsum.photos/800' alt='' />
                    </div>
                    <div className={style.container_bottom}>
                        <div className={style.buttons}>
                            <div className={style.buttons_left}>
                                <AiOutlineHeart size={size}></AiOutlineHeart>
                                <IoChatbubbleOutline
                                    size={size}
                                ></IoChatbubbleOutline>
                                <IoPaperPlaneOutline
                                    size={size}
                                ></IoPaperPlaneOutline>
                            </div>
                            <div>
                                <IoBookmarkOutline
                                    size={size}
                                ></IoBookmarkOutline>
                            </div>
                        </div>
                        <div className={style.comments}>
                            <div className={style.comments_likes}>
                                <img
                                    className={style.comments_img}
                                    src='https://picsum.photos/800'
                                    alt=''
                                />
                                <span>
                                    Liked by alabasemre and 9.934 others
                                </span>
                            </div>
                            <div className={style.post_info}>
                                <p>username</p>
                                <span>Bu bir post açıklaması felana</span>
                            </div>
                            <div style={{ marginTop: 5 }}>
                                <p style={{ color: 'gray' }}>
                                    View all 36 comments
                                </p>
                                <p
                                    style={{
                                        color: 'gray',
                                        fontSize: 11,
                                        marginTop: 5,
                                    }}
                                >
                                    1 HOUR AGO
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Feed;
