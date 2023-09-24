import React from 'react';
import styles from './Searchbar.module.scss'

const Searchbar = () => {
    return (
        <div className={styles.searchbar}>
            <input type="text" placeholder="Search" />
        </div>
    );
}

export default Searchbar;
