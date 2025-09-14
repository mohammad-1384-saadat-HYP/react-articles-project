import React from 'react';
import styles from './Header.module.css';

const Header = (props) => {

    console.log(props)

    return (
        <div className={styles.container}>
            <h1 className={styles.container_title}>{props.title}</h1>
            <div className={styles.container_spanHolder}>
                <span className={styles.container_spanHolder_span}>لیست مقالات</span>
                <span className={styles.container_spanHolder_span}>مقاله جدید</span>
                <span className={styles.container_spanHolder_span}>درباره</span>
            </div>
        </div>
    );
};

export default Header;