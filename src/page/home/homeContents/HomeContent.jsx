import React from 'react';
import styles from "./HomeContent.module.css";
import Article from "../../../component/Article/Article";

const HomeContent = () => {
    const articles = [
        {img: "/images/javascript-events.png", title: "رویداد ها در جاوا اسکریپت", time: "30"},
        {img: "/images/javascript-functions.png", title: "انواع توابع در جاوا اسکریپت", time: "15"},
        {img: "/images/javascript-variables.png", title: "متغیر ها در جاوا اسکریپت", time: "20"},
        {img: "/images/javascript-styles.png", title: "استایل ها در جاوا اسکریپت", time: "5"},
        {img: "/images/javascript-styles.png", title: "استایل ها در جاوا اسکریپت", time: "5"},
        {img: "/images/javascript-loops.png", title: "حلقه ها در جاوا اسکریپت", time: "10"},
        {
            img: "/images/javascript-callbackFunctions.png",
            title: "توابع بازگشتی در جاوا اسکریپت",
            time: "15"
        },
        {img: "/images/javascript-events.png", title: "رویداد ها در جاوا اسکریپت", time: "30"}
    ];

    return (
        <div className={styles.container}>
            <span className={styles.container_title}>مقالات جدید</span>
            <div className={styles.container_articles}>
                {articles.map(x => <Article img={x.img} title={x.title} time={x.time}/>)}
            </div>
        </div>
    );
};

export default HomeContent;