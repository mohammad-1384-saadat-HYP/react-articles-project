import React, {useEffect, useState} from 'react';
import styles from './ArticlePageContent.module.css';
import {useParams} from "react-router-dom";
import axios from "axios";

const ArticlePageContent = () => {
    const params = useParams();

    const [article, setArticle] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/articles/${params.id}`).then(result => {
            setArticle(result.data)
        }).catch(error => {
            console.log(error);
        });
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.container_title}>{article.title}</h1>
            <div className={styles.container_details}>
                <span>تاریخ {article.date}</span>
                <span>نویسنده: {article.author}</span>
                <span>مدت زمان خواندن: {article.time} دقیقه</span>
            </div>
            <div className={styles.container_imgHolder}>
                <img className={styles.container_imgHolder_img} src={article.img} alt={article.title}/>
            </div>
            <p>{article.content}</p>
        </div>
    );
};

export default ArticlePageContent;