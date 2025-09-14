import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.container_spanHolder}>
                <span className={styles.container_spanHolder_span}>لیست مقالات</span>
                <span className={styles.container_spanHolder_span}>مقاله جدید</span>
                <span className={styles.container_spanHolder_span}>درباره</span>
            </div>
        </div>
    );
};

export default Header;