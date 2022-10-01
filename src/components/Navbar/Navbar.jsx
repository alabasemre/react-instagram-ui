import { useContext } from 'react';
import AuthContext from '../../store/auth-context';
import {
    AiOutlineCompass,
    AiOutlineHeart,
    AiOutlineLogout,
} from 'react-icons/ai';
import { HiHome, HiOutlineSearch } from 'react-icons/hi';
import { RiMessengerLine } from 'react-icons/ri';
import { BiPlusCircle } from 'react-icons/bi';
import style from './Navbar.module.css';
import logo from '../../static/images/logo.png';

const Navbar = () => {
    const authCtx = useContext(AuthContext);
    const size = 30;

    const logout = () => {
        authCtx.logout();
    };

    return (
        <>
            <div className={style.navbar_holder}>
                <div className={style.navbar}>
                    <div className={style.logo}>
                        <img src={logo} alt='' />
                    </div>
                    <div className={style.search}>
                        <HiOutlineSearch className={style.search_icon} />
                        <input type='text' placeholder='Search...' />
                    </div>
                    <div className={style.navigation}>
                        <HiHome size={size}></HiHome>
                        <RiMessengerLine size={size}></RiMessengerLine>
                        <BiPlusCircle size={size}></BiPlusCircle>
                        <AiOutlineCompass size={size}></AiOutlineCompass>
                        <AiOutlineHeart size={size}></AiOutlineHeart>
                        <img
                            className={style.ppImg}
                            src='https://picsum.photos/800'
                            alt=''
                        />

                        <AiOutlineLogout
                            size={size}
                            onClick={logout}
                        ></AiOutlineLogout>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
