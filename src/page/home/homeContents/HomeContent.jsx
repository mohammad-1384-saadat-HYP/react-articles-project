import React from 'react';
import styles from "./HomeContent.module.css";
import Article from "../../../component/article/Article";

const HomeContent = () => {
    const articles = [
        {id: "1", img: "/images/javascript-events.png", title: "رویداد ها در جاوا اسکریپت", time: "30"},
        {id: "2", img: "/images/javascript-functions.png", title: "انواع توابع در جاوا اسکریپت", time: "15"},
        {id: "3", img: "/images/javascript-variables.png", title: "متغیر ها در جاوا اسکریپت", time: "20"},
        {id: "4", img: "/images/javascript-styles.png", title: "استایل ها در جاوا اسکریپت", time: "5"},
        {id: "5", img: "/images/javascript-styles.png", title: "استایل ها در جاوا اسکریپت", time: "5"},
        {id: "6", img: "/images/javascript-loops.png", title: "حلقه ها در جاوا اسکریپت", time: "10"},
        {
            id: "7",
            img: "/images/javascript-callbackFunctions.png",
            title: "توابع بازگشتی در جاوا اسکریپت",
            time: "15"
        },
        {id: "8", img: "/images/javascript-events.png", title: "رویداد ها در جاوا اسکریپت", time: "30"}
    ];

    // const articles = [];

    return (
        <div className={styles.container}>
            <span className={styles.container_title}>مقالات جدید</span>
            <div className={styles.container_articles}>
                {articles.map(x => {
                    return (<Article key={x.id} img={x.img} title={x.title} time={x.time}/>)
                })}
            </div>
        </div>
    );
};

export default HomeContent;