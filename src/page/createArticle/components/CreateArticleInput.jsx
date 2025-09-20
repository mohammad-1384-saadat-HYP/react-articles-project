import React, {forwardRef} from 'react';
import styles from './CreateArticleInput.module.css';

const CreateArticleInput = forwardRef((props, ref) => {
    return (
        <div className={styles.container}>
            <label className={styles.container_label} htmlFor="">{props.title}</label>
            <input ref={ref} className={styles.container_input} id={'input_num_' + props.id} type={props.type}/>
        </div>
    );
});

export default CreateArticleInput;