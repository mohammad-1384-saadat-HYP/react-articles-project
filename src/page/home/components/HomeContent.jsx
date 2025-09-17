import React, {useEffect, useState} from 'react';
import styles from "./HomeContent.module.css";
import Article from "./Article";
import axios from "axios";
import LoadingInline from "../../../component/loadingInline/LoadingInline";

const HomeContent = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    async function fetch_articles() {
        try {
            const result = await axios.get("http://localhost:8000/articles");
            setArticles(result.data);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        setIsLoading(true);
        fetch_articles();
    }, []);

    return (
        <div className={styles.container}>
            <span className={styles.container_title}>مقالات جدید</span>
            {isLoading ?
                <LoadingInline/>
                :
                <div className={styles.container_articles}>
                    {articles.map(x => {
                        return (<Article key={x?.id} id={x?.id} img={x?.img} title={x?.title} time={x?.time}/>)
                    })}
                </div>
            }
        </div>
    );
};

export default HomeContent;