import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.container}>
            <span className={styles.container_span}>لیست مقالات</span>
            <span className={styles.container_span}>مقاله جدید</span>
            <span className={styles.container_span}>درباره</span>
        </div>
    );
};

export default Header;