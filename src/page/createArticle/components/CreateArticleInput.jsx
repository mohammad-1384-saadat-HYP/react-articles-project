import React from 'react';
import styles from './CreateArticleInput.module.css';

const CreateArticleInput = props => {
    return (
        <div className={styles.container}>
            <label className={styles.container_label} htmlFor="">{props.title}</label>
            <input className={styles.container_input} id={'input_num_' + props.id} type={props.type} name={props.name}
                   onChange={props.fun}/>
        </div>
    );
};

export default CreateArticleInput;