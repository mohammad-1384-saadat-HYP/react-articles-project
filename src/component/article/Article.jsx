import React from 'react';
import styles from "./Article.module.css";
import {Link} from "react-router-dom";

const Article = (props) => {
    return (
        <div className={styles.container}>
            <Link className={styles.container_imgHolder} to="/article">
                <img className={styles.container_imgHolder_img} src={props.img} alt={props.title}/>
            </Link>
            <div className={styles.container_textHolder}>
                <Link className={styles.container_textHolder_title} to="/article">
                    <span className={styles.container_textHolder_title_span}>{props.title}</span>
                </Link>
                <span className={styles.container_textHolder_time}>خواندن {props.time} دقیقه ای</span>
            </div>
        </div>
    );
};

export default Article;