import React, {useRef} from 'react';
import styles from './CreateArticleContent.module.css';
import CreateArticleInput from "./CreateArticleInput";
import axios from "axios";
import {Link} from "react-router-dom";

const CreateArticleContent = () => {
    const titleRef = useRef();
    const dateRef = useRef();
    const authorRef = useRef();
    const timeRef = useRef();
    const imgUrlRef = useRef();
    const textareaRef = useRef();

    function addToServer() {
        axios.post("http://localhost:8000/articles", {
            id: "9",
            title: titleRef.current.value,
            date: dateRef.current.value,
            author: authorRef.current.value,
            time: timeRef.current.value,
            imgUrl: imgUrlRef.current.value,
            textarea: textareaRef.current.value
        });
    }

    return (
        <div className={styles.container}>
            <span className={styles.container_title}>ساخت مقاله جدید</span>
            <CreateArticleInput ref={titleRef} id="1" title="عنوان" type="text"/>
            <CreateArticleInput ref={dateRef} id="2" title="تاریخ" type="text"/>
            <CreateArticleInput ref={authorRef} id="3" title="نویسنده" type="text"/>
            <CreateArticleInput ref={timeRef} id="4" title="مدت زمان خواندن (دقیقه)" type="number"/>
            <CreateArticleInput ref={imgUrlRef} id="5" title="لینک تصویر" type="text"/>
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