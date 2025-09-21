import React, {useState} from 'react';
import CreateArticleInput from "./CreateArticleInput";
import axios from "axios";
import {Link} from "react-router-dom";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import styles from './CreateArticleContent.module.css';

const CreateArticleContent = () => {
    const [article, setArticle] = useState({
        title: "",
        date: "",
        author: "",
        time: "",
        img: "",
        content: ""
    })

    const handleChangeInput = (e) => {
        setArticle(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }

    const adToServer = () => {
        axios.post("http://localhost:8000/articles", {
            id: "9",
            title: article.title,
            date: article.date,
            author: article.author,
            time: article.time,
            img: article.img,
            content: article.content
        })
    }

    return (
        <div className={styles.container}>
            <span className={styles.container_title}>ساخت مقاله جدید</span>
            <CreateArticleInput id="1" title="عنوان" type="text" name="title" onChange={handleChangeInput}/>
            <div className={styles.dateHolder}>
                <label htmlFor="date_input">تاریخ</label>
                <DatePicker
                    id="date_input"
                    calendar={persian}
                    locale={persian_fa}
                    inputClass={styles.dateHolder_date}
                    onChange={date => {
                        setArticle(prevState => ({
                            ...prevState,
                            date: date.format()
                        }))
                    }}
                />
            </div>
            <CreateArticleInput id="3" title="نویسنده" type="text" name="author" onChange={handleChangeInput}/>
            <CreateArticleInput id="4" title="مدت زمان خواندن (دقیقه)" type="number" name="time"
                                onChange={handleChangeInput}/>
            <CreateArticleInput id="5" title="لینک تصویر" type="text" name="img" onChange={handleChangeInput}/>
            <div className={styles.container_textarea}>
                <label htmlFor="textarea" className={styles.container_textarea_title}>متن</label>
                <textarea id="textarea" className={styles.container_textarea_input} rows="10" name="content"
                          onChange={handleChangeInput}></textarea>
            </div>
            <Link to="/">
                <button onClick={adToServer} className={styles.container_createBtn}>ساخت مقاله</button>
            </Link>
        </div>
    );
};

export default CreateArticleContent;