import React, {useRef} from 'react';
import CreateArticleInput from "./CreateArticleInput";
import axios from "axios";
import {Link} from "react-router-dom";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"

import styles from './CreateArticleContent.module.css';

const CreateArticleContent = () => {
    const titleRef = useRef();
    const dateRef = useRef();
    const authorRef = useRef();
    const timeRef = useRef();
    const imgRef = useRef();
    const textareaRef = useRef();

    function addToServer() {
        axios.post("http://localhost:8000/articles", {
            id: "10",
            title: titleRef.current.value,
            date: dateRef.current.value,
            author: authorRef.current.value,
            time: timeRef.current.value,
            img: imgRef.current.value,
            textarea: textareaRef.current.value
        });
    }

    return (
        <div className={styles.container}>
            <span className={styles.container_title}>ساخت مقاله جدید</span>
            <CreateArticleInput ref={titleRef} id="1" title="عنوان" type="text"/>
            {/*<CreateArticleInput ref={dateRef} id="2" title="تاریخ" type="text"/>*/}
            <DatePicker calendar={persian} locale={persian_fa}/>
            <CreateArticleInput ref={authorRef} id="3" title="نویسنده" type="text"/>
            <CreateArticleInput ref={timeRef} id="4" title="مدت زمان خواندن (دقیقه)" type="number"/>
            <CreateArticleInput ref={imgRef} id="5" title="لینک تصویر" type="text"/>
            <div className={styles.container_textarea}>
                <label htmlFor="textarea" className={styles.container_textarea_title}>متن</label>
                <textarea ref={textareaRef} id="textarea" className={styles.container_textarea_input}
                          rows="10"></textarea>
            </div>
            <Link to="/">
                <button onClick={addToServer} className={styles.container_createBtn}>ساخت مقاله</button>
            </Link>
        </div>
    );
};

export default CreateArticleContent;