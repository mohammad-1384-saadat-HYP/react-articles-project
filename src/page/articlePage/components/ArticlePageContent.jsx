import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import LoadingInline from "../../../component/loadingInline/LoadingInline";

import styles from './ArticlePageContent.module.css';


const ArticlePageContent = () => {
    const params = useParams();
    const [article, setArticle] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    async function fetch_chosen_article() {
        try {
            const result = await axios.get(`http://localhost:8000/articles/${params.id}`);
            setArticle(result.data);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        setIsLoading(true);
        fetch_chosen_article();
    }, []);

    return (
        <>
            {isLoading ?
                <LoadingInline/>
                :
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
            }
        </>
    );
};

export default ArticlePageContent;