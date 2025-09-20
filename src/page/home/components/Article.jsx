import React from 'react';
import {Link} from "react-router-dom";

import styles from "./Article.module.css";

const Article = (props) => {
    return (
        <div className={styles.container}>
            <Link className={styles.container_imgHolder} to={`/article/${props.id}`}>
                <img className={styles.container_imgHolder_img} src={props.img} alt={props.title}/>
            </Link>
            <div className={styles.container_textHolder}>
                <Link className={styles.container_textHolder_title} to={`/article/${props.id}`}>
                    <span className={styles.container_textHolder_title_span}>{props.title}</span>
                </Link>
                <span className={styles.container_textHolder_time}>خواندن {props.time} دقیقه ای</span>
            </div>
        </div>
    );
};

export default Article;