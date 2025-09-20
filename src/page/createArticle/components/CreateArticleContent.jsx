import React from 'react';
import styles from './CreateArticleContent.module.css';
import CreateArticleInput from "./CreateArticleInput";

const CreateArticleContent = () => {
    return (
        <div className={styles.container}>
            <span className={styles.container_title}>ساخت مقاله جدید</span>
            <CreateArticleInput id="1" title="عنوان" type="text"/>
            <CreateArticleInput id="2" title="تاریخ" type="date"/>
            <CreateArticleInput id="3" title="نویسنده" type="text"/>
            <CreateArticleInput id="4" title="مدت زمان خواندن" type="number"/>
            <CreateArticleInput id="5" title="لینک تصویر" type="text"/>
            <div className={styles.container_textarea}>
                <label htmlFor="textarea" className={styles.container_textarea_title}>متن</label>
                <textarea id="textarea" className={styles.container_textarea_input} rows="10"></textarea>
            </div>
            <button className={styles.container_createBtn}>ساخت مقاله</button>
        </div>
    );
};

export default CreateArticleContent;