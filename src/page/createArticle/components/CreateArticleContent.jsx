import React from 'react';
import styles from './CreateArticleContent.module.css';

const CreateArticleContent = () => {
    return (
        <div className={styles.container}>
            <span className={styles.container_title}>ساخت مقاله جدید</span>
            <div className={styles.container_field}>
                <span className={styles.container_field_title}>عنوان</span>
                <input className={styles.container_field_input} type="text"/>
            </div>
            <div className={styles.container_field}>
                <span className={styles.container_field_title}>تاریخ</span>
                <input className={styles.container_field_input} type="date"/>
            </div>
            <div className={styles.container_field}>
                <span className={styles.container_field_title}>نویسنده</span>
                <input className={styles.container_field_input} type="text"/>
            </div>
            <div className={styles.container_field}>
                <span className={styles.container_field_title}>مدت زمان خواندن</span>
                <input className={styles.container_field_input} type="number"/>
            </div>
            <div className={styles.container_field}>
                <span className={styles.container_field_title}>متن</span>
                <textarea className={`${styles.container_field_input} ${styles.textarea}`} rows="10"></textarea>
            </div>
            <button className={styles.container_createBtn}>ساخت مقاله</button>
        </div>
    );
};

export default CreateArticleContent;