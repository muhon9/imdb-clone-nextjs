import React from 'react';
import styles from './Nav.module.scss'
import Image from 'next/image'
import { FiMenu } from 'react-icons/fi';
import { BsFillBookmarkPlusFill } from 'react-icons/bs';
import Searchbar from '../Searchbar/Searchbar';

const Nav = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.nav}>
            <Image className={styles.logo} width="70" height="70" src="/imdbLogo.svg" alt="IMDB Logo" />
            <div className={styles.menu}><FiMenu className={styles.menu__icon}/><div>Menu</div></div>
            <Searchbar />
            <Image className={styles.imdb__pro} width="70" height="70" src="/imdbproLogo.svg" alt="IMDB Logo" />
            <div className={styles.watchlist}>
                < BsFillBookmarkPlusFill className={styles.watchlist__icon}/>
                <div className={styles.watchlist__text}>Watchlist</div>
            </div>
            <div className={styles.signin}>Sign In</div>
            <div className={styles.language}>En</div>
        </div>
        </div>
    );
}

export default Nav;
