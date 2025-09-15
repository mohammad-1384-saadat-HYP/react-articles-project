import React, {useEffect, useState} from 'react';
import styles from "./HomeContent.module.css";
import Article from "../../../component/article/Article";
import axios from "axios";

const HomeContent = () => {
    const [articles, setArticles] = useState([]);

    async function fetch_articles() {
        await axios.get("http://localhost:8000/articles").then(result => {
            setArticles(result.data.data);
        }).catch(error => {
            console.log(error);
        });
    }

    useEffect(() => {
        fetch_articles();
    }, []);

    return (
        <div className={styles.container}>
            <span className={styles.container_title}>مقالات جدید</span>
            <div className={styles.container_articles}>
                {articles.map(x => {
                    return (<Article key={x?.id} img={x?.img} title={x?.title} time={x?.time}/>)
                })}
            </div>
        </div>
    );
};

export default HomeContent;