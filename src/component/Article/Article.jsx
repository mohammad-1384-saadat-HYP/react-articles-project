import React from 'react';
import styles from "./Article.module.css";

const Article = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.container_imgHolder}>
                <img className={styles.container_imgHolder_img} src={props.img} alt={props.title}/>
            </div>
            <div className={styles.container_textHolder}>
                <span className={styles.container_textHolder_title}>{props.title}</span>
                <span className={styles.container_textHolder_time}>خواندن {props.time} دقیقه ای</span>
            </div>
        </div>
    );
};

export default Article;