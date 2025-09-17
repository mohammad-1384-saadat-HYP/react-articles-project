import React from 'react';
import styles from './Header.module.css';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.container_spanHolder}>
                <Link className={styles.container_spanHolder_span} to="/">لیست مقالات</Link>
                <Link className={styles.container_spanHolder_span} to="/about">درباره</Link>
                <Link className={styles.container_spanHolder_span} to="/create-article">ساخت مقاله جدید</Link>
            </div>
        </div>
    );
};

export default Header;